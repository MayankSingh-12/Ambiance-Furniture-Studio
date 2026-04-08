import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ambiance Furniture Studio | Premium Furniture | Faridabad',
  description:
    'Ambiance Furniture Studio — 40+ years of crafting premium furniture in Faridabad. Sofas, dining sets, wall units, office furniture, beds & custom pieces from our 2,000 sq. m. factory.',
  keywords: [
    'Ambiance Furniture Studio',
    'furniture Faridabad',
    'sofa Faridabad',
    'dining set Faridabad',
    'office furniture Faridabad',
    'wooden furniture',
    'Aar Key Group',
  ],
  openGraph: {
    title: 'Ambiance Furniture Studio | Premium Furniture | Faridabad',
    description: '40+ years of crafting furniture of distinction. Visit our showroom on Mathura Road, Faridabad.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
