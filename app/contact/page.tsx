import NewFooter from 'components/footer';
import { BlackNavbar } from 'components/layout/navbar/black-navbar';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
export default function Page() {
  return (
    <>
      <BlackNavbar />
      <div className="mx-auto rounded-xl border border-slate-300 bg-white py-8 text-black shadow-md lg:my-5 lg:w-3/4 lg:px-5">
        <h1 className="text-center text-2xl text-blue-500">Get in Touch</h1>
        <div className="relative mx-auto mt-1 h-0.5 w-32 bg-blue-500"></div>
        <div className="absolute top-1/3 hidden lg:block">
          <Link href={'https://www.youtube.com/channel/UCfWZU2kY-CN21Ycc0aX4L9Q'}>
            <FaYoutube className="mx-4 my-8 cursor-pointer" fontSize={26} color="red" />
          </Link>
          <Link href={'https://web.facebook.com/125coding/'}>
            <FaFacebook className="mx-4 my-8 cursor-pointer" fontSize={22} color="blue" />
          </Link>
          <Link href={'https://www.instagram.com/125coding/'}>
            <FaInstagram className="mx-4 my-8 cursor-pointer" fontSize={22} color="orange" />
          </Link>
          <Link
            href={
              'https://api.whatsapp.com/send/?phone=447791179663&text&type=phone_number&app_absent=0'
            }
          >
            <FaWhatsapp className="mx-4 my-8 cursor-pointer" fontSize={22} color="green" />
          </Link>
        </div>
        <div className="mx-12 mt-5 flex flex-wrap justify-between lg:p-5">
          <div className="w-full lg:w-1/2 lg:px-4">
            <h1 className="text-center text-xl lg:text-start">Leave us a Message</h1>
            <label className="custom-field one w-full border">
              <input type="text" placeholder=" " className="w-full" />
              <span className="customplaceholder">Full Name</span>
            </label>
            <label className="custom-field one w-full border">
              <input type="text" placeholder=" " className="w-full" />
              <span className="customplaceholder">Email</span>
            </label>
            <textarea
              className="mt-5 h-32 w-full border border-slate-400 p-3 focus:outline-blue-500"
              placeholder="Message"
            ></textarea>
            <button className="mt-4 w-full bg-blue-500 p-2 text-white">Send</button>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="mt-8 p-2">
              <FaMapMarkerAlt color="grey" className="mr-3 inline" />
              125 Ravensthorpe Road, Dewsbury, West Yorkshire, WF12 9EG
            </div>
            <div className="p-2">
              <FaPhone color="grey" className="mr-3 inline" />
              +44 (0) 7791 179 663
            </div>
            <div className="p-2">
              <IoIosMail color="grey" className="mr-3 inline" fontSize={22} />
              info@125coding.co.uk
            </div>
            <div className="flex justify-around p-2 lg:hidden">
              <FaYoutube className="mr-3 inline cursor-pointer" fontSize={26} color="red" />
              <FaFacebook className="mr-3 inline cursor-pointer" fontSize={22} color="blue" />
              <FaInstagram className="mr-3 inline cursor-pointer" fontSize={22} color="orange" />
              <FaTwitter className="mr-3 inline cursor-pointer" fontSize={22} color="dodgerblue" />
            </div>
            <iframe
              className="mt-3 w-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13212.240487806208!2d-118.2320194751238!3d34.11921052543224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c1bc27d9d281%3A0x3e8918e0a4d56540!2sBub%20and%20Grandma&#39;s%20Restaurant!5e0!3m2!1sen!2set!4v1735491952551!5m2!1sen!2set"
              width="300"
              height="200"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <NewFooter />
    </>
  );
}
