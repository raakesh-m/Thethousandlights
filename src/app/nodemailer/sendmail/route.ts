// app/nodeemailer/sendmail.ts

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type Data = {
  success?: boolean;
  message?: string;
};

export const POST = async (request: any) => {
  if (request.method !== "POST") {
    return NextResponse.json(
      { error: "Invalid request method." },
      { status: 405 }
    );
  }
  const body = request.body;

  if (!body) {
    return NextResponse.json(
      { error: "No request body provided." },
      { status: 400 }
    );
  }
  const reader = body.getReader();
  let bodyString = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    bodyString += new TextDecoder().decode(value);
  }

  const { name, mobileNumber, email, option, requirements } =
    JSON.parse(bodyString);

  // console.log("Form data received:", {
  //   name,
  //   mobileNumber,
  //   email,
  //   option,
  //   requirements,
  // });
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "dummylogin.ui.test@gmail.com",
      pass: "zcam namx hsfg foko ",
    },
  });

  try {
    transporter.sendMail({
      from: "dummylogin.ui.test@gmail.com",
      to: "getbandark@gmail.com",
      subject: "New Contact Form Submission",
      html: `
            <h3>Name:</h3><span>${name}</span>
    
            <h3>Mobile Number:</h3><span>${mobileNumber}</span>
    
            <h3>Email:</h3><span>${email}</span>
    
            <h3>Option:</h3><span>${option}</span>
    
            <h3>Requirements:</h3><span>${requirements || "-"}</span>
    
          `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    return NextResponse.json(
      { success: false },
      {
        status: 500,
      }
    );
  }
};
