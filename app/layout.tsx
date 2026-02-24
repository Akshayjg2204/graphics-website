import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' })

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'RJ Graphics Dombivli | Custom Banjo Instrument Graphics',
  description: 'Premium custom graphics and designs for all Banjo instruments. Drum heads, custom artwork, and professional instrument graphics by Raj Navnath Mhatre. Based in Dombivli, Thane, Mumbai.',
  keywords: ['banjo graphics', 'drum head design', 'instrument graphics', 'custom banjo art', 'Dombivli', 'Mumbai'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
