import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/hooks/use-cart"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "TravelLite - Simple Bus Booking in Kenya",
  description:
    "Book bus tickets across Kenya with ease. Compare prices, check schedules, and travel with trusted operators.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <CartProvider>{children}</CartProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
