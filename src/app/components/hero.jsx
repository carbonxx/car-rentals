import { LucideArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="bg-image bg-white text-primary relative min-h-screen w-full">
      <div className="flex flex-col-reverse justify-center md:grid md:grid-cols-2 md:gap-16 container mx-auto min-h-screen">
        <div className="mx-4 flex flex-col justify-center z-40">
          <h1 className="text-3xl font-bold md:text-5xl">
            Looking for <span className="text-accent">cars on rent</span> and to{" "}
            <span className="text-accent">self-drive</span>?
          </h1>
          <p className="text-md my-8 md:text-xl">
            Look no more, Ganesh Self Drive Rental Cars, has all variety of cars
            for you.
          </p>
          <Link href="/cars">
            <button className="btn btn-primary text-base-100 w-fit px-8">
              Explore Cars &#8594;
            </button>
          </Link>
        </div>
        <div className="md:flex justify-center items-center z-40">
          <Image src="/car.png" alt="a white car" width={800} height={300} />
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 animate-bounce [animation-duration:1500ms] bottom-4">
        <LucideArrowDown className="scale-125 md:scale-150" />
      </div>
    </div>
  )
}
