import { NextRequest, NextResponse } from "next/server"
import { sendContactMail } from "@/services/contactMail"
import { ContactFormData } from "@/types/contact"

function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export async function POST(req: NextRequest) {

    try {
        const body: ContactFormData = await req.json()

        const { name, email, phone, eventType, message } = body

        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Required fields missing"
                },
                { status: 400 }
            )
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid email address"
                },
                { status: 422 }
            )
        }

        await sendContactMail({
            name,
            email,
            phone,
            eventType,
            message
        })

        return NextResponse.json(
            {
                success: true,
                message: "Inquiry sent successfully"
            },
            { status: 200 }
        )
    } catch (error) {

        if (error instanceof SyntaxError) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid JSON body"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(
            {
                success: false,
                error: "Internal server error",
                
            },
            { status: 500 }
        )
    }
}

export async function GET() {
    return NextResponse.json(
        {
            success: false,
            error: "Method not allowed"
        },
        { status: 405 }
    )
}