import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo dan Deskripsi */}
          <div>
            <Link href="/" className="mb-6 block">
              <Image src="/logo.png" width={128} height={49} alt="logo" />
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              quod cumque doloremque inventore cum qui!
            </p>
          </div>

          {/* Navigasi Links */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="mb-6 text-xl font-semibold text-white">Links</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/room" className="hover:text-white">
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-xl font-semibold text-white">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="hover:text-white">
                    Legal Notice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Payment Methods
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 text-xl font-semibold text-white">
              Newsletter
            </h4>
            <p>
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <form className="mt-5">
              <input
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
                className="w-full p-3 rounded-sm bg-white text-black mb-4"
              />
              <button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 rounded-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bawah */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-500 px-4">
        &copy; Copyright 2025 Muhamad Tabina Widyatna — All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
