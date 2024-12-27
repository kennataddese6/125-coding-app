'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useChangeUrl() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createModelQuery = (query: any) => {
    const params = new URLSearchParams(searchParams);
    console.log('quesry', searchParams);
    if (!query) {
      params.delete('model');
    } else {
      params.set('model', query.toString());
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return {
    createModelQuery
  };
}
