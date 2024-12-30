import Image from 'next/image';
import { TiTick } from 'react-icons/ti';
export default function Benefits() {
  return (
    <div className="bg-white p-4 text-black lg:mx-10">
      <div className="mx-auto mt-4 flex flex-wrap overflow-hidden rounded-2xl bg-slate-100 text-black lg:w-4/5">
        <div className="w-full lg:w-1/2">
          <Image
            src={'/benefit.png'}
            width={300}
            height={300}
            alt="benefits"
            className="h-auto w-full"
          />
        </div>
        <div className="relative h-full w-full lg:w-1/2 lg:px-16 lg:py-24">
          <div className="">
            <h1 className="my-3 text-3xl font-bold">Get a fair price for your car coding today</h1>
            <p className="my-3">
              We are committed to providing our customers with exceptional service, competitive
              pricing, and a wide range of.
            </p>
            <p className="my-2">
              <TiTick className="inline text-green-500" fontSize={24} />
              We are the UKs largest provider, with more patrols.
            </p>
            <p className="my-2">
              <TiTick className="inline text-green-500" fontSize={24} />
              You get 24/7 roadside assistance
            </p>
            <p className="my-2">
              <TiTick className="inline text-green-500" fontSize={24} />
              We fix 4 out of 5 cars at the roadside
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
