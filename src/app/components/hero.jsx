import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="bg-image min-h-[90vh] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 container mx-auto min-h-[90vh]">
        <div className="mx-4 flex flex-col justify-center z-40">
          <h1 className="text-3xl font-bold md:text-6xl ">
            Looking for <span className="text-accent">cars on rent</span> and to{" "}
            <span className="text-accent">self-drive</span>?
          </h1>
          <p className="text-xl my-8 md:text-2xl">
            Look no more, Ganesh Self Drive Rental Cars, has all variety of cars
            for you.
          </p>
          <Link href="/cars">
            <button className="btn btn-primary text-base-100 w-fit px-8">
              Explore Cars &#8594;
            </button>
          </Link>
        </div>
        <div className="hidden md:flex justify-center items-center z-40">
          <Image src="/car.png" alt="a white car" width={800} height={300} />
        </div>
      </div>
    </div>
  )
}
