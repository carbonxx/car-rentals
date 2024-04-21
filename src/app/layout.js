import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ganesh Self Driving Cars",
  description:
    "Rent a car and drive it yourself. We have all types of cars for you.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
