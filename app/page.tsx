'use client';
// Import Swiper React components
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './styles.css';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
          <div className="w-5/6 max-w-2xl">
            <h1 className="text-center text-xl font-bold lg:text-4xl">
              Smarter, Faster and Accurate Car Diagnosis you can trust
            </h1>
            <div className="mt-5 flex justify-center">
              <div className="inline-flex justify-center overflow-hidden rounded-full bg-white">
                <select className="mx-2 bg-white px-4 py-3 text-black">
                  <option>Any Model</option>
                  <option>Audi</option>
                </select>
                <select className="mx-2 bg-white px-4 py-3 text-black">
                  <option>Any Make</option>
                </select>
                <select className="mx-2 bg-white px-4 py-3 text-black">
                  <option>Any Price</option>
                </select>
                <button className="m-1 rounded-full bg-blue-600 px-8 py-3">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="mx-2 -mt-20 rounded-3xl bg-white p-4 text-black lg:mx-10 lg:rounded-3.5xl">
        <div className="mx-auto mt-4 p-4 lg:w-4/5">
          <h2 className="text-center text-2xl font-bold lg:text-start">Brands we have worked on</h2>
        </div>
        <div className="mt-4 py-3">
          <Swiper
            slidesPerView={2}
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
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
              <div className="mx-auto block h-16 w-16">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="mx-auto block h-16 w-16">
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
