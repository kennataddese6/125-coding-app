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
      <div className="relative -z-10 h-5/6 bg-fixed">
        <Image
          src={'/hero-image.png'}
          alt="Hero Image"
          width={500}
          height={500}
          className="h-screen w-full bg-cover lg:bg-fixed"
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
      <div className="rounded-5xl -mt-20 bg-white p-4 text-black lg:mx-10">
        <div className="mx-auto mt-4 p-4 lg:w-4/5">
          <h2 className="text-2xl font-bold">Brands we have worked on</h2>
          <ul className="flex flex-wrap justify-between py-5">
            <li>
              <Image
                width={50}
                height={50}
                alt="audi"
                src={'/audi.png'}
                className="mx-auto block"
              />
              Audi
            </li>
            <li className="text-center">
              <Image width={50} height={50} alt="audi" src={'/ford.png'} />
              BMW
            </li>
            <li className="text-center">
              <Image width={50} height={50} alt="audi" src={'/bmw.png'} />
              Ford
            </li>
            <li className="text-center">
              <Image width={50} height={50} alt="audi" src={'/mercedes.png'} />
              Mercedes
            </li>
            <li className="text-center">
              <Image width={50} height={50} alt="audi" src={'/vw.png'} />
              Volkswagen
            </li>
            <li className="text-center">
              <Image width={50} height={50} alt="audi" src={'/lambo.png'} />
              Lamborghini
            </li>
          </ul>
        </div>
        <div className="mx-auto mt-4 p-4 lg:w-4/5">
          <h2 className="text-2xl font-bold">Explore all products</h2>
        </div>
      </div>
      {/* <ThreeItemGrid /  >
      <Carousel />
      <Footer /> */}
    </>
  );
}
