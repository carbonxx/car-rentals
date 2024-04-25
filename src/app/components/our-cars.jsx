import {
  HeartHandshake,
  LocateFixedIcon,
  LucideUserCheck2,
  X,
} from "lucide-react"
import Image from "next/image"

function OurCars() {
  return (
    <section className="bg-white text-primary py-24">
      <h2 className="font-bold text-center text-primary text-4xl tracking-tight sm:text-5xl">
        Best Service and Cars
      </h2>
      <div className="container md:mx-auto place-items-center grid md:grid-cols-[60%_40%] gap-8">
        <div className="relative w-5/6 aspect-square mx-auto flex justify-center items-center">
          <Image
            src="/black-car.png"
            alt="Black car"
            fill
            quality={100}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-8 w-11/12 md:py-16 items-start">
          <div className="flex gap-4 justify-center items-center">
            <div className="bg-accent p-4 rounded-lg">
              <LucideUserCheck2 className="w-12 h-12 text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Customer Support</p>
              <p>Dedicated assistance whenever you need it most.</p>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="bg-accent p-4 rounded-lg">
              <LocateFixedIcon className="w-12 h-12 text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Available at many locations</p>
              <p>Conveniently located to serve you better.</p>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="bg-accent p-4 rounded-lg">
              <HeartHandshake className="w-12 h-12 text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Clean Vehicles</p>
              <p>
                Enjoy clean and comfortable rides for a seamless journey every
                time.
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="bg-accent p-4 rounded-lg">
              <X className="w-12 h-12 text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Free Cancelation</p>
              <p>
                Flexible policies for hassle-free adjustments to your plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurCars
