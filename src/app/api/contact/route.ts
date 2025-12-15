// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Helper function to escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const COMPANY_EMAIL = process.env.COMPANY_EMAIL || 'Support@myrtlesolutions.org';

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service is not configured. Please create a .env.local file with RESEND_API_KEY. See README.md for setup instructions.' },
        { status: 500 }
      );
    }

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Sanitize inputs to prevent XSS
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #073020; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #073020; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 3px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${safeName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${safeEmail}</div>
              </div>
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${safeSubject}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${safeMessage}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Myrtle Solutions contact form.</p>
              <p>You can reply directly to: ${safeEmail}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'Myrtle Solutions <onboarding@resend.dev>', // Change after domain verification
        to: [COMPANY_EMAIL],
        replyTo: email,
        subject: `Contact Form: ${safeSubject}`,
        html: emailHtml,
      });

      if (error) {
        console.error('Resend API error:', error);
        return NextResponse.json(
          { 
            error: error.message || 'Failed to send email. Please try again later.',
            details: process.env.NODE_ENV === 'development' ? error : undefined
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { message: 'Email sent successfully', id: data?.id },
        { status: 200 }
      );
    } catch (resendError: any) {
      console.error('Resend send error:', resendError);
      return NextResponse.json(
        { 
          error: 'Failed to send email. Please check your Resend API key and try again.',
          details: process.env.NODE_ENV === 'development' ? resendError.message : undefined
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
