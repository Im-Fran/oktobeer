import type React from "react"
import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {ThemeProvider} from "next-themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

export const metadata: Metadata = {
  title: "OK TO BEER - Pub & Pizza",
  description: "OK TO BEER es un PUB ambientado en cervezas y pizza.",
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
    <head>
      <title>OK TO BEER</title>
      <link rel="preload" href="/fonts/Melting-Letter.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
    </head>
    <body className={`${inter.variable} ${bebasNeue.variable} font-sans`}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
    </body>
    </html>
  )
}

