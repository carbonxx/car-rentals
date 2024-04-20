import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-base-content/50 flex fixed w-full backdrop-blur-sm items-center px-2 sm:px-0 py-4 justify-between z-50">
      <div className="flex gap-8 items-center w-full container mx-auto">
        <div>
          <p className="scroll-m-20 text-xl font-semibold">
            <Link href="/">SGT</Link>
          </p>
        </div>
        <ul className="flex ml-auto gap-8">
          <li className="cursor-pointer hover:underline underline-offset-4 transition-all">
            <Link href="/home">Home</Link>
          </li>
          <li className="cursor-pointer hover:underline underline-offset-4 transition-all">
            <Link href="/about">Cars</Link>
          </li>
          <li className="cursor-pointer hover:underline underline-offset-4 transition-all">
            <Link href="/about">Contact us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
