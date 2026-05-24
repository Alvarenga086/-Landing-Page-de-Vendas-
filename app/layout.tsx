import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "D'luz & Miçangas | Bolsas Artesanais e Peças em Crochê",
  description: 'Bolsas artesanais confeccionadas em miçangas e peças em crochê. Feitas à mão com amor e dedicação. Entrega em Teresina e envio para todo o Brasil.',
  keywords: ['bolsas artesanais', 'miçangas', 'crochê', 'bolsas de miçangas', 'artesanato', 'Teresina'],
  openGraph: {
    title: "D'luz & Miçangas | Bolsas Artesanais",
    description: 'Bolsas artesanais confeccionadas em miçangas e peças em crochê. Feitas à mão com amor.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
