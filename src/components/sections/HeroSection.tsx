import Image from "next/image"
import BlobCard from "@/components/BlobCard"
import HeroContent from "@/components/HeroComponent"

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

                <HeroContent />
            </div>

        </section>
    )
}