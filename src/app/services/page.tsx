import FinalCTASection from "@/components/sections/FinalSectionCTA"
import OurApproach from "@/components/sections/OurApproach"
import ServiceHero from "@/components/sections/ServiceHero"
import SignatureServices from "@/components/sections/SignatureServices"

export default function ServicesPage() {
    return (
        <main>
            <ServiceHero />
            <SignatureServices />
            <OurApproach />
            <FinalCTASection />
        </main>
    )
}