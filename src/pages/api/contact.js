import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, course, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Genez Learnings <onboarding@resend.dev>",   // You can change after domain verification
      to: "genez.office@gmail.com",
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not provided"}</p>
        <p><b>Interested Course:</b> ${course || "Not selected"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return res.status(500).json({ success: false, message: "Failed to send email." });
    }

    return res.status(200).json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ success: false, message: "Failed to send email." });
  }
}