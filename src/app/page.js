import About from "@/app/components/about"
import Hero from "@/app/components/hero"
import HowItWorks from "@/app/components/how-it-works"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <About />
    </main>
  )
}
