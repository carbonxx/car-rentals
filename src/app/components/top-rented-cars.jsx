import { topRentedCars } from "@/app/lib/top-rented"
import Image from "next/image"
import Link from "next/link"

function TopRentedCars() {
  return (
    <div className="w-full bg-secondary py-24" id="top-rented-cars">
      <h2 className="font-bold text-center text-accent text-4xl tracking-tight sm:text-5xl">
        Top Rented Cars
      </h2>
      <div className="container grid md:grid-cols-3 gap-x-4 gap-y-8 mx-auto pt-16">
        {topRentedCars.map((car) => (
          <div
            className="card mx-4 bg-base-100 shadow-xl text-primary"
            key={car.id}
          >
            <figure className="relative pt-4 w-full aspect-[4/3]">
              <Image src={car.image} fill alt="Cars" className="p-6" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{car.title}</h2>
              <p>{car.description}</p>
              <div className="py-2 flex gap-2 flex-wrap">
                {car.features.map((feature) => (
                  <div className="badge badge-outline" key={feature}>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopRentedCars
