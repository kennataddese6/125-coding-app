import { FaStar } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

export default function FeedBack() {
  return (
    <div className="bg-white p-4 text-black lg:mx-10">
      <div className="mx-auto mt-4 p-4 text-black lg:w-4/5">
        <h2 className="text-center text-2xl font-bold lg:text-start">What our customers say</h2>
        <div className="my-10 flex flex-wrap justify-between gap-4">
          <div className="max-w-72">
            <FaStar className="inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <MdVerified className="ml-3 mr-1 inline" color="grey" />
            <span className="text-gray-600">Verified</span>
            <h3 className="mb-1 mt-3 font-semibold">Fantastic service, highly recommended</h3>
            <p className="text-sm">
              Buzzing to get rid of buzzing on my sprinter, fantastic service could highly recomm...
            </p>
            <h3 className="my-1 font-semibold">Julian Cooke</h3>
          </div>

          <div className="max-w-72">
            <FaStar className="inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="grey" />
            <MdVerified className="ml-3 mr-1 inline" color="grey" />
            <span className="text-gray-600">Verified</span>
            <h3 className="mb-1 mt-3 font-semibold">Nice Genuine service</h3>
            <p className="text-sm">
              I drive cutting out in my 4 series BMW took it there and was sorted within the hour
              nice...
            </p>
            <h3 className="my-1 font-semibold">Will Naylor</h3>
          </div>
          <div className="max-w-72">
            <FaStar className="inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <FaStar className="ml-0.5 inline" color="gold" />
            <MdVerified className="ml-3 mr-1 inline" color="grey" />
            <span className="text-gray-600">Verified</span>
            <h3 className="mb-1 mt-3 font-semibold">Fantastic Customer service</h3>
            <p className="text-sm">
              Fantastic customer service provided by Aadil at 125 Coding. I had a dash cam filtered
              in my vw Golf which was fitted{' '}
            </p>
            <h3 className="my-1 font-semibold">Adam Jasat</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
