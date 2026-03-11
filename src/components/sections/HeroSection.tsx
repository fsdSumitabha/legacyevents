import Image from "next/image"
import BlobCard from "@/components/BlobCard"

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">

            {/* Background Image */}
            <video
                src="/videos/rose_loop_upscaled.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-rose-50/80 via-rose-50/40 to-transparent dark:from-stone-950/80 dark:via-stone-950/50" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-end px-6">

                <div className="max-w-xl text-right">

                    <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-rose-500 dark:text-rose-400">
                        Crafting Timeless Celebrations
                    </span>

                    <h1 className="mb-6 font-serif text-5xl leading-tight text-stone-800 dark:text-stone-100 md:text-6xl">
                        Where Every Moment
                        <br />
                        Becomes a Memory
                    </h1>

                    <p className="mb-8 text-stone-600 dark:text-stone-400">
                        Weddings, rice ceremonies, birthdays — beautifully designed and thoughtfully executed.
                    </p>

                    <div className="flex justify-end gap-4">
                        <button className="rounded-2xl bg-rose-400 px-6 py-3 text-white transition hover:bg-rose-500">
                            Plan Your Event
                        </button>

                        <button className="rounded-2xl border border-rose-300 px-6 py-3 text-stone-700 hover:bg-rose-100 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800">
                            View Portfolio
                        </button>
                    </div>

                </div>
            </div>

        </section>
    )
}