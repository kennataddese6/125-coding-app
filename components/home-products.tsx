'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
export default function HomeProducts() {
  return (
    <div className="bg-white p-4 text-black lg:mx-10">
      <div className="mx-auto mt-4 p-4 text-black lg:w-4/5">
        <motion.h2
          className="text-center text-2xl font-bold lg:text-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
        >
          Featured Products
        </motion.h2>
        <div className="mt-5 flex flex-wrap justify-between gap-y-4 py-3">
          <Link
            className="relative w-full cursor-pointer rounded-2xl no-underline lg:w-52"
            href={'/product/road-angel-halo-drive-2k-front-camera'}
          >
            <motion.div
              className="relative h-32"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
              whileInView={{ opacity: 1 }}
            >
              <Image
                src={'/road.webp'}
                className="h-32 w-full rounded-2xl object-cover"
                alt="Product One"
                quality={100}
                fill
              />
            </motion.div>
            <motion.div
              className="p-3 text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            >
              <h4 className="font-bold">Road Angel</h4>
              <p>iDrive 4 iDrive 6 FLASH Update for Full Screen </p>
              <h4 className="font-bold">£229.99</h4>
            </motion.div>
          </Link>
          <Link
            className="relative w-full rounded-2xl no-underline lg:w-52"
            href={'/product/porsche-cayenne-911-macan-pcm-4-0-apple-carplay-android-auto'}
          >
            <motion.div
              className="relative h-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
            >
              <Image
                src={'/porsche.webp'}
                className="h-32 w-full rounded-2xl object-cover"
                alt="Product One"
                quality={100}
                fill
              />
            </motion.div>
            <motion.div
              className="p-3 text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
            >
              <h4 className="font-bold">Porsche Cayenne</h4>
              <p>Macan PCM 4.0 Apple CarPlay / Android Auto </p>
              <h4 className="font-bold">£199.00</h4>
            </motion.div>
          </Link>
          <Link
            className="relative w-full rounded-2xl no-underline lg:w-52"
            href={
              '/product/mini-nbtevo-idrive-4-to-idrive-6-flash-update-for-full-screen-apple-carplay'
            }
          >
            <motion.div
              className="relative h-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
            >
              <Image
                src={'/minin.webp'}
                className="h-32 w-full rounded-2xl object-cover"
                alt="Product One"
                quality={100}
                fill
              />
            </motion.div>
            <motion.div
              className="p-3 text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
            >
              <h4 className="font-bold">Mini NBTEvo</h4>
              <p>iDrive 4 iDrive 6 FLASH Update for Full Screen </p>
              <h4 className="font-bold">£350.00</h4>
            </motion.div>
          </Link>
          <Link
            className="relative w-full rounded-2xl lg:w-52"
            href={'/product/bmw-entrynav2-apple-carplay-activation'}
          >
            <motion.div
              className="relative h-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1, ease: 'easeOut' }}
            >
              <Image
                src={'/bmwe.webp'}
                className="h-32 w-full rounded-2xl object-cover"
                alt="Product One"
                quality={100}
                fill
              />
            </motion.div>
            <motion.div
              className="p-3 text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1, ease: 'easeOut' }}
            >
              <h4 className="font-bold">BMW EntryNav2</h4>
              <p>BMW EntryNav2 Apple CarPlay Activation </p>
              <h4 className="font-bold">£149.00</h4>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
