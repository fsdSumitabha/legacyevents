import Image from "next/image"

export default function BrandPhilosophy() {
    return (
        <section
            aria-labelledby="brand-philosophy-heading"
            className="relative bg-rose-50 dark:bg-stone-950"
        >
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
                    
                    {/* Left Content */}
                    <div className="max-w-xl">
                        <p className="mb-4 text-sm tracking-[0.2em] text-rose-400 uppercase">
                            Who We Are
                        </p>

                        <h2
                            id="brand-philosophy-heading"
                            className="text-4xl font-serif leading-tight text-stone-800 dark:text-stone-100 sm:text-5xl"
                        >
                            We craft timeless celebrations
                            with intention and elegance.
                        </h2>

                        <div className="mt-8 space-y-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
                            <p>
                                Legacy Events was founded on a simple belief —
                                every occasion deserves meaning, not just decoration.
                            </p>

                            <p>
                                We design immersive experiences where emotion,
                                detail, and storytelling come together seamlessly.
                            </p>
                        </div>

                        <div className="mt-10 border-l border-stone-200 pl-6 dark:border-stone-800">
                            <p className="text-sm text-stone-400 dark:text-stone-500">
                                — Nibedita Singha Roy
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
                            <Image
                                src="/images/madam.jpg"
                                alt="Legacy Events founder portrait"
                                width={800}
                                height={1000}
                                className="h-full w-full object-cover"
                                priority={false}
                            />
                        </div>

                        {/* Soft overlay tint */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl  dark:from-stone-950/10 dark:to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    )
}