'use client';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './styles.css';
export default function BrandWorks() {
  return (
    <div className="relative z-10 -mt-16 rounded-3xl bg-white p-4 text-black lg:mx-10 lg:-mt-20 lg:rounded-3.5xl">
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
              slidesPerView: 5
            }
          }}
        >
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/audi.png'} className="object-cover" />
              Audi
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/ford.png'} className="object-cover" />
              BMW
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/bmw.png'} className="object-cover" />
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
          {/* <SwiperSlide className="text-black">
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
          </SwiperSlide> */}
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/audi.png'} className="object-cover" />
              Audi
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/ford.png'} className="object-cover" />
              BMW
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/bmw.png'} className="object-cover" />
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
          {/* <SwiperSlide className="text-black">
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
          </SwiperSlide> */}
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/audi.png'} className="object-cover" />
              Audi
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/ford.png'} className="object-cover" />
              BMW
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/bmw.png'} className="object-cover" />
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
          {/* <SwiperSlide className="text-black">
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
          </SwiperSlide> */}
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/audi.png'} className="object-cover" />
              Audi
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/ford.png'} className="object-cover" />
              BMW
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/bmw.png'} className="object-cover" />
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
          {/* <SwiperSlide className="text-black">
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
          </SwiperSlide> */}
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/audi.png'} className="object-cover" />
              Audi
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/ford.png'} className="object-cover" />
              BMW
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-black">
            <div className="h-16 w-16 p-2">
              <Image width={50} height={50} alt="audi" src={'/bmw.png'} className="object-cover" />
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
          {/* <SwiperSlide className="text-black">
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
          </SwiperSlide> */}
        </Swiper>
      </div>
      <br />
    </div>
  );
}
