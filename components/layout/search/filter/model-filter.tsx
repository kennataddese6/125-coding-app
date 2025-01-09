'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import useChangeUrl from 'lib/change-url';
import { useSearchParams } from 'next/navigation';

export default function ProductFilter() {
  const searchParams = useSearchParams();
  const urlSearch = searchParams.getAll('model') || '';
  const urlTypeSearch = searchParams.getAll('type') || '';
  const urlPriceSearch = searchParams.getAll('price') || '';
  const {
    createModelQuery,
    createTypeQuery,
    createPriceQuery,
    deleteModelQuery,
    deleteTypeQuery,
    deletePriceQuery
  } = useChangeUrl();
  return (
    <Accordion type="multiple" className="w-full">
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
                  e.target.checked ? createModelQuery('volswagen') : deleteModelQuery('volswagen')
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
                  e.target.checked ? createModelQuery('skoda') : deleteModelQuery('skoda')
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
                  e.target.checked ? createModelQuery('lambo') : deleteModelQuery('lambo')
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
                  e.target.checked ? createModelQuery('mercedes') : deleteModelQuery('mercedes')
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
                  e.target.checked ? createModelQuery('mazda') : deleteModelQuery('mazda')
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
                  e.target.checked ? createModelQuery('porshe') : deleteModelQuery('porshe')
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
                  e.target.checked ? createModelQuery('land-rover') : deleteModelQuery('land-rover')
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
              id="0-500"
              checked={urlPriceSearch.some((a) => a === '0-500')}
              onChange={(e) =>
                e.target.checked ? createPriceQuery('0-500') : deletePriceQuery('0-500')
              }
            />
            <label htmlFor="0-500">0 to 500$</label>
          </div>
          <div className="my-2 flex items-center gap-3">
            <input
              type="checkbox"
              id="500-1000"
              checked={urlPriceSearch.some((a) => a === '500-1000')}
              onChange={(e) =>
                e.target.checked ? createPriceQuery('500-1000') : deletePriceQuery('500-1000')
              }
            />
            <label htmlFor="500-1000">500$ up to 1000$</label>
          </div>
          <div className="my-2 flex items-center gap-3">
            <input
              type="checkbox"
              id="1000-1500"
              checked={urlPriceSearch.some((a) => a === '1000-1500')}
              onChange={(e) =>
                e.target.checked ? createPriceQuery('1000-1500') : deletePriceQuery('1000-1500')
              }
            />
            <label htmlFor="1000-1500">1000$ up to 1500$</label>
          </div>
          <div className="my-2 flex items-center gap-3">
            <input
              type="checkbox"
              id="1500-2000"
              checked={urlPriceSearch.some((a) => a === '1500-2000')}
              onChange={(e) =>
                e.target.checked ? createPriceQuery('1500-2000') : deletePriceQuery('1500-2000')
              }
            />
            <label htmlFor="1500-2000">1500$ up to 2000$</label>
          </div>
          <div className="my-2 flex items-center gap-3">
            <input
              type="checkbox"
              id="2000-2500"
              checked={urlPriceSearch.some((a) => a === '2000-2500')}
              onChange={(e) =>
                e.target.checked ? createPriceQuery('2000-2500') : deletePriceQuery('2000-2500')
              }
            />
            <label htmlFor="2000-2500">2000$ up to 2500$</label>
          </div>
          <div className="my-2 flex items-center gap-3">
            <input
              type="checkbox"
              id="2500-3000"
              checked={urlPriceSearch.some((a) => a === '2500-3000')}
              onChange={(e) =>
                e.target.checked ? createPriceQuery('2500-3000') : deletePriceQuery('2500-3000')
              }
            />
            <label htmlFor="2500-3000">2500$ up to 3000$</label>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
