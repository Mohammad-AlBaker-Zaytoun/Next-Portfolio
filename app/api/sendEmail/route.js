import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const { firstname, lastname, email, phone, service, message } = body;
  console.log(`Sending email from ${firstname} ${lastname} to host.`);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: "mabzaytoun@gmail.com",
    subject: `New Contact Form Submission - ${firstname} ${lastname}`,
    text: `
      You have a new message:
      Name: ${firstname} ${lastname}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      { status: 500 }
    );
  }
}
