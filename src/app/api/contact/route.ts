import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, company, phone, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Prism of stories <onboarding@resend.dev>',
      to: ['prismofstories2025@gmail.com'], 
      subject: subject || 'New Contact Form Message',
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Company:</strong> ${company}<br/>
        <strong>Phone:</strong> ${phone}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Message:</strong><br/>${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
