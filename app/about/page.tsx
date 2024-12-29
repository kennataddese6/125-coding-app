import NewFooter from 'components/footer';
import { BlackNavbar } from 'components/layout/navbar/black-navbar';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <BlackNavbar />
      <div className="mx-auto my-8 flex flex-wrap justify-between py-6 text-black lg:w-9/12">
        <div className="w-1/2 p-5">
          <h1 className="text-2xl">About us</h1>
          <p className="mt-3 pr-4 text-stone-700">
            We are a dedicated team working on cars and accessories. we are passionate aboutWe are a
            dedicated team working on cars and accessories. we are passionate aboutWe are a
            dedicated team working on cars and accessories. we are passionate aboutWe are a
            dedicated team working on cars and accessories. we are passionate about...
          </p>
          <button className="mt-3 rounded-3xl bg-blue-500 px-6 py-2 text-white">Read More</button>
        </div>
        <div>
          <Image src={'/team.png'} width={500} height={600} alt="team image" />
        </div>
      </div>
      <NewFooter />
    </>
  );
}
