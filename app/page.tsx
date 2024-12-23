'use client';
// Import Swiper React components
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
/* export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Wix.',
  openGraph: {
    type: 'website'
  }
};
 */
export default function HomePage() {
  return (
    <>
      <div className="relative -z-10 h-5/6">
        <Image
          src={'/hero-image.png'}
          alt="Hero Image"
          width={500}
          height={500}
          className="h-screen w-full object-cover lg:object-fill"
          quality={100}
        />
        <div className="absolute top-0 flex h-screen w-full items-center justify-center bg-black/35">
          <div className="w-11/12 max-w-2xl">
            <h1 className="text-center text-2xl font-bold lg:text-4xl">
              Smarter, Faster and Accurate Car Diagnosis you can trust
            </h1>
            <div className="mt-5 flex justify-center">
              <div className="inline-flex justify-center overflow-hidden rounded-full border border-white bg-black/5 text-white backdrop:blur-sm lg:bg-white lg:text-black">
                <select className="bg-transparent px-1 py-3 lg:mx-2 lg:bg-white lg:px-4">
                  <option>Any Model</option>
                  <option>Audi</option>
                </select>
                <select className="bg-transparent py-3 lg:mx-2 lg:bg-white lg:px-4">
                  <option>Any Make</option>
                </select>
                <select className="bg-transparent py-3 lg:mx-2 lg:bg-white lg:px-4">
                  <option>Any Price</option>
                </select>
                <button className="m-1 hidden rounded-full bg-blue-600 px-8 py-3 lg:block">
                  Search
                </button>
                <button className="m-1 rounded-full bg-blue-600 p-3 lg:hidden">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="-mt-16 rounded-3xl bg-white p-4 text-black lg:mx-10 lg:-mt-20 lg:rounded-3.5xl">
        <div className="mx-auto mt-4 p-4 lg:w-4/5">
          <h2 className="text-center text-2xl font-bold lg:text-start">Brands we have worked on</h2>
        </div>
        <div className="py-2">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-full"
            breakpoints={{
              480: { slidesPerView: 2 },
              1024: {
                slidesPerView: 4
              }
            }}
          >
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/audi.png'}
                  className="object-cover"
                />
                Audi
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/ford.png'}
                  className="object-cover"
                />
                BMW
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/bmw.png'}
                  className="object-cover"
                />
                Ford
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/mercedes.png'}
                  className="object-cover"
                />
                Mercedes
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/lambo.png'}
                  className="object-cover"
                />
                Lamborghini
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/audi.png'}
                  className="object-cover"
                />
                Audi
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/ford.png'}
                  className="object-cover"
                />
                BMW
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/bmw.png'}
                  className="object-cover"
                />
                Ford
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/mercedes.png'}
                  className="object-cover"
                />
                Mercedes
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/lambo.png'}
                  className="object-cover"
                />
                Lamborghini
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/audi.png'}
                  className="object-cover"
                />
                Audi
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/ford.png'}
                  className="object-cover"
                />
                BMW
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/bmw.png'}
                  className="object-cover"
                />
                Ford
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/mercedes.png'}
                  className="object-cover"
                />
                Mercedes
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/lambo.png'}
                  className="object-cover"
                />
                Lamborghini
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/audi.png'}
                  className="object-cover"
                />
                Audi
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/ford.png'}
                  className="object-cover"
                />
                BMW
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/bmw.png'}
                  className="object-cover"
                />
                Ford
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/mercedes.png'}
                  className="object-cover"
                />
                Mercedes
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/lambo.png'}
                  className="object-cover"
                />
                Lamborghini
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/audi.png'}
                  className="object-cover"
                />
                Audi
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/ford.png'}
                  className="object-cover"
                />
                BMW
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/bmw.png'}
                  className="object-cover"
                />
                Ford
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/mercedes.png'}
                  className="object-cover"
                />
                Mercedes
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16 p-2">
                <Image
                  width={50}
                  height={50}
                  alt="audi"
                  src={'/lambo.png'}
                  className="object-cover"
                />
                Lamborghini
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <br />
        <div className="mx-auto mt-4 p-4 lg:w-4/5">
          <h2 className="text-center text-2xl font-bold lg:text-start">Explore all products</h2>
        </div>
      </div>
      {/* <ThreeItemGrid /  >
      <Carousel />
      <Footer /> */}
    </>
  );
}
