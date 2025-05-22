//app /(main) /recruit /page.tsx
'use client';

import Information from '@/app/components/recruit/Information';
import { useQuery } from '@tanstack/react-query';

export default function page() {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ['community'],
    queryFn: () => {
      return fetch('http://localhost:9090/recruit').then((res) => res.json());
    },
  });

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:py-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <h2 className="text-[56px] font-bold tracking-tight leading-[88px] max-sm:text-[32px] max-sm:leading-[46px] max-sm:break-keep">
          채용
        </h2>
        <div>
          <Information
            isPending={isPending}
            isError={isError}
            error={error}
            data={data}
          />
        </div>
      </div>
    </main>
  );
}
