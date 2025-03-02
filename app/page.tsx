import Benefits from 'components/benefits';
import BrandWorks from 'components/brand-works';
import FeedBack from 'components/feedbacks';
import NewFooter from 'components/footer';
import Hero from 'components/hero';
import HomeProducts from 'components/home-products';
import { Navbar } from 'components/layout/navbar';

export const metadata = {
  description: 'Quality Products for you car in the UK',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <br />
      <BrandWorks />
      <HomeProducts />
      <Benefits />
      <FeedBack />
      <NewFooter />
      {/*       <ThreeItemGrid />
      <Carousel />
      <Footer /> */}
    </>
  );
}
