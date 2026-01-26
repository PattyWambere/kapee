import {
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { SiAirtel } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-auto">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* BRAND / INFO */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Kapee</h2>

          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>

          <div className="text-sm space-y-2">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              Lorem Ipsum, 2046 Lorem Ipsum
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" />
              576-245-2478
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              info@kapee.com
            </p>
            <p className="flex items-center gap-2 text-gray-400">
              <FaClock />
              Mon - Fri / 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* INFORMATION */}
        <div>
          <h4 className="font-semibold mb-4">Information</h4>
          <ul className="space-y-2 text-sm">
            {[
              "About Us",
              "Store Location",
              "Contact Us",
              "Shipping & Delivery",
              "Latest News",
              "Our Sitemap",
            ].map((item) => (
              <li key={item} className="hover:text-blue-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* OUR SERVICE */}
        <div>
          <h4 className="font-semibold mb-4">Our Service</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Privacy Policy",
              "Terms of Sale",
              "Customer Service",
              "Delivery Information",
              "Payments",
              "Saved Cards",
            ].map((item) => (
              <li key={item} className="hover:text-blue-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* MY ACCOUNT */}
        <div>
          <h4 className="font-semibold mb-4">My Account</h4>
          <ul className="space-y-2 text-sm">
            {[
              "My Account",
              "My Shop",
              "My Cart",
              "Checkout",
              "My Wishlist",
              "Tracking Order",
            ].map((item) => (
              <li key={item} className="hover:text-blue-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">
            Subscribe to our mailing list to get the new updates!
          </p>

          <form className="flex w-full mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 text-sm text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 text-sm rounded-r-md hover:bg-blue-700 transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-sky-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-600 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            Kapee &copy;{new Date().getFullYear()} All Rights Reserved.
          </p>

          {/* PAYMENT ICONS */}
          <div className="flex items-center gap-4 text-5xl text-gray-300">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcAmex />
            <SiAirtel />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
