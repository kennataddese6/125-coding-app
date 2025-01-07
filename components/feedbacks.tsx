'use client';
import { motion } from 'motion/react';
import { FaStar } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
export default function FeedBack() {
  return (
    <div className="bg-white p-4 text-black lg:mx-8">
      <div className="mx-auto mt-4 p-4 text-black lg:w-4/5">
        <motion.h2
          className="text-center text-2xl font-bold lg:text-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
        >
          What our customers say
        </motion.h2>
        <div className="my-10 flex flex-wrap justify-between gap-4">
          <motion.div
            className="max-w-72"
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          >
            <h3 className="my-1 inline font-semibold">Julian Cooke</h3>
            <MdVerified className="ml-1 mr-1 inline" color="blue" />
            <br />
            <FaStar className="inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <p className="py-1">
              Buzzing to get rid of buzzing on my sprinter, fantastic service could highly recomm...
            </p>
          </motion.div>

          <motion.div
            className="max-w-72"
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
          >
            <h3 className="my-1 inline font-semibold">Will Naylor</h3>
            <MdVerified className="ml-1 mr-1 inline" color="blue" />
            <br />
            <FaStar className="inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="grey" />

            <p className="py-2">
              I drive cutting out in my 4 series BMW took it there and was sorted within the hour
              nice...
            </p>
          </motion.div>
          <motion.div
            className="max-w-72"
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
          >
            <h3 className="my-1 inline font-semibold">Adam Jasat</h3>
            <MdVerified className="ml-1 mr-1 inline" color="blue" />
            <br />
            <FaStar className="inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <p className="py-1">
              Fantastic customer service provided by Aadil at 125 Coding. I had a dash cam filtered
              in my vw Golf which was{' '}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
