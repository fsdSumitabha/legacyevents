import { ContactFormData } from "@/types/contact"

export function contactTemplate(data: ContactFormData) {

    const { name, email, phone, eventType, message } = data

    return `
    <!doctype html>
        <html>
            <head>
                <meta charset="UTF-8" />
                <title>New Inquiry</title>
            </head>

            <body style="margin: 0; padding: 0; background-color: #fdf2f8; font-family: Arial, Helvetica, sans-serif">
                <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 0">
                    <tr>
                        <td align="center">
                            <table
                                width="600"
                                cellpadding="0"
                                cellspacing="0"
                                style="background: #ffffff; border-radius: 10px; overflow: hidden; border: 1px solid #f3e8ff"
                            >
                                <!-- Header -->
                                <tr>
                                    <td style="background: #f43f5e; padding: 28px; text-align: center; color: #ffffff">
                                        <h1 style="margin: 0; font-size: 22px; font-weight: 600">Legacy Events</h1>
                                        <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9">New Contact Inquiry</p>
                                    </td>
                                </tr>

                                <!-- Content -->
                                <tr>
                                    <td style="padding: 30px 36px; color: #374151">
                                        <p style="margin: 0 0 20px 0; font-size: 15px">
                                            A new inquiry has been submitted through the website contact form.
                                        </p>

                                        <!-- Info Table -->
                                        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse">
                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px">
                                                    <strong style="color: #111827">Name</strong>
                                                </td>
                                                <td
                                                    style="
                                                        padding: 10px 0;
                                                        border-bottom: 1px solid #f1f5f9;
                                                        font-size: 14px;
                                                        text-align: right;
                                                    "
                                                >
                                                    ${name}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px">
                                                    <strong style="color: #111827">Email</strong>
                                                </td>
                                                <td
                                                    style="
                                                        padding: 10px 0;
                                                        border-bottom: 1px solid #f1f5f9;
                                                        font-size: 14px;
                                                        text-align: right;
                                                    "
                                                >
                                                    ${email}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px">
                                                    <strong style="color: #111827">Phone</strong>
                                                </td>
                                                <td
                                                    style="
                                                        padding: 10px 0;
                                                        border-bottom: 1px solid #f1f5f9;
                                                        font-size: 14px;
                                                        text-align: right;
                                                    "
                                                >
                                                    ${phone || "Not provided"}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px">
                                                    <strong style="color: #111827">Event Type</strong>
                                                </td>
                                                <td
                                                    style="
                                                        padding: 10px 0;
                                                        border-bottom: 1px solid #f1f5f9;
                                                        font-size: 14px;
                                                        text-align: right;
                                                    "
                                                >
                                                    ${eventType || "Not specified"}
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Message -->
                                        <div style="margin-top: 28px">
                                            <h3 style="margin: 0 0 10px 0; font-size: 16px; color: #111827">Message</h3>

                                            <div
                                                style="
                                                    background: #f8fafc;
                                                    border: 1px solid #e5e7eb;
                                                    border-radius: 6px;
                                                    padding: 16px;
                                                    font-size: 14px;
                                                    line-height: 1.6;
                                                    color: #374151;
                                                "
                                            >
                                                ${message || "No message provided"}
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <!-- Footer -->
                                <tr>
                                    <td
                                        style="
                                            background: #fafafa;
                                            padding: 18px;
                                            text-align: center;
                                            font-size: 12px;
                                            color: #6b7280;
                                            border-top: 1px solid #f1f5f9;
                                        "
                                    >
                                        This email was generated automatically from the Legacy Events website contact form.
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
        </html>
        `
}