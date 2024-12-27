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

  const deleteModelQuery = (query: string) => {
    const params = new URLSearchParams(searchParams);
    const existingModels = params.getAll('model');
    const newModels = existingModels.filter((model) => model !== query);
    params.delete('model');
    newModels.forEach((model) => params.append('model', model));

    replace(`${pathname}?${params.toString()}`);
  };

  return {
    createModelQuery,
    deleteModelQuery
  };
}
