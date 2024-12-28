import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function NewFooter() {
  return (
    <footer className="footer-color">
      <div className="mx-auto flex flex-wrap items-center justify-between py-10 lg:w-3/4">
        <div>
          <h1 className="text-2xl">Join 125CODING</h1>
          <p className="mt-2 text-sm">Receive pricing updates, shopping tips & more!</p>
        </div>
        <div className="inline-flex overflow-hidden rounded-3.5xl bg-white/10 p-2">
          <input
            type="text"
            placeholder="Your email address"
            className="mx-4 min-w-64 border-none bg-transparent pr-5 text-white focus:border-none focus:outline-none"
          />
          <button className="rounded-full bg-blue-600 px-6 py-2">Sign Up</button>
        </div>
      </div>
      <div className="h-0.5 w-full bg-slate-500"></div>
      <div className="mx-auto flex flex-wrap justify-between px-6 py-12 lg:w-3/4 lg:px-0">
        <div>
          <h1 className="text-lg font-bold">Company</h1>
          <ul>
            <li className="py-2">About us</li>
            <li className="py-2">Contact us</li>
            <li className="py-2">FAQ</li>
            <li className="py-2">Terms & conditions</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold">Our Brands</h1>
          <ul>
            <li className="py-2">About us</li>
            <li className="py-2">Contact us</li>
            <li className="py-2">FAQ</li>
            <li className="py-2">Terms & conditions</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold">Vehicle Type</h1>
          <ul>
            <li className="py-2">Ford</li>
            <li className="py-2">Porsche</li>
            <li className="py-2">Volswagen</li>
            <li className="py-2">Land Rover</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold">Follow Us</h1>
          <ul>
            <li className="py-3">
              <FaFacebook />
            </li>
            <li className="py-3">
              <FaInstagram />
            </li>
            <li className="py-3">
              <FaTwitter />
            </li>
            <li className="py-3">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
