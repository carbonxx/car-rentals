import { cars } from "@/app/lib/cars"
import Image from "next/image"

export default function CarsPage() {
  return (
    <main className="py-28 bg-white">
      <h1 className="mx-2 font-bold text-center text-primary text-4xl tracking-tight sm:text-5xl">
        Look for the <span className="text-accent">cars to drive</span> on rent
      </h1>
      <div className="container flex flex-col gap-8 px-4 mx-auto pt-12">
        <div className="grid md:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-8">
          {cars.map((car) => (
            <div
              className="card bg-base-100 shadow-xl text-primary"
              key={car.id}
            >
              <figure className="relative pt-4 w-full aspect-[4/3] rounded-none rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl ">
                <Image src={car.image} fill alt={car.name} className="p-6" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{car.name}</h2>
                {/* <p className="text-3xl font-bold">&#8377; {car.rate} / day</p> */}
                <p>{car.description}</p>
                <div className="py-2 flex gap-2 flex-wrap">
                  {car.features.map((feature) => (
                    <div
                      className="text-xs md:text-base badge badge-outline"
                      key={feature}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="divider"></div>
        </div>
      </div>
    </main>
  )
}
