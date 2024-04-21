import { topRentedCars } from "@/app/lib/top-rented"
import Image from "next/image"

function TopRentedCars() {
  return (
    <div className="w-full bg-accent py-24" id="top-rented-cars">
      <h2 className="font-bold text-center text-secondary text-4xl tracking-tight sm:text-5xl">
        Top Rented Cars
      </h2>
      <div className="container grid md:grid-cols-3 gap-x-4 gap-y-8 mx-auto pt-16">
        {topRentedCars.map((car) => (
          <div
            className="card mx-4 bg-base-100 shadow-xl text-primary"
            key={car.id}
          >
            <figure className="relative pt-4 w-full aspect-[4/3]">
              <Image
                src="https://source.unsplash.com/random?cars"
                fill
                alt="Cars"
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Car 1</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                ex.
              </p>
              <div className="py-2 flex gap-2 flex-wrap">
                <div className="badge badge-outline">feature</div>
                <div className="badge badge-outline">feature</div>
                <div className="badge badge-outline">feature</div>
                <div className="badge badge-outline">feature</div>
              </div>
              <div className="card-actions justify-end pt-2">
                <button className="btn btn-primary w-full">Book now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopRentedCars
