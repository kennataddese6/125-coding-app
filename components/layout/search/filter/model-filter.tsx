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
  const { createModelQuery, createTypeQuery, deleteModelQuery, deleteTypeQuery } = useChangeUrl();
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Make/Model</AccordionTrigger>
        <AccordionContent>
          <>
            <div className="my-2 flex items-center gap-3">
              <input
                type="checkbox"
                id="model"
                checked={urlSearch.some((a) => a === 'audi')}
                onChange={(e) =>
                  e.target.checked ? createModelQuery('audi') : deleteModelQuery('audi')
                }
              />
              <label htmlFor="model">Audi</label>
            </div>
            <div className="my-2 flex items-center gap-3">
              <input
                type="checkbox"
                id="model"
                checked={urlSearch.some((a) => a === 'volswagen')}
                onChange={(e) =>
                  e.target.checked ? createModelQuery('volswagen') : deleteModelQuery('volswagen')
                }
              />
              <label htmlFor="model">Volswagen</label>
            </div>
            <div className="my-2 flex items-center gap-3">
              <input
                type="checkbox"
                id="model"
                checked={urlSearch.some((a) => a === 'seat')}
                onChange={(e) =>
                  e.target.checked ? createModelQuery('seat') : deleteModelQuery('seat')
                }
              />
              <label htmlFor="model">Seat</label>
            </div>
            <div className="my-2 flex items-center gap-3">
              <input
                type="checkbox"
                id="model"
                checked={urlSearch.some((a) => a === 'skoda')}
                onChange={(e) =>
                  e.target.checked ? createModelQuery('skoda') : deleteModelQuery('skoda')
                }
              />
              <label htmlFor="model">Skoda</label>
            </div>
            <div className="my-2 flex items-center gap-3">
              <input
                type="checkbox"
                id="model"
                checked={urlSearch.some((a) => a === 'lambo')}
                onChange={(e) =>
                  e.target.checked ? createModelQuery('lambo') : deleteModelQuery('lambo')
                }
              />
              <label htmlFor="model">Lamborghini</label>
            </div>
            <div className="my-2 flex items-center gap-3">
              <input
                type="checkbox"
                id="model"
                checked={urlSearch.some((a) => a === 'bmw')}
                onChange={(e) =>
                  e.target.checked ? createModelQuery('bmw') : deleteModelQuery('bmw')
                }
              />
              <label htmlFor="model">BMW</label>
            </div>
            <div className="my-2 flex items-center gap-3">
              <input
                type="checkbox"
                id="model"
                checked={urlSearch.some((a) => a === 'mini')}
                onChange={(e) =>
                  e.target.checked ? createModelQuery('mini') : deleteModelQuery('mini')
                }
              />
              <label htmlFor="model">Mini</label>
            </div>
            <div className="my-2 flex items-center gap-3">
              <input
                type="checkbox"
                id="model"
                checked={urlSearch.some((a) => a === 'mercedes')}
                onChange={(e) =>
                  e.target.checked ? createModelQuery('mercedes') : deleteModelQuery('mercedes')
                }
              />
              <label htmlFor="model">Mercedes</label>
            </div>
            <div className="my-2 flex items-center gap-3">
              <input
                type="checkbox"
                id="model"
                checked={urlSearch.some((a) => a === 'ford')}
                onChange={(e) =>
                  e.target.checked ? createModelQuery('ford') : deleteModelQuery('ford')
                }
              />
              <label htmlFor="model">Ford</label>
            </div>
            <div className="my-2 flex items-center gap-3">
              <input
                type="checkbox"
                id="model"
                checked={urlSearch.some((a) => a === 'mazda')}
                onChange={(e) =>
                  e.target.checked ? createModelQuery('mazda') : deleteModelQuery('mazda')
                }
              />
              <label htmlFor="model">Mazda</label>
            </div>
            <div className="my-2 flex items-center gap-3">
              <input
                type="checkbox"
                id="model"
                checked={urlSearch.some((a) => a === 'porshe')}
                onChange={(e) =>
                  e.target.checked ? createModelQuery('porshe') : deleteModelQuery('porshe')
                }
              />
              <label htmlFor="model">Porshe</label>
            </div>
            <div className="my-2 flex items-center gap-3">
              <input
                type="checkbox"
                id="model"
                checked={urlSearch.some((a) => a === 'land-rover')}
                onChange={(e) =>
                  e.target.checked ? createModelQuery('land-rover') : deleteModelQuery('land-rover')
                }
              />
              <label htmlFor="model">Land Rover</label>
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
              id="model"
              checked={urlTypeSearch.some((a) => a === 'apple-carplay')}
              onChange={(e) =>
                e.target.checked
                  ? createTypeQuery('apple-carplay')
                  : deleteTypeQuery('apple-carplay')
              }
            />
            <label htmlFor="model">Apple CarPlay</label>
          </div>
          <div className="my-2 flex items-center gap-3">
            <input
              type="checkbox"
              id="model"
              checked={urlTypeSearch.some((a) => a === 'reverse-cameras')}
              onChange={(e) =>
                e.target.checked
                  ? createTypeQuery('reverse-cameras')
                  : deleteTypeQuery('reverse-cameras')
              }
            />
            <label htmlFor="model">Reverse Cameras</label>
          </div>
          <div className="my-2 flex items-center gap-3">
            <input
              type="checkbox"
              id="model"
              checked={urlTypeSearch.some((a) => a === 'vehicle-security')}
              onChange={(e) =>
                e.target.checked
                  ? createTypeQuery('vehicle-security')
                  : deleteTypeQuery('vehicle-security')
              }
            />
            <label htmlFor="model">Vehicle Security</label>
          </div>
          <div className="my-2 flex items-center gap-3">
            <input
              type="checkbox"
              id="model"
              checked={urlTypeSearch.some((a) => a === 'dash-security')}
              onChange={(e) =>
                e.target.checked
                  ? createTypeQuery('dash-security')
                  : deleteTypeQuery('dash-security')
              }
            />
            <label htmlFor="model">Dash Camera</label>
          </div>
          <div className="my-2 flex items-center gap-3">
            <input
              type="checkbox"
              id="model"
              checked={urlTypeSearch.some((a) => a === 'entertainment')}
              onChange={(e) =>
                e.target.checked
                  ? createTypeQuery('entertainment')
                  : deleteTypeQuery('entertainment')
              }
            />
            <label htmlFor="model">Entertainment upgrades</label>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Price</AccordionTrigger>
        <AccordionContent>
          <div className="my-2 flex items-center gap-3">
            <input type="checkbox" id="model" />
            <label htmlFor="model">Less than 100$</label>
          </div>
          <div className="my-2 flex items-center gap-3">
            <input type="checkbox" id="model" />
            <label htmlFor="model">100$ up to 200$</label>
          </div>
          <div className="my-2 flex items-center gap-3">
            <input type="checkbox" id="model" />
            <label htmlFor="model">200$ up to 300$</label>
          </div>
          <div className="my-2 flex items-center gap-3">
            <input type="checkbox" id="model" />
            <label htmlFor="model">400$ up to 500$</label>
          </div>
          <div className="my-2 flex items-center gap-3">
            <input type="checkbox" id="model" />
            <label htmlFor="model">500$ up to 600$</label>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
