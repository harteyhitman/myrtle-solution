This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Email Service Setup

This project uses [Resend](https://resend.com) for sending contact form emails.

### Setup Instructions:

1. **Create a Resend account:**
   - Go to https://resend.com and sign up for a free account
   - Free tier includes 3,000 emails/month

2. **Get your API key:**
   - Navigate to API Keys in your Resend dashboard
   - Create a new API key
   - Copy the key (starts with `re_`)

3. **Configure environment variables:**
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Add your Resend API key:
     ```env
     RESEND_API_KEY=re_your_actual_api_key_here
     COMPANY_EMAIL=Support@myrtlesolutions.org
     ```

4. **Domain Verification (for production):**
   - In Resend dashboard, go to Domains
   - Add your domain (e.g., `myrtlesolutions.org`)
   - Add the DNS records provided by Resend
   - Update the `from` field in `src/app/api/contact/route.ts` to use your verified domain

### Testing:
- The contact form will send emails to the address specified in `COMPANY_EMAIL`
- For development, you can use `onboarding@resend.dev` (already configured)
- Check your Resend dashboard for email logs and delivery status

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**Important:** Don't forget to add your environment variables in Vercel:
- Go to your project settings → Environment Variables
- Add `RESEND_API_KEY` and `COMPANY_EMAIL`

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
