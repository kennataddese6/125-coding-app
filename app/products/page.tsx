import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import Grid from 'components/grid';
import { BlackNavbar } from 'components/layout/navbar/black-navbar';
import ProductGridItems from 'components/layout/product-grid-items';
import ModelFilter from 'components/layout/search/filter/model-filter';
import { defaultSort, sorting } from 'lib/constants';
import { getCollectionProducts, getProducts } from 'lib/shopify';

export default async function Page(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined } & { model: string }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  let products;
  if (searchParams?.model) {
    products = await getCollectionProducts({
      collection: searchParams.model,
      sortKey,
      reverse
    });
  } else {
    products = await getProducts({ sortKey, reverse, query: searchValue });
  }

  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
      <BlackNavbar />
      <div className="mx-2 text-black lg:px-32">
        <h1 className="my-4 py-5 text-3xl font-bold">Products</h1>
        {searchValue ? (
          <p className="mb-4">
            {products.length === 0
              ? 'There are no products that match '
              : `Showing ${products.length} ${resultsText} for `}
            <span className="font-bold">&quot;{searchValue}&quot;</span>
          </p>
        ) : null}
        {products.length > 0 ? (
          <div className="flex">
            <div className="hidden pr-8 lg:flex lg:w-1/4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Make/Model</AccordionTrigger>
                  <AccordionContent>
                    <ModelFilter />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Product type</AccordionTrigger>
                  <AccordionContent>
                    <div className="my-2 flex items-center gap-3">
                      <input type="checkbox" id="model" />
                      <label htmlFor="model">Apple CarPlay</label>
                    </div>
                    <div className="my-2 flex items-center gap-3">
                      <input type="checkbox" id="model" />
                      <label htmlFor="model">Reverse Cameras</label>
                    </div>
                    <div className="my-2 flex items-center gap-3">
                      <input type="checkbox" id="model" />
                      <label htmlFor="model">Vehicle Security</label>
                    </div>
                    <div className="my-2 flex items-center gap-3">
                      <input type="checkbox" id="model" />
                      <label htmlFor="model">Dash Camera</label>
                    </div>
                    <div className="my-2 flex items-center gap-3">
                      <input type="checkbox" id="model" />
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
            </div>
            <div className="w-full lg:w-3/4">
              <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <ProductGridItems products={products} />
              </Grid>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
