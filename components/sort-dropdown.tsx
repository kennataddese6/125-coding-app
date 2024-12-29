'use client';

import useChangeUrl from 'lib/change-url';

export default function SortDropDown() {
  const { createSortQuery, deleteSortQuery } = useChangeUrl();
  return (
    <div>
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
  );
}
