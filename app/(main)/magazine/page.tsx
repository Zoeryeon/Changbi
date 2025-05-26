//app /(main) /magazine /page.tsx
'use client';

import Homepage from '@/app/components/magazine/Homepage';
import MagazineList from '@/app/components/magazine/MagazineList';
import MainImg from '@/app/components/magazine/MainImg';
import { useQuery } from '@tanstack/react-query';

export default function page() {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ['book-list'],
    queryFn: () => {
      return fetch('http://localhost:9090/magazine').then((res) => res.json());
    },
  });

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:py-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <div>
          <MainImg />
        </div>
        <div>
          <Homepage />
        </div>
        <div>
          <MagazineList
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
