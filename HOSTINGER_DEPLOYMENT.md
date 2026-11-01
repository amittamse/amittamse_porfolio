# Deployment Guide: Amit Tamse Portfolio Website

This application is built with a Node.js Express server backend and a React + Vite frontend, configured for seamless deployment on **Hostinger (via GitHub Connection)** and **Vercel**.

---

## 1. Deploying on Hostinger (via GitHub Connection)

Hostinger supports deploying Node.js applications directly from your GitHub repository with automatic redeployment on git push.

### Step 1: Push Code to GitHub
1. Initialize git (if not already done) and push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Amit Tamse portfolio"
   git remote add origin https://github.com/amittamse/portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Configure Git in Hostinger hPanel
1. Log in to your **Hostinger hPanel**.
2. Navigate to **Websites** &rarr; Select your domain (`hireamittamse.com`) &rarr; **Git**.
3. Under **Create a New Repository**:
   - **Repository**: `https://github.com/amittamse/portfolio.git`
   - **Branch**: `main`
   - **Install Path**: `/public_html` (or your preferred subdomain folder)
4. Click **Create**.
5. Copy the generated **Webhook URL** and add it to your GitHub repository settings under **Settings &rarr; Webhooks** (Content type: `application/json`) so Hostinger automatically pulls new commits.

### Step 3: Configure Node.js Application in Hostinger
1. In Hostinger hPanel, search for **Node.js** under **Advanced** or **Server**.
2. Click **Create Application**:
   - **Node.js version**: Choose `20.x` or `22.x`
   - **Application mode**: `Production`
   - **Application root**: Path where files were pulled (e.g. `/home/u123456/domains/hireamittamse.com/public_html`)
   - **Application startup file**: `server.ts` (with `tsx`) or run `npm run build && node server.js`
3. Enter Environment Variables in the hPanel interface:
   ```env
   NODE_ENV=production
   PORT=3000
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=amitktamse@gmail.com
   SMTP_PASS=your-google-app-password
   CONTACT_RECEIVER_EMAIL=amitktamse@gmail.com
   ```
4. In the Terminal or Hostinger SSH, run:
   ```bash
   npm install
   npm run build
   pm2 start ecosystem.config.cjs
   ```

---

## 2. Deploying on Vercel

The application is pre-configured with `vercel.json` and a serverless API function in `api/index.ts`.

### Steps:
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New...** &rarr; **Project** &rarr; Import your GitHub repo.
3. Configure project settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add the SMTP Environment Variables in **Project Settings &rarr; Environment Variables**:
   - `SMTP_HOST`: `smtp.gmail.com`
   - `SMTP_PORT`: `465`
   - `SMTP_SECURE`: `true`
   - `SMTP_USER`: `amitktamse@gmail.com`
   - `SMTP_PASS`: `[your-google-app-password]`
   - `CONTACT_RECEIVER_EMAIL`: `amitktamse@gmail.com`
5. Click **Deploy**. Vercel will build the frontend assets and mount the Express API routes at `/api/*`.

---

## 3. Local Development

To run the full-stack app locally:
```bash
# Install dependencies
npm install

# Start full-stack dev server (Express + Vite) on port 3000
npm run dev
```

Visit `http://localhost:3000` to preview the site and test contact form submissions.
