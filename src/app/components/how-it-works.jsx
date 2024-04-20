import Image from "next/image"
import React from "react"

function HowItWorks() {
  return (
    <section className="bg-white text-primary py-24">
      <h1 className="text-3xl font-bold md:text-6xl text-center text-accent">
        How it Works?
      </h1>
      <div className="mx-4 py-16">
        <div className="container backdrop mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center rounded-lg">
            <Image
              src="/search.svg"
              alt="search"
              width={35}
              height={35}
              className="w-1/3 h-1/3"
            />
            <h2 className="text-2xl font-bold text-accent py-4">Search</h2>
            <p className="text-center">Search for the car you want to rent.</p>
          </div>
          <div className="flex flex-col items-center justify-center border rounded-lg text-secondary bg-accent">
            <Image
              src="/book.svg"
              alt="search"
              width={35}
              height={35}
              className="w-1/3 h-1/3"
            />
            <h2 className="text-2xl font-bold py-4">Book</h2>
            <p className="text-center">Book the car you like and pay online.</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg">
            <Image
              src="/drive.svg"
              alt="search"
              width={35}
              height={35}
              className="w-1/3 h-1/3"
            />
            <h2 className="text-2xl font-bold text-accent py-4">Drive</h2>
            <p className="text-center">
              Drive the car you rented and enjoy your trip.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
