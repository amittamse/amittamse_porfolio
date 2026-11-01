import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { PROJECTS, BLOG_POSTS } from '../src/data/portfolioData.ts';

dotenv.config();

const app = express();
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// System info
app.get('/api/system-status', (_req: Request, res: Response) => {
  const isSmtpConfigured = Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
  );

  res.json({
    app: 'Amit Tamse Portfolio & API Engine (Vercel Serverless)',
    nodeVersion: process.version,
    smtpConfigured: isSmtpConfigured,
    smtpHost: process.env.SMTP_HOST || 'Not configured (using preview simulation mode)',
    receiverEmail: process.env.CONTACT_RECEIVER_EMAIL || 'amitktamse@gmail.com',
    platform: 'Vercel Serverless Function',
  });
});

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    platform: 'Vercel',
  });
});

app.get('/api/projects', (req: Request, res: Response) => {
  const category = req.query.category as string | undefined;
  if (category && category !== 'All') {
    const filtered = PROJECTS.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
    res.json({ count: filtered.length, data: filtered });
    return;
  }
  res.json({ count: PROJECTS.length, data: PROJECTS });
});

app.get('/api/posts', (req: Request, res: Response) => {
  const search = (req.query.q as string | undefined)?.toLowerCase();
  const category = req.query.category as string | undefined;

  let results = [...BLOG_POSTS];
  if (category && category !== 'All') {
    results = results.filter(
      (post) => post.category.toLowerCase() === category.toLowerCase()
    );
  }
  if (search) {
    results = results.filter(
      (post) =>
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search) ||
        post.content.some((c) => c.text.toLowerCase().includes(search))
    );
  }
  res.json({ count: results.length, data: results });
});

app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, subject, company, message, honeypot } = req.body;

    if (honeypot) {
      res.status(400).json({ success: false, message: 'Invalid submission detected.' });
      return;
    }

    const errors: Record<string, string> = {};
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.name = 'Full name is required (minimum 2 characters).';
    } else if (name.trim().length > 100) {
      errors.name = 'Full name must not exceed 100 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      errors.email = 'A valid email address is required.';
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
      errors.subject = 'Subject is required (minimum 3 characters).';
    } else if (subject.trim().length > 150) {
      errors.subject = 'Subject must not exceed 150 characters.';
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      errors.message = 'Inquiry message must be at least 10 characters.';
    } else if (message.trim().length > 4000) {
      errors.message = 'Message must not exceed 4,000 characters.';
    }

    if (Object.keys(errors).length > 0) {
      res.status(422).json({
        success: false,
        message: 'Please resolve the highlighted validation errors.',
        errors,
      });
      return;
    }

    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      company: company ? String(company).trim() : 'Not provided',
      message: message.trim(),
    };

    const targetEmail = process.env.CONTACT_RECEIVER_EMAIL || 'amitktamse@gmail.com';
    const isSmtpConfigured = Boolean(
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
    );

    if (isSmtpConfigured) {
      const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
      const isSecure = process.env.SMTP_SECURE === 'true' || port === 465;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: port,
        secure: isSecure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"${sanitizedData.name} via Portfolio" <${process.env.SMTP_USER}>`,
        replyTo: sanitizedData.email,
        to: targetEmail,
        subject: `[Portfolio Inquiry] ${sanitizedData.subject}`,
        text: `Name: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\nCompany: ${sanitizedData.company}\nSubject: ${sanitizedData.subject}\n\nMessage:\n${sanitizedData.message}`,
      };

      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({
        success: true,
        mode: 'smtp',
        message: 'Your inquiry has been delivered directly to Amit Tamse via SMTP mailer.',
        previewDetails: {
          messageId: info.messageId,
          sentTo: targetEmail,
          timestamp: new Date().toISOString(),
          subject: sanitizedData.subject,
          senderName: sanitizedData.name,
          senderEmail: sanitizedData.email,
          company: sanitizedData.company,
        },
      });
      return;
    }

    const simulatedMessageId = `<vercel-${Date.now()}.${Math.random().toString(36).substring(2, 9)}@hireamittamse.com>`;
    res.status(200).json({
      success: true,
      mode: 'preview',
      message: 'Inquiry received and validated successfully! (Server running in Test Preview Mode).',
      previewDetails: {
        messageId: simulatedMessageId,
        sentTo: targetEmail,
        timestamp: new Date().toISOString(),
        subject: sanitizedData.subject,
        senderName: sanitizedData.name,
        senderEmail: sanitizedData.email,
        company: sanitizedData.company,
        previewNote: 'SMTP environment variables are not active. The inquiry was validated and logged.',
      },
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.message || 'Server error processing contact inquiry.',
    });
  }
});

export default app;
