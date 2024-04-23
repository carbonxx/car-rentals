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
        <div className="flex flex-col gap-8 items-center md:justify-center">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            fuga recusandae consequuntur eveniet a tenetur aliquam. Minima
            asperiores deleniti saepe iure officiis repudiandae doloremque ea.
            Consectetur voluptas velit nam voluptates enim blanditiis temporibus
            vitae quasi cumque fugit provident ex eaque repellendus quis, beatae
            animi quam natus harum laudantium consequatur reiciendis!
          </p>
          <Timeline />
          <div className="flex flex-col gap-2">
            <p className="text-center">Reach out on our socials:</p>
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
