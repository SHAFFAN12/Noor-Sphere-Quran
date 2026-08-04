import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function handleSendEmail(formData) {
  const {
    formType = 'Contact Form',
    name = '',
    email = '',
    phone = '',
    course = '',
    cityCountry = '',
    age = '',
    preferredTime = '',
    message = ''
  } = formData;

  const recipientEmail = 'noorspherequran@gmail.com';
  const emailUser = process.env.EMAIL_USER || 'noorspherequran@gmail.com';
  const emailPass = process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
      <h2 style="color: #0D3B5C; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-top: 0;">
        New Form Submission: ${formType}
      </h2>
      <p style="font-size: 14px; color: #555;">You have received a new inquiry from the <strong>Noor Sphere Quran Academic</strong> website.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        ${name ? `<tr><td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee; width: 140px; color: #0D3B5C;">Name:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td></tr>` : ''}
        ${email ? `<tr><td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee; color: #0D3B5C;">Email:</td><td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td></tr>` : ''}
        ${phone ? `<tr><td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee; color: #0D3B5C;">Phone / WhatsApp:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td></tr>` : ''}
        ${course ? `<tr><td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee; color: #0D3B5C;">Course:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${course}</td></tr>` : ''}
        ${cityCountry ? `<tr><td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee; color: #0D3B5C;">City & Country:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${cityCountry}</td></tr>` : ''}
        ${age ? `<tr><td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee; color: #0D3B5C;">Student Age:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${age}</td></tr>` : ''}
        ${preferredTime ? `<tr><td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee; color: #0D3B5C;">Preferred Time:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${preferredTime}</td></tr>` : ''}
        ${message ? `<tr><td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee; vertical-align: top; color: #0D3B5C;">Message:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${message}</td></tr>` : ''}
      </table>

      <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; font-size: 12px; color: #888; text-align: center;">
        Submitted to <strong>${recipientEmail}</strong> via Noor Sphere Online Academy
      </div>
    </div>
  `;

  if (emailPass) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `Noor Sphere Website <${emailUser}>`,
      to: recipientEmail,
      subject: `[${formType}] Submission from ${name || email || 'Website Visitor'}`,
      html: htmlContent,
      replyTo: email || recipientEmail,
    };

    await transporter.sendMail(mailOptions);
    console.log(`[Nodemailer] Email successfully sent to ${recipientEmail}`);
    return { success: true, message: 'Email sent successfully via Nodemailer!' };
  } else {
    console.log(`\n======================================================`);
    console.log(`[Nodemailer Notice] Form Submission Received for: ${recipientEmail}`);
    console.log(`Form Type: ${formType}`);
    console.log(`Data:`, formData);
    console.log(`NOTE: Set EMAIL_PASS in your .env file to enable live Gmail SMTP sending via Nodemailer.`);
    console.log(`======================================================\n`);
    return {
      success: false,
      error: 'EMAIL_PASS is missing in environment variables. Email could not be sent.',
    };
  }
}
