import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SEND_GRID_KEY);

export async function POST(req) {
  try {
    const { to, subject, text, html } = await req.json();

    const msg = {
      to, 
      from: process.env.NEXT_PUBLIC_SENDGRID_SENDER, // must be from your verified domain
      subject,
      text,
      html,
    };

    await sgMail.send(msg);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("SendGrid error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
