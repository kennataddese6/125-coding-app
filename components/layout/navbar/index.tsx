'use client';
import CartModal from 'components/cart/modal';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense, useState } from 'react';
import MobileMenu from './mobile-menu';

const { SITE_NAME } = process.env;

export function Navbar() {
  // const menu = await getMenu('next-js-frontend-header-menu');
  const [showNav, setShowNav] = useState(false);

  const menu = [];
  function scrollPosition() {
    const position = document.documentElement.scrollTop;
    if (position > 225) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }
  window.addEventListener('scroll', () => {
    scrollPosition();
  });
  return (
    <nav
      className={`fixed z-20 flex w-full items-center justify-between p-4 lg:px-6 ${showNav ? 'animate-fadeIn bg-white/60 text-black backdrop-blur-xl' : ''}`}
    >
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu
            menu={[
              { title: 'Home', path: '/' },
              { title: 'Products', path: '/products' },
              { title: 'About', path: '/about' },
              { title: 'Contact', path: '/contact' }
            ]}
          />
        </Suspense>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            {/* <LogoSquare /> */}
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              125CODING
            </div>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {[].map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {/* <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div> */}
        <div className="hidden items-center justify-end md:flex">
          <ul className="flex">
            <li
              className={`mx-5 cursor-pointer rounded-md border-b-2 p-1 ${showNav ? 'border-b-transparent font-bold text-blue-600' : 'border-b-white'}`}
            >
              Home
            </li>
            <li className="mx-5 cursor-pointer p-1">
              <Link href={'/products'}>Products</Link>
            </li>
            <li className="mx-5 cursor-pointer p-1">
              <Link href={'/about'}>About</Link>
            </li>
            <li className="mx-5 cursor-pointer p-1">
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
          <CartModal color={`${showNav ? 'text-black' : 'text-white'}`} />
        </div>
        <div className="lg:hidden">
          <CartModal color={`${showNav ? 'text-black' : 'text-white'}`} />
        </div>
      </div>
    </nav>
  );
}
