import { ContactFormData } from "@/types/contact"

export function contactTemplate(data: ContactFormData) {

    const { name, email, phone, eventType, message } = data

    return `
        <h2>New Inquiry Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Event Type:</strong> ${eventType || "Not specified"}</p>

        <h3>Message</h3>
        <p>${message}</p>
    `
}