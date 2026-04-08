import Hero from '@/components/Hero'
import StatsStrip from '@/components/StatsStrip'
import AboutSection from '@/components/AboutSection'
import ProductsSection from '@/components/ProductsSection'
import WhyUs from '@/components/WhyUs'
import Reviews from '@/components/Reviews'
import CTABanner from '@/components/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <AboutSection />
      <ProductsSection />
      <WhyUs />
      <Reviews />
      <CTABanner />
    </>
  )
}
