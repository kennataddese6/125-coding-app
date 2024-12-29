'use client';
import CartModal from 'components/cart/modal';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';

const { SITE_NAME } = process.env;

export function BlackNavbar() {
  // const menu = await getMenu('next-js-frontend-header-menu');
  const menu = [];
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-10 flex w-full items-center justify-between bg-white p-4 text-black lg:px-32">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={[]} />
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
            <li className="mx-5 cursor-pointer p-1">
              <Link href={'/'}>Home</Link>
            </li>
            <li
              className={`mx-5 cursor-pointer p-1 ${pathname.includes('product') ? 'font-bold text-blue-600' : ''}`}
            >
              <Link href={'/products'}>Products</Link>
            </li>
            <li
              className={`mx-5 cursor-pointer p-1 ${pathname.includes('about') ? 'font-bold text-blue-600' : ''}`}
            >
              About
            </li>
            <li
              className={`mx-5 cursor-pointer p-1 ${pathname === '/contact' ? 'font-bold text-blue-600' : ''}`}
            >
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
          <CartModal color="text-black" />
        </div>
        <div className="lg:hidden">
          <CartModal color="text-black" />
        </div>
      </div>
    </nav>
  );
}
