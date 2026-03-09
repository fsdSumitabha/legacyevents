import Image from "next/image"
import Grain from "@/components/Grain"

export default function PortfolioHeroSection() {
    return (
        <section className="relative h-[92vh] w-full overflow-hidden">

            {/* Background Image (Swap with video later if needed) */}
            <Image
                src="/portfolio/event-9.jpg"
                alt="Legacy Events luxury wedding ambience"
                fill
                priority
                className="object-cover scale-105 animate-[portfolioSlowZoom_24s_ease-in-out_infinite_alternate] dark:block hidden"
            />

            <Image
                src="/portfolio/portfolio-hero-light.jpg"
                alt="Legacy Events luxury wedding ambience"
                fill
                priority
                className="object-cover scale-105 animate-[portfolioSlowZoom_24s_ease-in-out_infinite_alternate] dark:hidden block"
            />

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b 
                from-stone-50/75 
                via-stone-50/90 
                to-rose-50/20 
                dark:from-stone-950/85 
                dark:via-stone-950/75 
                dark:to-stone-950/70" 
            />

            {/* Subtle Grain Texture */}
            <Grain />

            {/* Centered Editorial Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-6">
                <div className="max-w-4xl text-center space-y-6">

                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-pink-950 dark:text-white">
                        Moments We Crafted
                    </h1>

                    <p className="text-pink-900 dark:text-stone-200 text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto">
                        Every celebration carries emotion, intention, and detail. 
                        Here are the stories we had the honor to bring to life.
                    </p>

                </div>
            </div>

            {/* Minimal Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
                <div className="h-10 w-[1px] bg-stone-300/40" />
                <div className="h-2 w-2 rounded-full bg-rose-400 animate-bounce" />
            </div>

        </section>
    )
}