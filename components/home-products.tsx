import Image from 'next/image';
export default function HomeProducts() {
  return (
    <div className="bg-white p-4 text-black lg:mx-10">
      <div className="mx-auto mt-4 p-4 text-black lg:w-4/5">
        <h2 className="text-center text-2xl font-bold lg:text-start">Featured Products</h2>
        <div className="mt-5 flex flex-wrap justify-between gap-y-4 py-3">
          <div className="relative w-full rounded-2xl lg:w-52">
            <div className="relative h-32">
              <Image
                src={'/road.webp'}
                className="h-32 w-full rounded-2xl object-cover"
                alt="Product One"
                quality={100}
                fill
              />
            </div>
            <div className="p-3 text-black">
              <h4 className="font-bold">Road Angel</h4>
              <p>iDrive 4 iDrive 6 FLASH Update for Full Screen </p>
              <h4 className="font-bold">£229.99</h4>
            </div>
          </div>
          <div className="relative w-full rounded-2xl lg:w-52">
            <div className="relative h-32">
              <Image
                src={'/porsche.webp'}
                className="h-32 w-full rounded-2xl object-cover"
                alt="Product One"
                quality={100}
                fill
              />
            </div>
            <div className="p-3 text-black">
              <h4 className="font-bold">Porsche Cayenne</h4>
              <p>Macan PCM 4.0 Apple CarPlay / Android Auto </p>
              <h4 className="font-bold">£199.00</h4>
            </div>
          </div>
          <div className="relative w-full rounded-2xl lg:w-52">
            <div className="relative h-32">
              <Image
                src={'/minin.webp'}
                className="h-32 w-full rounded-2xl object-cover"
                alt="Product One"
                quality={100}
                fill
              />
            </div>
            <div className="p-3 text-black">
              <h4 className="font-bold">Mini NBTEvo</h4>
              <p>iDrive 4 iDrive 6 FLASH Update for Full Screen </p>
              <h4 className="font-bold">£350.00</h4>
            </div>
          </div>
          <div className="relative w-full rounded-2xl lg:w-52">
            <div className="relative h-32">
              <Image
                src={'/bmwe.webp'}
                className="h-32 w-full rounded-2xl object-cover"
                alt="Product One"
                quality={100}
                fill
              />
            </div>
            <div className="p-3 text-black">
              <h4 className="font-bold">BMW EntryNav2</h4>
              <p>BMW EntryNav2 Apple CarPlay Activation </p>
              <h4 className="font-bold">£149.00</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
