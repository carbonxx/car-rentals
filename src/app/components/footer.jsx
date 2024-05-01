import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer
      className="footer px-10 py-16 bg-accent text-secondary"
      id="contact"
    >
      <aside>
        <Image
          src="/logo.png"
          alt="Ganesh Self Driving Cars Logo"
          width={100}
          height={100}
        />
        <div className="mt-2">
          <p className="mb-2">Ganesh Self Driving Cars</p>
          <p>
            Near KRR Road, Karangalapady,
            <br />
            Bunts Hostel, Mangalore - 575003
          </p>
        </div>
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
