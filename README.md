# Amit Tamse - Executive Portfolio & Engineering Platform

A dynamic, production-grade portfolio and technical thought-leadership web application for **Amit Tamse**, Senior Engineering Leader & Senior Computer Scientist at Adobe.

Built with a unified full-stack architecture featuring an **Express.js** backend, **Nodemailer** contact delivery, **React 19**, and **Tailwind CSS v4**.

🌐 **Original Website**: [https://hireamittamse.com/](https://hireamittamse.com/)  
🐙 **GitHub**: [https://github.com/amittamse](https://github.com/amittamse)  
📧 **Contact**: [amitktamse@gmail.com](mailto:amitktamse@gmail.com)

---

## 🚀 Key Features

- **Executive Introduction & Bio**: Highlights 15+ years of software architecture leadership, managing enterprise platforms across Salesforce, Microsoft Dynamics 365, Gainsight NXT, and Databricks.
- **Interactive Distributed Systems Console**: Real-time architectural visualization of enterprise sync pipelines, PySpark medallion lakehouses, and Agentforce autonomous workflows.
- **Enterprise Case Studies Showcase**: Filterable project showcases with in-depth modals exploring problem statements, architectural solutions, and quantitative business wins.
- **Engineering Blog & Technical Monographs**: Built-in searchable article reader with reading time indicators, category filters, and syntax-highlighted code blocks.
- **Nodemailer Inquiries Pipeline**:
  - Full server-side validation and anti-spam honeypot defense.
  - Live SMTP mailer (supports Gmail SMTP, Hostinger Webmail, SendGrid, etc.).
  - Automatic test preview mode with delivery receipt generator for development/staging environments.
- **Multi-Cloud Ready**:
  - **Hostinger Node.js**: Ready for deployment via GitHub webhook and PM2 (`ecosystem.config.cjs`).
  - **Vercel**: Pre-configured serverless handler (`vercel.json` & `api/index.ts`).

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Motion
- **Backend**: Node.js, Express 4, Nodemailer
- **Bundler & Tooling**: Vite, TSX, ESBuild
- **Process Management**: PM2 (`ecosystem.config.cjs`)

---

## 📦 Quick Start & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/amittamse/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   *(Optional for local testing — the server falls back to an interactive test preview mode if SMTP credentials are not configured)*

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🚢 Deployment

See [HOSTINGER_DEPLOYMENT.md](./HOSTINGER_DEPLOYMENT.md) for full step-by-step instructions for:
- Deploying to Hostinger with GitHub auto-deployment webhooks
- Deploying to Vercel with serverless Express API functions

---

## 📄 License

Apache-2.0
