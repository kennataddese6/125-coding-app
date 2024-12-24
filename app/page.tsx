import BrandWorks from 'components/brand-works';
import Hero from 'components/hero';
import HomeProducts from 'components/home-products';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Wix.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <br />
      <BrandWorks />
      <HomeProducts />
      {/* <ThreeItemGrid /  >
      <Carousel />
      <Footer /> */}
    </>
  );
}
