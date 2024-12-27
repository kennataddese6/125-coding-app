'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useChangeUrl() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createModelQuery = (query: string) => {
    const params = new URLSearchParams(searchParams);
    const existingModels = params.getAll('model');

    if (query) {
      if (!existingModels.includes(query)) {
        params.append('model', query);
      } else {
        const newModels = existingModels.filter((model) => model !== query);
        params.delete('model');
        newModels.forEach((model) => params.append('model', model));
      }
    } else {
      params.delete('model');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return {
    createModelQuery
  };
}
