import { sendMail } from "@/lib/sendMail"
import { contactTemplate } from "@/lib/templates/contactTemplate"
import { ContactFormData } from "@/types/contact"

export async function sendContactMail(data: ContactFormData) {

    const html = contactTemplate(data)

    await sendMail({
        to: process.env.MAIL_TO!,
        subject: "New Contact Inquiry - Legacy Events",
        html
    })
}