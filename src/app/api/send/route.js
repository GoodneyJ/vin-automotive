import { EmailTemplate } from '../../components/EmailTemplate/EmailTemplate';
import { NextResponse, NextRequest } from 'next/server'
import { Resend } from 'resend';

const resend = new Resend(process.env.API_URL);

export async function POST(req, res) {

  try {
    const reqData = await req.json();
    const formData = reqData.formData;
    console.log(reqData)

    // const data = await resend.emails.send({
    //     from: 'Acme <onboarding@resend.dev>',
    //     to: ['vin.mechanicalworkshop@gmail.com'],
    //     subject: 'Lead from thevinshop.com!',
    //     react: EmailTemplate({ name: formData.contactName, email: formData.email, jobType: formData.jobType, jobDescription: formData.jobDescription }),
    // });

    return Response.json(formData);
  } catch (error) {
    return Response.json({ error });
  }
}
