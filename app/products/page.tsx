import Grid from 'components/grid';
import { BlackNavbar } from 'components/layout/navbar/black-navbar';
import Search, { SearchSkeleton } from 'components/layout/navbar/search';
import ProductGridItems from 'components/layout/product-grid-items';
import ProductFilter from 'components/layout/search/filter/model-filter';
import { defaultSort, sorting } from 'lib/constants';
import { getCollectionProducts, getProducts } from 'lib/shopify';
import { Product } from 'lib/shopify/types';
import { Suspense } from 'react';

export default async function Page(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined } & { model: string }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  let products: any[] = [];

  const getProductPromises = (paramArray: string[], paramName: string) => {
    return paramArray.map(async (item) => {
      return await getCollectionProducts({
        collection: item,
        sortKey,
        reverse
      });
    });
  };

  let modelResults: Product[] = [];
  let typeResults: Product[] = [];
  let priceResults: Product[] = [];

  // Fetch products based on models
  if (Array.isArray(searchParams?.model)) {
    const productPromises = getProductPromises(searchParams.model, 'model');
    const results = await Promise.all(productPromises);
    modelResults = results.flat();
  } else if (searchParams?.model) {
    modelResults = await getCollectionProducts({
      collection: searchParams.model,
      sortKey,
      reverse
    });
  }

  // Fetch products based on types
  if (Array.isArray(searchParams?.type)) {
    const productTypePromises = getProductPromises(searchParams.type, 'type');
    const results = await Promise.all(productTypePromises);
    typeResults = results.flat();
  } else if (searchParams?.type) {
    typeResults = await getCollectionProducts({
      collection: searchParams.type,
      sortKey,
      reverse
    });
  }

  // Fetch products based on price
  if (Array.isArray(searchParams?.price)) {
    const productPricePromises = getProductPromises(searchParams.price, 'price');
    const results = await Promise.all(productPricePromises);
    priceResults = results.flat();
  } else if (searchParams?.price) {
    priceResults = await getCollectionProducts({
      collection: searchParams.price,
      sortKey,
      reverse
    });
  }

  // If no specific filters are applied, fetch all products
  if (!searchParams?.model && !searchParams?.type && !searchParams?.price) {
    products = await getProducts({ sortKey, reverse, query: searchValue });
  } else {
    // Combine results ensuring all conditions are met
    const combinedResults = modelResults.concat(typeResults, priceResults);

    products = combinedResults.filter(
      (product, index, self) =>
        self.findIndex((p) => p.id === product.id) === index &&
        (modelResults.length === 0 || modelResults.some((m) => m.id === product.id)) &&
        (typeResults.length === 0 || typeResults.some((t) => t.id === product.id)) &&
        (priceResults.length === 0 || priceResults.some((p) => p.id === product.id))
    );
  }
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
      <BlackNavbar />
      <div className="mx-2 text-black lg:px-32">
        <h1 className="my-4 py-5 text-3xl font-bold">Products</h1>
        <div className="mb-4 flex justify-between py-5">
          <div>
            <label className="mr-3 font-bold">Sort by</label>
            <select>
              <option>Relevance</option>
              <option>Trending</option>
              <option>Latest arrivals</option>
              <option>Price: Low to high</option>
              <option>Price: High to low</option>
            </select>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
        </div>
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
        ) : (
          <div className="flex">
            <div className="hidden pr-8 lg:flex lg:w-1/4">
              <ProductFilter />
            </div>
            <div className="w-full lg:w-3/4">
              <h1 className="mx-5">No product found with the following criteria</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
