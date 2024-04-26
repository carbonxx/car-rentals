import Timeline from "@/app/components/timeline"
import { facebook, instagram, twitter, youtube } from "@/app/lib/config"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

function About() {
  return (
    <section className="bg-white text-primary py-24" id="about">
      <h2 className="font-bold text-center text-primary text-4xl tracking-tight sm:text-5xl">
        About Us
      </h2>
      <div className="container px-4 mx-auto grid md:grid-cols-2 gap-8 py-16">
        <div className="relative w-full md:w-3/4 aspect-square mx-auto flex justify-center items-center">
          <Image
            src="/about-img.jpg"
            alt="Ganesh Self Driving Cars"
            fill
            className="h-96 w-full object-cover rounded-lg"
          />
        </div>
        <div className="text-sm md:text-base flex flex-col gap-8 items-center md:justify-center">
          <p>
            Welcome to Ganesh Self Driving Cars, your premier choice for
            hassle-free car rental services in Mangalore. Located near KRR Road,
            Karangalapady, Bunts Hostel, Mangalore - 575003, we pride ourselves
            on offering a diverse range of vehicles, from economical options to
            luxurious rides, tailored to suit your needs.
          </p>
          <p>
            At Ganesh Self Driving Cars, we understand the importance of
            convenience and reliability when it comes to transportation. Whether
            you&apos;re exploring the vibrant streets of Mangalore or embarking
            on a scenic journey along the coastal roads, our self-driving car
            rental services provide you with the freedom and flexibility to
            travel at your own pace.
          </p>

          <p>
            Our commitment to customer satisfaction is at the core of everything
            we do. With a focus on cleanliness, safety, and superior customer
            service, we strive to ensure that your rental experience exceeds
            your expectations every time.
          </p>

          {/* <Timeline /> */}
          <div className="flex flex-col xl:flex-row gap-8 mr-auto">
            <p className="md:text-center">Reach out on our socials:</p>
            <ul className="flex gap-8">
              <li>
                <Link href={twitter}>
                  <Twitter />
                </Link>
              </li>
              <li>
                <Link href={instagram}>
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link href={facebook}>
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link href={youtube}>
                  <Youtube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
