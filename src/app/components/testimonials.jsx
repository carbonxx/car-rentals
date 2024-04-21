import Timeline from "@/app/components/timeline"
import { Facebook, Instagram, StarIcon, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Testimonials() {
  return (
    <section className="bg-white text-primary pb-8">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl text-primary">
          Read trusted reviews from our customers
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote className="rounded-lg bg-secondary/50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <Image
                alt="User Image"
                width={25}
                height={25}
                src="https://github.com/carbonxx.png"
                className="size-14 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-accent">
                  <StarIcon className="fill-accent" />
                  <StarIcon className="fill-accent" />
                  <StarIcon className="fill-accent" />
                  <StarIcon className="fill-accent" />
                  <StarIcon className="fill-accent" />
                </div>

                <p className="mt-0.5 text-lg font-medium text-primary">
                  Paul Starr
                </p>
              </div>
            </div>

            <p className="mt-4 text-primary/80">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              sit rerum incidunt, a consequuntur recusandae ab saepe illo est
              quia obcaecati neque quibusdam eius accusamus error officiis atque
              voluptates magnam!
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-secondary/50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <Image
                alt="User Image"
                width={25}
                height={25}
                src="https://github.com/carbonxx.png"
                className="size-14 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-accent">
                  <StarIcon className="fill-accent" />
                  <StarIcon className="fill-accent" />
                  <StarIcon className="fill-accent" />
                  <StarIcon className="fill-accent" />
                  <StarIcon className="fill-accent" />
                </div>

                <p className="mt-0.5 text-lg font-medium text-primary">
                  Paul Starr
                </p>
              </div>
            </div>

            <p className="mt-4 text-primary/80">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              sit rerum incidunt, a consequuntur recusandae ab saepe illo est
              quia obcaecati neque quibusdam eius accusamus error officiis atque
              voluptates magnam!
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-secondary/50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <Image
                alt="User Image"
                width={25}
                height={25}
                src="https://github.com/carbonxx.png"
                className="size-14 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-accent">
                  <StarIcon className="fill-accent" />
                  <StarIcon className="fill-accent" />
                  <StarIcon className="fill-accent" />
                  <StarIcon className="fill-accent" />
                  <StarIcon className="fill-accent" />
                </div>

                <p className="mt-0.5 text-lg font-medium text-primary">
                  Paul Starr
                </p>
              </div>
            </div>

            <p className="mt-4 text-primary/80">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              sit rerum incidunt, a consequuntur recusandae ab saepe illo est
              quia obcaecati neque quibusdam eius accusamus error officiis atque
              voluptates magnam!
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
