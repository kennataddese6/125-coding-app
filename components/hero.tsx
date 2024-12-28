'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
export default function Hero() {
  const router = useRouter();
  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');

  const buildUrl = (baseUrl: any, params: any) => {
    const query = Object.keys(params)
      .filter((key) => params[key])
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
    return `${baseUrl}${query ? `?${query}` : ''}`;
  };

  return (
    <div className="h-screen bg-blue-600 bg-[url('/hero-image.png')] bg-cover bg-fixed bg-no-repeat">
      <div className="flex h-screen w-full items-center justify-center bg-black/35">
        <div className="w-full max-w-2xl">
          <h1 className="text-center text-2xl font-bold lg:text-4xl">
            Smarter, Faster and Accurate Car Diagnosis you can trust
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="mx-1 inline-flex w-screen justify-between overflow-hidden rounded-full border border-white bg-black/5 text-white backdrop:blur-sm lg:w-auto lg:bg-white lg:text-black">
              <select
                className="max-w-26 w-28 bg-transparent px-1 py-3 lg:mx-2 lg:w-auto lg:bg-white lg:px-4"
                onChange={(e) => setModel(e.target.value)}
              >
                <option>Any Model</option>
                <option value={'audi'}>Audi</option>
                <option value={'volswagen'}>Volswagen</option>
                <option value={'seat'}>Seat</option>
                <option value={'skoda'}>Skoda</option>
                <option value={'lambo'}>Lamborghini</option>
                <option value={'bmw'}>BMW</option>
                <option value={'mini'}>Mini</option>
                <option value={'mercedes'}>Mercedes</option>
                <option value={'ford'}>Ford</option>
                <option value={'mazda'}>Mazda</option>
                <option value={'porshe'}>Porshe</option>
                <option value={'land-rover'}>Land Rover</option>
              </select>
              <select
                className="w-24 bg-transparent py-3 lg:mx-2 lg:w-28 lg:bg-white lg:px-4"
                onChange={(e) => setType(e.target.value)}
              >
                <option>Product</option>
                <option value={'apple-carplay'}>Apple Car Play</option>
                <option value={'reverse-cameras'}>Reverse Cameras</option>
                <option value={'vehicle-security'}>Vechile Security</option>
                <option value={'dash-camera'}>Dash Camera</option>
                <option value={'entertainment'}>Entertainment</option>
              </select>
              <select
                className="bg-transparent py-3 lg:mx-2 lg:bg-white lg:px-4"
                onChange={(e) => setPrice(e.target.value)}
              >
                <option>Any Price</option>
                <option value={'0-100'}>100$</option>
                <option value={'100-200'}>200$</option>
                <option value={'200-300'}>300$</option>
                <option value={'300-400'}>400$</option>
                <option value={'400-500'}>500$</option>
              </select>
              <button
                className="m-1 hidden rounded-full bg-blue-600 px-8 py-3 text-white lg:block"
                onClick={() => router.push(buildUrl('/products', { model, type, price }))}
              >
                <FaSearch className="inline" /> Search
              </button>
              <button
                className="m-1 rounded-full bg-blue-600 p-3 lg:hidden"
                onClick={() => router.push(buildUrl('/products', { model, type, price }))}
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
