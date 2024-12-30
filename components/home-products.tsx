import Image from 'next/image';
import { CiHeart } from 'react-icons/ci';
export default function HomeProducts() {
  return (
    <div className="bg-white p-4 text-black lg:mx-10">
      <div className="mx-auto mt-4 p-4 text-black lg:w-4/5">
        <h2 className="text-center text-2xl font-bold lg:text-start">Featured Products</h2>
        <div className="mt-5 flex flex-wrap justify-between gap-y-4 py-3">
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
  );
}
