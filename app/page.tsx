import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ProductCarousel } from '@/components/product-carousel'
import { fetchProducts } from '@/lib/sanity'
import { CrocheSection } from '@/components/croche-section'
import { About } from '@/components/about'
import { Delivery } from '@/components/delivery'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default async function Home() {
  const products = await fetchProducts().catch(() => [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductCarousel products={products} />
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
