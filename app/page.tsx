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
      <div className="relative -z-10 h-5/6">
        <Image
          src={'/hero-image.png'}
          alt="Hero Image"
          width={500}
          height={500}
          className="h-screen w-full object-cover"
        />
        <div className="absolute top-0 flex h-screen w-full items-center justify-center bg-transparent backdrop-blur-sm">
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
      <div className="mx-10 -mt-20 rounded-t-3xl bg-white p-5 text-black">
        <div className="mx-auto mt-4 p-5 lg:w-4/5">
          <h2 className="text-xl font-bold">Brands we have worked</h2>
          <ul className="flex justify-between py-5">
            <li>Lamborginin</li>
            <li>Porsche</li>
            <li>Land Rover</li>
            <li>Mercedes</li>
            <li>Ford</li>
            <li>Volswagen</li>
          </ul>
        </div>
      </div>
      {/* <ThreeItemGrid /  >
      <Carousel />
      <Footer /> */}
    </>
  );
}
