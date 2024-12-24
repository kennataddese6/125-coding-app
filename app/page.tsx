'use client';
// Import Swiper React components
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import Hero from 'components/hero';
import Image from 'next/image';
import { CiHeart } from 'react-icons/ci';
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
      <Hero />
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
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
              <div className="h-16 w-16 p-2">
                <Image width={50} height={50} alt="audi" src={'/vw.png'} className="object-cover" />
                Volswagen
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <div className="h-16 w-16 p-2">
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
          <div className="mt-5 flex flex-wrap justify-between py-3">
            <div className="relative w-full rounded-2xl lg:w-52">
              <CiHeart fontSize={24} className="absolute right-2 top-2" />
              <Image
                src={'/product-one.png'}
                width={100}
                height={100}
                className="w-full rounded-2xl"
                alt="Product One"
              />
              <div className="p-3 text-black">
                <h4 className="font-bold">Car Audio</h4>
                <p>A very small description of the product</p>
                <h4 className="font-bold">$55</h4>
              </div>
            </div>
            <div className="relative w-full rounded-2xl lg:w-52">
              <CiHeart fontSize={24} className="absolute right-2 top-2" />
              <Image
                src={'/product-three.png'}
                width={100}
                height={100}
                className="w-full rounded-2xl"
                alt="Product One"
              />
              <div className="p-3 text-black">
                <h4 className="font-bold">Car Audio</h4>
                <p>A very small description of the product</p>
                <h4 className="font-bold">$55</h4>
              </div>
            </div>
            <div className="relative w-full rounded-2xl lg:w-52">
              <CiHeart fontSize={24} className="absolute right-2 top-2" />
              <Image
                src={'/product-four.png'}
                width={100}
                height={100}
                className="w-full rounded-2xl"
                alt="Product One"
              />
              <div className="p-3 text-black">
                <h4 className="font-bold">Car Audio</h4>
                <p>A very small description of the product</p>
                <h4 className="font-bold">$55</h4>
              </div>
            </div>
            <div className="relative w-full rounded-2xl lg:w-52">
              <CiHeart fontSize={24} className="absolute right-2 top-2" />
              <Image
                src={'/product-two.png'}
                width={100}
                height={100}
                className="w-full rounded-2xl"
                alt="Product One"
              />
              <div className="p-3 text-black">
                <h4 className="font-bold">Car Audio</h4>
                <p>A very small description of the product</p>
                <h4 className="font-bold">$55</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      {/* <ThreeItemGrid /  >
      <Carousel />
      <Footer /> */}
    </>
  );
}
