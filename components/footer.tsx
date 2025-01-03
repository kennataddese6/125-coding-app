import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { toast } from 'sonner';

export default function NewFooter() {
  return (
    <footer className="footer-color">
      <div className="mx-auto flex flex-wrap items-center justify-between py-10 lg:w-3/4">
        <div className="ml-5 lg:ml-0">
          <h1 className="text-2xl">Join 125CODING</h1>
          <p className="mt-2 text-sm">Receive pricing updates, shopping tips & more!</p>
        </div>
        <div className="mx-3 mt-3 inline-flex overflow-hidden rounded-3.5xl bg-white/10 p-2 lg:mt-0">
          <input
            type="text"
            placeholder="Your email address"
            className="mx-4 border-none bg-transparent pr-5 text-white focus:border-none focus:outline-none lg:min-w-64"
          />
          <button
            className="rounded-full bg-blue-600 px-6 py-2"
            onClick={() => toast.success('success')}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="h-0.5 w-full bg-slate-500"></div>
      <div className="mx-auto flex flex-wrap justify-between gap-4 px-6 py-12 lg:w-3/4 lg:px-0">
        <div className="w-full lg:w-auto">
          <h1 className="text-lg font-bold">Company</h1>
          <ul>
            <li className="py-2">
              <Link href={'/about'}>About us</Link>
            </li>
            <li className="py-2">
              <Link href={'/contact'}>Contact us</Link>
            </li>
            <li className="py-2">
              <Link href={'/about'}>FAQ</Link>
            </li>
            <li className="py-2">
              <Link href={'/about'}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-auto">
          <h1 className="text-lg font-bold">Our Brands</h1>
          <ul>
            <li className="py-2">
              <Link href={'/products?type=apple-carplay'}>Apple CarPlay</Link>
            </li>
            <li className="py-2">
              <Link href={'/products?type=dash-security'}>Dash Cameras</Link>
            </li>
            <li className="py-2">
              <Link href={'/products?type=reverse-cameras'}>Reverse Cameras</Link>
            </li>
            <li className="py-2">
              <Link href={'/products?type=vehicle-security'}>Vehicle Security</Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-auto">
          <h1 className="text-lg font-bold">Vehicle Type</h1>
          <ul>
            <li className="py-2">
              <Link href={'/products?model=audi'}>Audi</Link>
            </li>
            <li className="py-2">
              <Link href={'/products?model=porshe'}>Porsche</Link>
            </li>
            <li className="py-2">
              <Link href={'/products?model=volswagen'}>Volswagen</Link>
            </li>
            <li className="py-2">
              <Link href={'/products?model=land-rover'}>Land Rover</Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-auto">
          <h1 className="text-lg font-bold">Follow Us</h1>
          <ul>
            <li className="py-3">
              <Link href={'https://web.facebook.com/125coding/'}>
                <FaFacebook />
              </Link>
            </li>
            <li className="py-3">
              <Link href={'https://www.instagram.com/125coding/'}>
                <FaInstagram />
              </Link>
            </li>
            <li className="py-3">
              <Link
                href={
                  'https://api.whatsapp.com/send/?phone=447791179663&text&type=phone_number&app_absent=0'
                }
              >
                <FaWhatsapp />
              </Link>
            </li>
            <li className="py-3">
              <Link href={'https://www.youtube.com/channel/UCfWZU2kY-CN21Ycc0aX4L9Q'}>
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
