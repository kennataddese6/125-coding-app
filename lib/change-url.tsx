'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useChangeUrl() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createModelQuery = (query: string) => {
    const params = new URLSearchParams(searchParams);
    const existingModels = params.getAll('model');

    if (query && !existingModels.includes(query)) {
      params.append('model', query);
    }

    replace(`${pathname}?${params.toString()}`);
  };
  const createTypeQuery = (query: string) => {
    const params = new URLSearchParams(searchParams);
    const existingModels = params.getAll('type');

    if (query && !existingModels.includes(query)) {
      params.append('type', query);
    }

    replace(`${pathname}?${params.toString()}`);
  };
  const createPriceQuery = (query: string) => {
    const params = new URLSearchParams(searchParams);
    const existingModels = params.getAll('price');

    if (query && !existingModels.includes(query)) {
      params.append('price', query);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const deleteModelQuery = (query: string) => {
    const params = new URLSearchParams(searchParams);
    const existingModels = params.getAll('model');
    const newModels = existingModels.filter((model) => model !== query);
    params.delete('model');
    newModels.forEach((model) => params.append('model', model));

    replace(`${pathname}?${params.toString()}`);
  };
  const deleteTypeQuery = (query: string) => {
    const params = new URLSearchParams(searchParams);
    const existingModels = params.getAll('type');
    const newModels = existingModels.filter((model) => model !== query);
    params.delete('type');
    newModels.forEach((model) => params.append('type', model));

    replace(`${pathname}?${params.toString()}`);
  };
  const deletePriceQuery = (query: string) => {
    const params = new URLSearchParams(searchParams);
    const existingModels = params.getAll('price');
    const newModels = existingModels.filter((model) => model !== query);
    params.delete('price');
    newModels.forEach((model) => params.append('price', model));

    replace(`${pathname}?${params.toString()}`);
  };

  return {
    createModelQuery,
    createTypeQuery,
    createPriceQuery,
    deleteModelQuery,
    deleteTypeQuery,
    deletePriceQuery
  };
}
