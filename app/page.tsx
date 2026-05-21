import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ProductCarousel } from '@/components/product-carousel'
import { CrocheSection } from '@/components/croche-section'
import { About } from '@/components/about'
import { Delivery } from '@/components/delivery'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductCarousel />
        <CrocheSection />
        <About />
        <Delivery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
