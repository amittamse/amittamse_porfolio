import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, HelpCircle, ExternalLink, RefreshCw, Copy, Check } from 'lucide-react';
import { ContactFormData, ContactSubmissionResult } from '../types/portfolio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    company: '',
    message: '',
    honeypot: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<ContactSubmissionResult | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Client-side field validation
  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Full name is required (minimum 2 characters).';
    } else if (formData.name.trim().length > 100) {
      errors.name = 'Full name must not exceed 100 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid work or personal email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errors.subject = 'Subject is required (minimum 3 characters).';
    } else if (formData.subject.trim().length > 150) {
      errors.subject = 'Subject must not exceed 150 characters.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide at least 10 characters detailing your inquiry.';
    } else if (formData.message.trim().length > 4000) {
      errors.message = 'Message must not exceed 4,000 characters.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear validation error on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        setSubmissionResult({
          success: false,
          message: data.message || 'Validation or delivery failed. Please check form inputs.',
          errors: data.errors,
        });
      } else {
        setSubmissionResult(data);
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          subject: '',
          company: '',
          message: '',
          honeypot: '',
        });
      }
    } catch (err: any) {
      console.error('Contact submit error:', err);
      setSubmissionResult({
        success: false,
        message: 'Could not connect to the Express server. Please verify network connectivity or email directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('amitktamse@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <span>Inquiries & Communication</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Initiate a Conversation with Amit Tamse
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Available for enterprise architectural advisory, conference speaking, executive leadership opportunities, or technical inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Backend Nodemailer Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider text-cyan-400">
                Direct Channels
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="space-y-0.5">
                    <div className="text-[11px] text-slate-400 font-mono">Primary Email</div>
                    <a
                      href="mailto:amitktamse@gmail.com"
                      className="text-white hover:text-cyan-400 font-medium transition-colors"
                    >
                      amitktamse@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                  <div className="text-[11px] text-slate-400 font-mono">Location & Base</div>
                  <div className="text-white font-medium">San Jose, California, United States</div>
                  <div className="text-xs text-slate-400">Pacific Time Zone (UTC-7 / UTC-8)</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="text-[11px] text-slate-400 font-mono">Professional Profiles</div>
                  <div className="flex flex-wrap gap-3 text-xs text-cyan-400">
                    <a
                      href="https://hireamittamse.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline flex items-center gap-1"
                    >
                      <span>hireamittamse.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://github.com/amittamse"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline flex items-center gap-1"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/amittamse"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline flex items-center gap-1"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Engine Architecture Card */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs space-y-2.5">
              <div className="flex items-center gap-2 font-semibold text-slate-200">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Nodemailer + Express Architecture</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Submissions are processed by an Express route (<code className="text-cyan-300 font-mono">/api/contact</code>)
                equipped with input sanitization, anti-bot honeypots, and Nodemailer transport.
              </p>
              <div className="text-[11px] text-slate-500 font-mono">
                Environment: SMTP configured via SMTP_HOST or running in Test Preview Mode.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl space-y-6">
              {/* Status Banner */}
              {submissionResult && (
                <div
                  className={`p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm animate-in fade-in duration-200 ${
                    submissionResult.success
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                      : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                  }`}
                >
                  {submissionResult.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}

                  <div className="space-y-2 w-full">
                    <div className="font-semibold">{submissionResult.message}</div>
                    {submissionResult.previewDetails && (
                      <div className="pt-2 border-t border-emerald-500/30 flex items-center justify-between">
                        <span className="text-xs text-emerald-300/80 font-mono">
                          Mode: {submissionResult.mode === 'smtp' ? 'Live SMTP Transporter' : 'Test Preview Transporter'}
                        </span>
                        <button
                          type="button"
                          onClick={() => setShowPreviewModal(true)}
                          className="px-2.5 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 rounded hover:bg-emerald-500/30 transition-colors"
                        >
                          View Delivery Receipt
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field (hidden from genuine users) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                      <span>Full Name *</span>
                      {fieldErrors.name && (
                        <span className="text-[11px] text-rose-400">{fieldErrors.name}</span>
                      )}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sarah Connor"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        fieldErrors.name
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                      <span>Email Address *</span>
                      {fieldErrors.email && (
                        <span className="text-[11px] text-rose-400">{fieldErrors.email}</span>
                      )}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="s.connor@enterprise.com"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        fieldErrors.email
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                      <span>Subject *</span>
                      {fieldErrors.subject && (
                        <span className="text-[11px] text-rose-400">{fieldErrors.subject}</span>
                      )}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Architectural Advisory Inquiry"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        fieldErrors.subject
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                  </div>

                  {/* Company / Organization Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      <span>Organization / Company</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Name (Optional)"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-slate-300">
                      <span>Inquiry Message *</span>
                    </label>
                    <span className="text-[11px] text-slate-500">
                      {formData.message.length}/4000
                    </span>
                  </div>
                  {fieldErrors.message && (
                    <div className="text-[11px] text-rose-400">{fieldErrors.message}</div>
                  )}
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project, architectural challenge, or inquiry scope..."
                    className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      fieldErrors.message
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    Direct delivery to <code className="text-slate-300 font-mono">amitktamse@gmail.com</code>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-2.5 bg-cyan-400 hover:bg-cyan-300 disabled:bg-slate-800 text-slate-950 font-semibold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-cyan-500/20 transition-all cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Sending via Nodemailer...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Test Preview Receipt Inspect Modal */}
      {showPreviewModal && submissionResult?.previewDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl text-slate-100">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h4 className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Nodemailer Transmission Receipt</span>
              </h4>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 text-xs font-mono bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div><strong className="text-slate-400">Message ID:</strong> <span className="text-cyan-300">{submissionResult.previewDetails.messageId}</span></div>
              <div><strong className="text-slate-400">Recipient:</strong> <span className="text-emerald-300">{submissionResult.previewDetails.sentTo}</span></div>
              <div><strong className="text-slate-400">Sender:</strong> {submissionResult.previewDetails.senderName} ({submissionResult.previewDetails.senderEmail})</div>
              <div><strong className="text-slate-400">Company:</strong> {submissionResult.previewDetails.company}</div>
              <div><strong className="text-slate-400">Subject:</strong> {submissionResult.previewDetails.subject}</div>
              <div><strong className="text-slate-400">Timestamp:</strong> {submissionResult.previewDetails.timestamp}</div>
            </div>

            {submissionResult.previewDetails.previewNote && (
              <p className="text-xs text-slate-400 bg-slate-800/40 p-3 rounded-lg border border-slate-700/60 leading-relaxed">
                {submissionResult.previewDetails.previewNote}
              </p>
            )}

            <div className="text-right pt-2">
              <button
                onClick={() => setShowPreviewModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              >
                Dismiss Receipt
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
