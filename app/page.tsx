import Image from 'next/image';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Wix.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <div className="relative -z-10 h-screen">
        <Image
          src={'/hero-image.png'}
          alt="Hero Image"
          width={500}
          height={500}
          className="h-screen w-full object-cover"
        />
        <div className="absolute top-0 flex h-screen w-full items-center justify-center bg-black">
          <div className="max-w-2xl">
            <h1 className="text-center text-4xl">
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
      {/*    <ThreeItemGrid />
      <Carousel />
      <Footer /> */}
    </>
  );
}
