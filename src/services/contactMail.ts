import { sendMail } from "@/lib/mail/sendMail"
import { contactTemplate } from "@/lib/templates/contactTemplate"
import { contactUserTemplate } from "@/lib/templates/contactUserTemplate"
import { ContactFormData } from "@/types/contact"

export async function sendContactMail(data: ContactFormData) {

    // email to admin
    await sendMail({
        to: process.env.MAIL_TO!,
        subject: "New Contact Inquiry - Legacy Events",
        html: contactTemplate(data)
    })

    // confirmation email to user
    await sendMail({
        to: data.email,
        subject: "We received your inquiry - Legacy Events",
        html: contactUserTemplate(data)
    })
}