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

export default function ContactUs() {
  return (
    <>
      <button
        className="bg-white text-primary px-4 py-2 rounded-md hover:bg-slate-100 transition-all duration-400 active:scale-95 "
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Contact us
      </button>
      <dialog
        id="my_modal_5"
        className="modal text-primary modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
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
            <ul className="flex gap-4 mx-auto mt-4">
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
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}
