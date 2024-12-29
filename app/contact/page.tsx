import NewFooter from 'components/footer';
import { BlackNavbar } from 'components/layout/navbar/black-navbar';

export default function Page() {
  return (
    <>
      <BlackNavbar />
      <div className="mx-auto bg-green-600 p-4 text-black lg:w-3/4">
        <h1 className="text-center text-3xl">Get in Touch</h1>
      </div>
      <NewFooter />
    </>
  );
}
