import RangoliDivider from "@/components/RangoliDivider"
import ServiceCard from "@/components/ServiceCard"
import Grain from "@/components/Grain"
import ScrollConfetti from "@/components/confetties/ScrollConfetti"

export default function ServicesSection() {
    return (
        <section className="relative overflow-hidden bg-rose-50 py-24 dark:bg-stone-950">
            <ScrollConfetti />

            {/* Grain Overlay */}
            <Grain />

            <div className="relative z-10 mx-auto max-w-6xl px-6">

                <RangoliDivider />

                <div className="mx-auto mb-16 max-w-2xl text-center">

                    <h2 className="mb-6 font-serif text-4xl text-stone-800 dark:text-stone-100 md:text-5xl">
                        Our Signature Celebrations
                    </h2>

                    <p className="text-stone-600 dark:text-stone-400">
                        Thoughtfully curated experiences designed to honor life’s most meaningful moments.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <ServiceCard
                        title="Weddings"
                        description="Elegant, personalized wedding experiences crafted with beauty, tradition, and modern refinement."
                    />

                    <ServiceCard
                        title="Rice Ceremonies"
                        description="Culturally rooted celebrations handled with grace, attention, and heartfelt detail."
                    />

                    <ServiceCard
                        title="Birthday Celebrations"
                        description="Memorable milestone gatherings designed to reflect personality, joy, and connection."
                    />
                </div>

                <RangoliDivider />

            </div>
        </section>
    )
}