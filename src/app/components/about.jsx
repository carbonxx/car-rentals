import Image from "next/image"

function About() {
  return (
    <div className="w-full bg-accent py-24">
      <h1 className="text-3xl font-bold md:text-6xl text-center text-secondary">
        Our Cars
      </h1>
      <div className="container mx-auto py-16">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://source.unsplash.com/400x300/random?cars"
              width={400}
              height={300}
              alt="Cars"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-  ">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
