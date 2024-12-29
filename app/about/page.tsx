import NewFooter from 'components/footer';
import { BlackNavbar } from 'components/layout/navbar/black-navbar';

export default function Page() {
  return (
    <>
      <BlackNavbar />
      <div className="mx-auto my-8 flex flex-wrap justify-between text-black lg:w-9/12 lg:py-6">
        <div className="p-3 lg:w-1/2 lg:p-5">
          <h1 className="text-center text-2xl lg:text-start">About us</h1>
          <p className="mt-3 text-center text-stone-700 lg:pr-4 lg:text-start">
            We are a dedicated team working on cars and accessories. we are passionate aboutWe are a
            dedicated team working on cars and accessories. we are passionate aboutWe are a
            dedicated team working on cars and accessories. we are passionate aboutWe are a
            dedicated team working on cars and accessories. we are passionate about...
          </p>
          <button className="mx-auto mt-3 block rounded-3xl bg-blue-500 px-6 py-2 text-white lg:mx-0">
            Read More
          </button>
        </div>
        {/*     <div>
          <Image src={'/team.png'} width={500} height={600} alt="team image" />
        </div> */}
      </div>
      <NewFooter />
    </>
  );
}
