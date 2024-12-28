import BrandWorks from 'components/brand-works';
import NewFooter from 'components/footer';
import Hero from 'components/hero';
import HomeProducts from 'components/home-products';
import { Navbar } from 'components/layout/navbar';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
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
      <NewFooter />
      {/*       <ThreeItemGrid />
      <Carousel />
      <Footer /> */}
    </>
  );
}
