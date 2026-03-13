import Image from "next/image"
import AnimatedQuote from "../AnimatedQuote"

type Testimonial = {
    quote: string
    name: string
    role?: string
    image?: string
}

const testimonial: Testimonial = {
    quote:
        "Legacy Events transformed our wedding into something beyond imagination. Every detail felt intentional, emotional, and timeless.",
    name: "Ananya & Rishav",
    role: "Kolkata Wedding",
    image: "/images/client.png",
}

export default function TestimonialSection() {
    return (
        <section
            aria-labelledby="testimonial-heading"
            className="relative overflow-hidden bg-rose-50 py-32 dark:bg-stone-950"
        >
            {/* Optional Background Video */}
            <div className="absolute inset-0 -z-10">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover blur-md scale-105 opacity-30"
                >
                    <source src="/videos/testimonial-bg.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-b from-rose-50/80 to-rose-50/40 dark:from-stone-950/90 dark:to-stone-950/70" />
            </div>

            <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
                <p className="mb-4 text-sm uppercase tracking-[0.2em] text-rose-400">
                    Testimonial
                </p>

                {/* Accent Line */}
                <div className="mx-auto mb-12 h-px w-20 bg-rose-400" />

                {/* Big Quote */}
                <h2
                    id="testimonial-heading"
                    className="relative font-serif text-3xl leading-relaxed text-stone-800 dark:text-stone-100 sm:text-4xl lg:text-5xl"
                >
                    <span className="absolute -left-6 -top-8 text-7xl text-rose-300 opacity-60 sm:-left-10 sm:text-8xl">
                        “
                    </span>

                    <AnimatedQuote
    text={testimonial.quote}
    className="font-serif text-3xl leading-relaxed text-stone-800 dark:text-stone-100 sm:text-4xl lg:text-5xl"
/>

                    <span className="absolute -bottom-10 -right-4 text-7xl text-rose-300 opacity-60 sm:-right-8 sm:text-8xl">
                        ”
                    </span>
                </h2>

                {/* Minimal Card */}
                <div className="mt-16 flex flex-col items-center gap-4">
                    {testimonial.image && (
                        <div className="h-16 w-16 overflow-hidden rounded-full border border-stone-200 dark:border-stone-800">
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={100}
                                height={100}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    )}

                    <div>
                        <p className="text-lg font-medium text-stone-800 dark:text-stone-100">
                            {testimonial.name}
                        </p>

                        {testimonial.role && (
                            <p className="text-sm text-stone-400 dark:text-stone-500">
                                {testimonial.role}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}