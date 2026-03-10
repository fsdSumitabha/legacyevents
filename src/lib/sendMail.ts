import nodemailer from "nodemailer"
import { ContactFormData } from "@/types/contact"

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})

export async function sendContactMail(data: ContactFormData) {
    const { name, email, phone, eventType, message } = data
    
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.MAIL_TO,
        subject: "New Contact Inquiry - Legacy Events",
        html: `
            <h2>New Inquiry Received</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Event Type:</strong> ${eventType || "Not specified"}</p>

            <h3>Message</h3>
            <p>${message}</p>
        `
    })
}