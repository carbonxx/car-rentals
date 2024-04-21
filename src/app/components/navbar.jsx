"use client"

import ContactUs from "@/app/components/contact-us-modal"
import {
  email,
  facebook,
  instagram,
  phone,
  twitter,
  youtube,
} from "@/app/lib/config"
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed z-50 top-0 drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-accent">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <p className="scroll-m-20 text-xl font-semibold md:mb-0">
              <Link href="/">Ganesh Self Drive</Link>
            </p>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal items-center">
              {/* Navbar menu content here */}
              <li className="cursor-pointer hover:underline underline-offset-4 transition-all">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:underline underline-offset-4 transition-all">
                <Link href="/cars">Cars</Link>
              </li>
              <ContactUs />
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-accent">
          <div className="mb-8 px-2 mx-2">
            <p className="scroll-m-20 text-xl font-semibold mb-2 md:mb-0">
              <Link href="/">Ganesh Self Drive</Link>
            </p>
          </div>
          <li className="cursor-pointer hover:underline underline-offset-4 transition-all">
            <Link href="/home">Home</Link>
          </li>
          <li className="cursor-pointer hover:underline underline-offset-4 transition-all mb-4">
            <Link href="/cars">Cars</Link>
          </li>
          <div className="mt-4">
            <h3 className="font-bold text-lg">Contact us to book cars!</h3>
            <div className="my-4 flex flex-col gap-2">
              <p className="flex gap-2">
                <Phone />
                <Link href={`tel:${phone}`} className="underline">
                  +91 {phone}
                </Link>
              </p>
              <p className="flex gap-2">
                <Mail />
                <Link href={`mailto:${email}`} className="underline">
                  {email}
                </Link>
              </p>
              <ul className="flex gap-4 mt-4">
                <li>
                  <Link href={twitter}>
                    <Twitter />
                  </Link>
                </li>
                <li>
                  <Link href={instagram}>
                    <Instagram />
                  </Link>
                </li>
                <li>
                  <Link href={facebook}>
                    <Facebook />
                  </Link>
                </li>
                <li>
                  <Link href={youtube}>
                    <Youtube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>{" "}
          <aside className="mt-auto mx-4 flex gap-2 flex-col">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              Ganesh Self Driving Cars
              <br />
              Providing services since XXXX
            </p>
          </aside>
        </ul>
      </div>
    </nav>
  )
}
