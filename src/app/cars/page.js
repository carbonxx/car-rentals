import { cars } from "@/app/lib/cars"
import Image from "next/image"

export default function CarsPage() {
  return (
    <main className="py-16 bg-white">
      <h1 className="font-bold text-center text-primary text-5xl tracking-tight sm:text-6xl">
        Look for the <span className="text-accent">cars to drive</span> on rent
      </h1>
      <div className="container flex flex-col gap-8 px-4 mx-auto pt-12">
        {cars.map((car_category) => (
          <div key={car_category.category} className="flex flex-col gap-4">
            <div className="text-primary mx-2">
              <h2 className="font-semibold text-3xl tracking-tight sm:text-4xl">
                {car_category.category}
              </h2>
              <p className="text-lg">{car_category.description}</p>
            </div>
            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
              {car_category.cars.map((car) => (
                <div
                  className="card bg-base-100 shadow-xl text-primary"
                  key={car.id}
                >
                  <figure className="relative pt-4 w-full aspect-[4/3] rounded-none rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl ">
                    <Image
                      src={car.image}
                      fill
                      alt="Cars"
                      className="object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{car.name}</h2>
                    <p className="text-3xl font-bold">
                      &#8377; {car.rate} / day
                    </p>
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
            <div className="divider"></div>
          </div>
        ))}
      </div>
    </main>
  )
}
