'use client';
import useChangeUrl from 'lib/change-url';
import { useSearchParams } from 'next/navigation';

export default function ModelFilter() {
  const searchParams = useSearchParams();
  const urlSearch = searchParams.getAll('model') || '';
  console.log(urlSearch, 'url search');
  const { createModelQuery, deleteModelQuery } = useChangeUrl();
  return (
    <>
      <div className="my-2 flex items-center gap-3">
        <input
          type="checkbox"
          id="model"
          checked={urlSearch.some((a) => a === 'audi')}
          onChange={(e) => (e.target.checked ? createModelQuery('audi') : deleteModelQuery('audi'))}
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
          onChange={(e) => (e.target.checked ? createModelQuery('seat') : deleteModelQuery('seat'))}
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
        <input type="checkbox" id="model" />
        <label htmlFor="model">BMW</label>
      </div>
      <div className="my-2 flex items-center gap-3">
        <input type="checkbox" id="model" />
        <label htmlFor="model">Mini</label>
      </div>
      <div className="my-2 flex items-center gap-3">
        <input type="checkbox" id="model" />
        <label htmlFor="model">Mercedes</label>
      </div>
      <div className="my-2 flex items-center gap-3">
        <input type="checkbox" id="model" />
        <label htmlFor="model">Ford</label>
      </div>
      <div className="my-2 flex items-center gap-3">
        <input type="checkbox" id="model" />
        <label htmlFor="model">Mazda</label>
      </div>
      <div className="my-2 flex items-center gap-3">
        <input type="checkbox" id="model" />
        <label htmlFor="model">Porshe</label>
      </div>
      <div className="my-2 flex items-center gap-3">
        <input type="checkbox" id="model" />
        <label htmlFor="model">Land Rover</label>
      </div>
    </>
  );
}
