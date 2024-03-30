import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, mobileNumber, email, option, requirements } =
      await request.json();
    console.log("check", name, mobileNumber, email, option, requirements);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "raakeshmuralitharan@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <p>Name: ${name}</p>
        <p>Mobile Number: ${mobileNumber}</p>
        <p>Email: ${email}</p>
        <p>Option: ${option}</p>
        <p>Requirements: ${requirements}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export const runtime = "edge";
