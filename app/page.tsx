import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import AppsSection from '@/components/AppsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import AboutSection from '@/components/AboutSection'
import GetStartedSection from '@/components/GetStartedSection'
import ContactSection from '@/components/ContactSection'
// import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AppsSection />
      <AboutSection />
      <PricingSection />
      <GetStartedSection />
      <TestimonialsSection />
      <ContactSection />
      {/* <Chatbot /> */}
    </main>
  )
}