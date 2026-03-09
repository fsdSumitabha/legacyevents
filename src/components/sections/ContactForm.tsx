"use client"

import { useState } from "react"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        message: ""
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formData)
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
                        From intimate ceremonies to grand weddings, our team is
                        here to bring your vision to life.
                    </p>

                </div>

                {/* Form Card */}
                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl bg-white p-10 shadow-xl dark:bg-stone-900"
                >

                    <div className="grid gap-6">

                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-sm text-stone-600 dark:text-stone-400">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-rose-200 bg-transparent px-4 py-3 outline-none transition focus:border-rose-400 dark:border-stone-700"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm text-stone-600 dark:text-stone-400">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-rose-200 bg-transparent px-4 py-3 outline-none transition focus:border-rose-400 dark:border-stone-700"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="mb-2 block text-sm text-stone-600 dark:text-stone-400">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-rose-200 bg-transparent px-4 py-3 outline-none transition focus:border-rose-400 dark:border-stone-700"
                            />
                        </div>

                        {/* Event Type */}
                        <div>
                            <label className="mb-2 block text-sm text-stone-600 dark:text-stone-400">
                                Event Type
                            </label>

                            <select
                                name="eventType"
                                value={formData.eventType}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-rose-200 bg-transparent px-4 py-3 outline-none transition focus:border-rose-400 dark:border-stone-700"
                            >
                                <option value="">Select Event</option>
                                <option value="wedding">Wedding</option>
                                <option value="birthday">Birthday</option>
                                <option value="rice-ceremony">Rice Ceremony</option>
                                <option value="corporate">Corporate Event</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="mb-2 block text-sm text-stone-600 dark:text-stone-400">
                                Tell Us About Your Event
                            </label>

                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full resize-none rounded-xl border border-rose-200 bg-transparent px-4 py-3 outline-none transition focus:border-rose-400 dark:border-stone-700"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="mt-4 rounded-2xl bg-rose-400 px-6 py-3 font-medium text-white transition hover:bg-rose-500"
                        >
                            Send Inquiry
                        </button>

                    </div>

                </form>

            </div>

        </section>
    )
}