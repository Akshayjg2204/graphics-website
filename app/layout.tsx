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
  title: 'RJ Graphics Dombivli | Custom Banjo Instrument Graphics & Portfolio',
  description:
    'Premium custom graphics, drum head designs, and artistic finishes for musical instruments by Raj Navnath Mhatre. Based in Dombivli, Thane, Mumbai.',
  authors: [{ name: 'Akshay Gaikwad', url: 'https://stream-line.dev/' }],
  keywords: [
    'RJ Graphics',
    'banjo graphics',
    'drum head design',
    'instrument graphics',
    'custom banjo art',
    'Dombivli',
    'Mumbai',
    'Next.js',
    'Tailwind CSS',
  ],
  openGraph: {
    title: 'RJ Graphics Dombivli | Custom Banjo Instrument Graphics & Portfolio',
    description:
      'Premium custom graphics, drum head designs, and artistic finishes for musical instruments. Based in Dombivli, Thane, Mumbai.',
    url: 'https://rjgraphics.netlify.app/',
    siteName: 'RJ Graphics',
    images: [
      {
        url: 'https://rjgraphics.netlify.app/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'RJ Graphics Portfolio Showcase',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RJ Graphics Dombivli | Custom Banjo Instrument Graphics & Portfolio',
    description:
      'Premium custom graphics and artistic finishes for musical instruments.',
    images: ['https://rjgraphics.netlify.app/images/profile.jpg'],
  },
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
