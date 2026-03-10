import { ContactFormData } from "@/types/contact"

export function contactUserTemplate(data: ContactFormData) {

    const { name } = data

    return `
    <html>
    <body style="font-family:Arial;background:#fdf2f8;padding:40px">

    <table width="600" align="center" style="background:#ffffff;border-radius:8px;padding:32px">

    <tr>
        <td style="text-align:center">
            <h2 style="color:#e11d48;margin:0">Legacy Events</h2>
        </td>
    </tr>

    <tr>
        <td style="padding-top:24px;font-size:15px;color:#374151">

            <p>Hello ${name},</p>

            <p>
            Thank you for reaching out to Legacy Events.  
            We have received your inquiry and our team will review the details shortly.
            </p>

            <p>
            One of our event specialists will get back to you soon to discuss your celebration.
            </p>

            <p style="margin-top:24px">
            Warm regards,<br>
            Legacy Events Team
            </p>

        </td>
    </tr>

    </table>

    </body>
    </html>
    `
}