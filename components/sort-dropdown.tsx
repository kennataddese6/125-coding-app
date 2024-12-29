'use client';

import useChangeUrl from 'lib/change-url';
import { CiFilter } from 'react-icons/ci';
export default function SortDropDown() {
  const { createSortQuery, deleteSortQuery } = useChangeUrl();
  return (
    <>
      <div className="rounded-3xl border border-stone-400 px-4 py-2 font-bold lg:hidden">
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
