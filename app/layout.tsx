import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
  display: 'swap'
})

const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: '--font-fraunces',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Prep'd — Personal Chefs Powered by Your Health Data",
  description: "Fresh, hyper-personalized meals cooked in your kitchen by personal chefs — informed by your wearable data, dietary needs, and wellness goals.",
  keywords: ["personal chef", "meal prep", "health data", "personalized nutrition", "wellness", "wearable integration"],
  openGraph: {
    title: "Prep'd — Personal Chefs Powered by Your Health Data",
    description: "Fresh, hyper-personalized meals cooked in your kitchen by personal chefs.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
