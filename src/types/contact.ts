export interface ContactFormData {
    name: string
    email: string
    phone: string
    eventType: string
    message: string
}

export interface ContactApiResponse {
    success: boolean
    message?: string
}