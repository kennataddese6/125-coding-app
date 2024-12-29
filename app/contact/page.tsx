import NewFooter from 'components/footer';
import { BlackNavbar } from 'components/layout/navbar/black-navbar';
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
export default function Page() {
  return (
    <>
      <BlackNavbar />
      <div className="mx-auto rounded-xl border border-slate-300 bg-white px-5 py-8 text-black shadow-md lg:my-5 lg:w-3/4">
        <h1 className="text-center text-2xl text-blue-500">Get in Touch</h1>
        <div className="mx-auto mt-1 h-0.5 w-32 bg-blue-500"></div>
        <div className="mx-12 mt-5 flex flex-wrap justify-between p-5">
          <div className="w-full px-4 lg:w-1/2">
            <h1 className="text-xl">Leave us a Message</h1>
            <label className="custom-field one w-full border">
              <input type="text" placeholder=" " className="w-full" />
              <span className="customplaceholder">Full Name</span>
            </label>
            <label className="custom-field one w-full border">
              <input type="text" placeholder=" " className="w-full" />
              <span className="customplaceholder">Email</span>
            </label>
            <textarea
              className="mt-5 w-full border border-slate-400 p-3 focus:outline-blue-500"
              placeholder="Message"
            ></textarea>
            <button className="mt-4 w-full bg-blue-500 p-2 text-white">Send</button>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="mt-8 p-2">
              <FaMapMarkerAlt color="grey" className="mr-2 inline" />
              956 Kings Street, Glendale, West California, United State of America
            </div>
            <div className="p-2">
              <FaPhone color="grey" className="mr-2 inline" />
              +251991374186
            </div>
            <div className="p-2">
              <IoIosMail color="grey" className="mr-2 inline" fontSize={22} />
              hello@info.com.org
            </div>
            <div className="p-2">
              <FaYoutube className="mr-3 inline cursor-pointer" fontSize={26} color="red" />
              <FaFacebook className="mr-3 inline cursor-pointer" fontSize={22} color="blue" />
              <FaInstagram className="mr-3 inline cursor-pointer" fontSize={22} color="orange" />
              <FaTwitter className="mr-3 inline cursor-pointer" fontSize={22} color="dodgerblue" />
            </div>
          </div>
        </div>
      </div>
      <NewFooter />
    </>
  );
}
