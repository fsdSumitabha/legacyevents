"use client"

import Image from "next/image"
import Link from "next/link"
import services from "@/data/Services"

export default function SignatureServices() {
    return (
        <section className="relative py-24 bg-white dark:bg-stone-950">

            <div className="max-w-6xl mx-auto px-6">

                {/* Section Heading */}
                <div className="mb-16 text-center">
                    <p className="text-stone-400 tracking-[0.25em] uppercase text-xs">
                        What We Create
                    </p>
                    <h2 className="mt-6 text-3xl md:text-5xl font-serif text-stone-800 dark:text-stone-100">
                        Signature Celebrations
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {services.map((service, index) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-lg"
                            style={{
                                animation: `fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.15}s both`
                            }}
                        >

                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                            />

                            {/* Light Overlay */}
                            <div className="absolute inset-0 bg-rose-50/40 transition-all duration-700 group-hover:bg-rose-50/60 dark:hidden" />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 hidden dark:block bg-stone-950/40 transition-all duration-700 group-hover:bg-stone-950/60" />

                            {/* Grain Texture */}
                            <div
                                className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay dark:mix-blend-soft-light"
                                style={{
                                    backgroundImage: "url('/textures/grain.png')",
                                    backgroundSize: "cover"
                                }}
                            />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2">

                                <h3 className="text-white font-serif text-2xl">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    {service.description}
                                </p>

                            </div>

                        </Link>
                    ))}

                </div>
            </div>

            {/* Keyframes */}
            <style jsx global>{`
                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>

        </section>
    )
}