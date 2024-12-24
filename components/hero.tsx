import { FaSearch } from 'react-icons/fa';
export default function Hero() {
  return (
    <div className="h-screen bg-blue-600 bg-[url('/hero-image.png')] bg-cover bg-fixed bg-no-repeat">
      <div className="flex h-screen w-full items-center justify-center bg-black/35">
        <div className="w-full max-w-2xl">
          <h1 className="text-center text-2xl font-bold lg:text-4xl">
            Smarter, Faster and Accurate Car Diagnosis you can trust
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="mx-1 inline-flex w-screen justify-between overflow-hidden rounded-full border border-white bg-black/5 text-white backdrop:blur-sm lg:w-auto lg:bg-white lg:text-black">
              <select className="max-w-26 w-28 bg-transparent px-1 py-3 lg:mx-2 lg:w-auto lg:bg-white lg:px-4">
                <option>Any Model</option>
                <option>Audi</option>
                <option>Volswagen</option>
                <option>Seat</option>
                <option>Skoda</option>
                <option>Lamborghini</option>
                <option>BMW</option>
                <option>Mini</option>
                <option>Mercedes</option>
                <option>Ford</option>
                <option>Mazda</option>
                <option>Porshe</option>
                <option>Land Rover</option>
              </select>
              <select className="w-24 bg-transparent py-3 lg:mx-2 lg:w-28 lg:bg-white lg:px-4">
                <option>Product</option>
                <option>Apple Car Play</option>
                <option>Android Auto</option>
                <option>Reverse Cameras</option>
                <option>Vechile Security</option>
                <option>Dash Camera</option>
                <option>Entertainment</option>
              </select>
              <select className="bg-transparent py-3 lg:mx-2 lg:bg-white lg:px-4">
                <option>Any Price</option>
                <option> 50$</option>
                <option>100$</option>
                <option>150$</option>
                <option>200$</option>
                <option>250$</option>
                <option>300$</option>
                <option>350$</option>
              </select>
              <button className="m-1 hidden rounded-full bg-blue-600 px-8 py-3 text-white lg:block">
                <FaSearch className="inline" /> Search
              </button>
              <button className="m-1 rounded-full bg-blue-600 p-3 lg:hidden">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
