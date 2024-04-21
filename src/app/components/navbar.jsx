import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-accent text-secondary flex fixed w-full backdrop-blur-sm items-center px-2 sm:px-0 py-4 justify-between z-50">
      <div className="md:flex gap-8 items-center w-full container mx-auto">
        <div>
          <p className="scroll-m-20 text-xl font-semibold mb-2 md:mb-0">
            <Link href="/">Ganesh Self Drive</Link>
          </p>
        </div>
        <ul className="flex ml-auto gap-8">
          <li className="cursor-pointer hover:underline underline-offset-4 transition-all">
            <Link href="/home">Home</Link>
          </li>
          <li className="cursor-pointer hover:underline underline-offset-4 transition-all">
            <Link href="/cars">Cars</Link>
          </li>
          <li className="cursor-pointer hover:underline underline-offset-4 transition-all">
            <Link href="#contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
