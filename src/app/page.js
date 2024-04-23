import About from "@/app/components/about"
import Hero from "@/app/components/hero"
import HowItWorks from "@/app/components/how-it-works"
import OurCars from "@/app/components/our-cars"
import Testimonials from "@/app/components/testimonials"
import TopRentedCars from "@/app/components/top-rented-cars"

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <div className="py-4 text-xl">Self Driving Cars at Mangalore</div> */}
      <About />
      <HowItWorks />
      <OurCars />
      <TopRentedCars />
      <Testimonials />
    </main>
  )
}
