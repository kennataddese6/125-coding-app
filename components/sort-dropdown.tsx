'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import useChangeUrl from 'lib/change-url';
import { useSearchParams } from 'next/navigation';
import { Fragment, useState } from 'react';
import { CiFilter } from 'react-icons/ci';

export default function SortDropDown() {
  const {
    createModelQuery,
    createTypeQuery,
    createPriceQuery,
    deleteModelQuery,
    deleteTypeQuery,
    createSortQuery,
    deleteSortQuery,
    deletePriceQuery
  } = useChangeUrl();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);
  const searchParams = useSearchParams();
  const urlSearch = searchParams.getAll('model') || '';
  const urlTypeSearch = searchParams.getAll('type') || '';
  const urlPriceSearch = searchParams.getAll('price') || '';
  return (
    <>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
              <div className="p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon className="h-6" />
                </button>
                <Accordion type="multiple" className="w-full text-black">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Make/Model</AccordionTrigger>
                    <AccordionContent>
                      <>
                        <div className="my-2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="audi"
                            checked={urlSearch.some((a) => a === 'audi')}
                            onChange={(e) =>
                              e.target.checked ? createModelQuery('audi') : deleteModelQuery('audi')
                            }
                          />
                          <label htmlFor="audi">Audi</label>
                        </div>
                        <div className="my-2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="volswagen"
                            checked={urlSearch.some((a) => a === 'volswagen')}
                            onChange={(e) =>
                              e.target.checked
                                ? createModelQuery('volswagen')
                                : deleteModelQuery('volswagen')
                            }
                          />
                          <label htmlFor="volswagen">Volswagen</label>
                        </div>
                        <div className="my-2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="seat"
                            checked={urlSearch.some((a) => a === 'seat')}
                            onChange={(e) =>
                              e.target.checked ? createModelQuery('seat') : deleteModelQuery('seat')
                            }
                          />
                          <label htmlFor="seat">Seat</label>
                        </div>
                        <div className="my-2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="skoda"
                            checked={urlSearch.some((a) => a === 'skoda')}
                            onChange={(e) =>
                              e.target.checked
                                ? createModelQuery('skoda')
                                : deleteModelQuery('skoda')
                            }
                          />
                          <label htmlFor="skoda">Skoda</label>
                        </div>
                        <div className="my-2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="lambo"
                            checked={urlSearch.some((a) => a === 'lambo')}
                            onChange={(e) =>
                              e.target.checked
                                ? createModelQuery('lambo')
                                : deleteModelQuery('lambo')
                            }
                          />
                          <label htmlFor="lambo">Lamborghini</label>
                        </div>
                        <div className="my-2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="bmw"
                            checked={urlSearch.some((a) => a === 'bmw')}
                            onChange={(e) =>
                              e.target.checked ? createModelQuery('bmw') : deleteModelQuery('bmw')
                            }
                          />
                          <label htmlFor="bmw">BMW</label>
                        </div>
                        <div className="my-2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="mini"
                            checked={urlSearch.some((a) => a === 'mini')}
                            onChange={(e) =>
                              e.target.checked ? createModelQuery('mini') : deleteModelQuery('mini')
                            }
                          />
                          <label htmlFor="mini">Mini</label>
                        </div>
                        <div className="my-2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="mercedes"
                            checked={urlSearch.some((a) => a === 'mercedes')}
                            onChange={(e) =>
                              e.target.checked
                                ? createModelQuery('mercedes')
                                : deleteModelQuery('mercedes')
                            }
                          />
                          <label htmlFor="mercedes">Mercedes</label>
                        </div>
                        <div className="my-2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="ford"
                            checked={urlSearch.some((a) => a === 'ford')}
                            onChange={(e) =>
                              e.target.checked ? createModelQuery('ford') : deleteModelQuery('ford')
                            }
                          />
                          <label htmlFor="ford">Ford</label>
                        </div>
                        <div className="my-2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="mazda"
                            checked={urlSearch.some((a) => a === 'mazda')}
                            onChange={(e) =>
                              e.target.checked
                                ? createModelQuery('mazda')
                                : deleteModelQuery('mazda')
                            }
                          />
                          <label htmlFor="mazda">Mazda</label>
                        </div>
                        <div className="my-2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="porshe"
                            checked={urlSearch.some((a) => a === 'porshe')}
                            onChange={(e) =>
                              e.target.checked
                                ? createModelQuery('porshe')
                                : deleteModelQuery('porshe')
                            }
                          />
                          <label htmlFor="porshe">Porshe</label>
                        </div>
                        <div className="my-2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="land-rover"
                            checked={urlSearch.some((a) => a === 'land-rover')}
                            onChange={(e) =>
                              e.target.checked
                                ? createModelQuery('land-rover')
                                : deleteModelQuery('land-rover')
                            }
                          />
                          <label htmlFor="land-rover">Land Rover</label>
                        </div>
                      </>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Product type</AccordionTrigger>
                    <AccordionContent>
                      <div className="my-2 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="apple-carplay"
                          checked={urlTypeSearch.some((a) => a === 'apple-carplay')}
                          onChange={(e) =>
                            e.target.checked
                              ? createTypeQuery('apple-carplay')
                              : deleteTypeQuery('apple-carplay')
                          }
                        />
                        <label htmlFor="apple-carplay">Apple CarPlay</label>
                      </div>
                      <div className="my-2 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="reverse-cameras"
                          checked={urlTypeSearch.some((a) => a === 'reverse-cameras')}
                          onChange={(e) =>
                            e.target.checked
                              ? createTypeQuery('reverse-cameras')
                              : deleteTypeQuery('reverse-cameras')
                          }
                        />
                        <label htmlFor="reverse-cameras">Reverse Cameras</label>
                      </div>
                      <div className="my-2 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="vehicle-security"
                          checked={urlTypeSearch.some((a) => a === 'vehicle-security')}
                          onChange={(e) =>
                            e.target.checked
                              ? createTypeQuery('vehicle-security')
                              : deleteTypeQuery('vehicle-security')
                          }
                        />
                        <label htmlFor="vehicle-security">Vehicle Security</label>
                      </div>
                      <div className="my-2 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="dash-security"
                          checked={urlTypeSearch.some((a) => a === 'dash-security')}
                          onChange={(e) =>
                            e.target.checked
                              ? createTypeQuery('dash-security')
                              : deleteTypeQuery('dash-security')
                          }
                        />
                        <label htmlFor="dash-security">Dash Camera</label>
                      </div>
                      <div className="my-2 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="entertainment"
                          checked={urlTypeSearch.some((a) => a === 'entertainment')}
                          onChange={(e) =>
                            e.target.checked
                              ? createTypeQuery('entertainment')
                              : deleteTypeQuery('entertainment')
                          }
                        />
                        <label htmlFor="entertainment">Entertainment upgrades</label>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Price</AccordionTrigger>
                    <AccordionContent>
                      <div className="my-2 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="0-100"
                          checked={urlPriceSearch.some((a) => a === '0-100')}
                          onChange={(e) =>
                            e.target.checked ? createPriceQuery('0-100') : deletePriceQuery('0-100')
                          }
                        />
                        <label htmlFor="0-100">Less than 100$</label>
                      </div>
                      <div className="my-2 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="100-200"
                          checked={urlPriceSearch.some((a) => a === '100-200')}
                          onChange={(e) =>
                            e.target.checked
                              ? createPriceQuery('100-200')
                              : deletePriceQuery('100-200')
                          }
                        />
                        <label htmlFor="100-200">100$ up to 200$</label>
                      </div>
                      <div className="my-2 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="200-300"
                          checked={urlPriceSearch.some((a) => a === '200-300')}
                          onChange={(e) =>
                            e.target.checked
                              ? createPriceQuery('200-300')
                              : deletePriceQuery('200-300')
                          }
                        />
                        <label htmlFor="200-300">200$ up to 300$</label>
                      </div>
                      <div className="my-2 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="300-400"
                          checked={urlPriceSearch.some((a) => a === '300-400')}
                          onChange={(e) =>
                            e.target.checked
                              ? createPriceQuery('300-400')
                              : deletePriceQuery('300-400')
                          }
                        />
                        <label htmlFor="300-400">300$ up to 400$</label>
                      </div>
                      <div className="my-2 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="400-500"
                          checked={urlPriceSearch.some((a) => a === '400-500')}
                          onChange={(e) =>
                            e.target.checked
                              ? createPriceQuery('400-500')
                              : deletePriceQuery('400-500')
                          }
                        />
                        <label htmlFor="400-500">400$ up to 500$</label>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <button
                className="mx-auto w-11/12 bg-blue-500 py-2"
                onClick={() => closeMobileMenu()}
              >
                View
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
      <div
        className="ml-12 rounded-3xl border border-stone-400 px-4 py-2 font-bold lg:hidden"
        onClick={() => openMobileMenu()}
      >
        Filter and sort <CiFilter className="inline" color="black" />
      </div>
      <div className="hidden lg:block">
        <label className="mr-3 font-bold">Sort by</label>
        <select
          onChange={(e) => {
            e.target.value ? createSortQuery(e.target.value) : deleteSortQuery(e.target.value);
          }}
        >
          <option value={''}>Relevance</option>
          <option value={'trending-desc'}>Trending</option>
          <option value={'latest-desc'}>Latest arrivals</option>
          <option value={'price-asc'}>Price: Low to high</option>
          <option value={'price-desc'}>Price: High to low</option>
        </select>
      </div>
    </>
  );
}
