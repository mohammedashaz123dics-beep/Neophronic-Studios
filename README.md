# Neophronic AI Studio 🤖✨

The official core software repository for the **Neophronic AI Studio** platform, engineered and managed under the parent entity **Neophronic Studios**. 

This platform delivers an enterprise-grade AI execution environment utilizing modern serverless architectures, responsive UI modules, and integrated usage-based subscription monetization workflows.

---

## 🔒 Proprietary Notice & Access Control

**WARNING: CLOSED SOURCE AND PROPRIETARY SOFTWARE**  
Copyright © 2026 Neophronic Studios. All Rights Reserved.

* This codebase, its structural schemas, routing pipelines, prompt engineering arrays, and transaction logic are strict trade secrets of **Neophronic Studios**.
* Unauthorized distribution, duplication, reverse-engineering, or hosting of this software via any media is strictly prohibited.
* Access is strictly limited to authorized Co-Founders. Contributions automatically vest to the parent company under our active operating agreement.

---

## 🚀 Technology Stack

* **Frontend:** React.js / Vite / Tailwind CSS
* **Build System & Compiler:** Vite
* **Hosting & Serverless Layer:** Vercel (Hobby/Pro Cloud Infrastructure)
* **DNS & Edge Network:** Cloudflare Proxy (Full SSL Encryption Enabled)
* **Monetization Engine:** Integrated Subscription Gateway (Stripe/Merchant System API)

---

## 🛠️ Local Development & Setup

To spin up the project workspace locally for debugging or building new features, follow these configurations:

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed on your machine.

### 2. Dependency Installation
Since dependency folders are blocked globally by our `.gitignore` boundaries, restore the required platform node packages locally:
```bash
npm install
```

### 3. Local Environment Configuration
Create a private `.env.local` file in the root directory to store development tokens securely. **Never commit this file to GitHub.**
```env
VITE_AI_PROVIDER_KEY=your_development_key_here
VITE_SUBSCRIPTION_WEBHOOK_SECRET=your_dev_secret_here
```

### 4. Running the Development Server
Launch the local local testing container:
```bash
npm run dev
```
Open your browser and navigate to the local environment link (typically `http://localhost:5173`) to test your frontend.

---

## 📦 Cloud Deployment & Architecture Pipeline

Our production infrastructure runs automated CI/CD deployments through **Vercel**:

1. **Code Submissions:** Commits pushed to the `main` branch of this private repository automatically trigger a production build on Vercel.
2. **Environment Variables:** Production keys (such as live Stripe keys and live AI endpoint keys) are strictly managed within the Vercel Project Settings panel under encrypted variables. They are never hardcoded into the codebase.
3. **Domain Routing:** Traffic hitting `https://neophronic.com` passes through Cloudflare edge servers (Proxied, Orange Cloud) with encryption forced via **Full Mode** directly down to the Vercel origin cluster.

---

## 👥 Co-Founder Agreement & Commit Guidelines

* **Feature Isolation:** Always create a separate branch for testing new UI or backend elements before merging into `main`.
* **Cost Protection:** Verify that any adjustments made to background processing pipelines do not create infinite API call loops that inflate our token billing overhead.
* **Gateway Adjustments:** Any adjustments affecting the database architecture or payment processing webhooks must be mutually verified before pushing live to deployment.
