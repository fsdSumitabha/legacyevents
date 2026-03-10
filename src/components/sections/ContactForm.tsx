"use client"

import { useState } from "react"
import { toast } from "sonner"
import { ContactFormData } from "@/types/contact"

export default function ContactForm() {

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        message: ""
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        if (loading) return

        setLoading(true)

        const toastId = toast.loading("Sending your enquiry...")

        try {

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "Failed to send enquiry")
            }

            toast.success("Enquiry sent successfully!", {
                id: toastId
            })

            setFormData({
                name: "",
                email: "",
                phone: "",
                eventType: "",
                message: ""
            })

        } catch (error: any) {

            toast.error(
                error?.message || "Something went wrong. Please try again.",
                { id: toastId }
            )

        } finally {
            setLoading(false)
        }

    }

    return (
        <section className="relative w-full bg-rose-50 py-24 dark:bg-stone-950">

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2">

                {/* Left Content */}
                <div className="flex flex-col justify-center">

                    <span className="mb-4 text-sm uppercase tracking-[0.3em] text-rose-500 dark:text-rose-400">
                        Contact Us
                    </span>

                    <h2 className="mb-6 font-serif text-4xl text-stone-800 dark:text-stone-100 md:text-5xl">
                        Let's Plan Something Beautiful
                    </h2>

                    <p className="text-stone-600 dark:text-stone-400">
                        Tell us about your celebration and we will craft an
                        experience that feels personal, elegant, and unforgettable.
                    </p>

                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl bg-white p-10 shadow-xl dark:bg-stone-900"
                >

                    <div className="grid gap-6">

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-rose-400 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-600 outline-none transition focus:border-rose-400 dark:border-rose-900 dark:bg-stone-800 dark:text-stone-200 dark:placeholder:text-stone-500"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-rose-400 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-600 outline-none transition focus:border-rose-400 dark:border-rose-900 dark:bg-stone-800 dark:text-stone-200 dark:placeholder:text-stone-500"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-rose-400 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-600 outline-none transition focus:border-rose-400 dark:border-rose-900 dark:bg-stone-800 dark:text-stone-200 dark:placeholder:text-stone-500"
                        />

                        <select
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-rose-400 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-600 outline-none transition focus:border-rose-400 dark:border-rose-900 dark:bg-stone-800 dark:text-stone-200 dark:placeholder:text-stone-500"
                        >
                            <option value="">Select Event</option>
                            <option value="wedding">Wedding</option>
                            <option value="birthday">Birthday</option>
                            <option value="rice-ceremony">Rice Ceremony</option>
                            <option value="corporate">Corporate Event</option>
                        </select>

                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Tell us about your event"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-rose-400 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-600 outline-none transition focus:border-rose-400 dark:border-rose-900 dark:bg-stone-800 dark:text-stone-200 dark:placeholder:text-stone-500"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 rounded-2xl bg-rose-400 dark:bg-rose-800 px-6 py-3 font-medium text-white transition hover:bg-rose-500 disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Enquiry"}
                        </button>

                    </div>

                </form>

            </div>

        </section>
    )
}