import Grid from 'components/grid';
import { BlackNavbar } from 'components/layout/navbar/black-navbar';
import ProductGridItems from 'components/layout/product-grid-items';
import ProductFilter from 'components/layout/search/filter/model-filter';
import { defaultSort, sorting } from 'lib/constants';
import { getCollectionProducts, getProducts } from 'lib/shopify';

export default async function Page(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined } & { model: string }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  let products: any = [];
  if (Array.isArray(searchParams?.model)) {
    const productPromises = searchParams?.model.map(async (item) => {
      console.log('item', item);
      return await getCollectionProducts({
        collection: item,
        sortKey,
        reverse
      });
    });

    const results = await Promise.all(productPromises);
    products = results.flat(); // Flatten the array of arrays into a single array
  } else if (searchParams?.model) {
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
              <ProductFilter />
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
