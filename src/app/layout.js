import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"
import { phone, siteConfig } from "@/app/lib/config"
import { Phone } from "lucide-react"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    "Luxury Cars for Rent in Mangalore",
    "Economical Cars for Rent in Mangalore",
    "Car Rental Mangalore",
    "Self Driving Cars in Mangalore",
    "Cars for rent in Mangalore",
    "Self Driving Cars",
  ],
  creator: siteConfig.title,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og.png"],
    // creator: "@GaneshSelfDrivingCars",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  authors: [
    {
      name: siteConfig.title,
      url: siteConfig.url,
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Link
          className="fixed bg-black p-4 rounded-full bottom-4 md:bottom-8 right-4 md:right-8 z-50"
          href={`tel:${phone}`}
        >
          <Phone />
        </Link>
        <Footer />
      </body>
    </html>
  )
}
