import Timeline from "@/app/components/timeline"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <footer
      className="footer px-10 py-16 bg-accent text-secondary"
      id="contact"
    >
      <aside>
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
          Near KRR Road, Karangalapady,
          <br />
          Bunts Hostel, Mangaluru - 575003
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="#about" className="link link-hover">
          About us
        </Link>
        <Link href="/cars" className="link link-hover">
          Our Cars
        </Link>
        <Link href="#top-rented-cars" className="link link-hover">
          Top rented Cars
        </Link>
        <Link href="#contact" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="#" className="link link-hover">
          Terms of use
        </Link>
        <Link href="#" className="link link-hover">
          Privacy policy
        </Link>
        <Link href="#" className="link link-hover">
          Cookie policy
        </Link>
      </nav>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d971.0705846197169!2d74.8469182756404!3d12.87645346348676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNear%20KRR%20Road%2C%20Karangalapady%2C%20Bunts%20Hostel%2C%20Mangaluru%20-%20575003!5e0!3m2!1sen!2sin!4v1713886740984!5m2!1sen!2sin"
        width="100%"
        height="350"
        allowfullscreen=""
        className="border-0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </footer>
  )
}
