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
  twitter: {
    card: "summary_large_image",
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
