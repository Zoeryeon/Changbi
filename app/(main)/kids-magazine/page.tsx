//app /(main) /kids-magazine /page.tsx
'use client';

import Contents from '@/app/components/kids-magazine/Contents';
import KidsMagazineList from '@/app/components/kids-magazine/KidsMagazineList';
import MainImg from '@/app/components/kids-magazine/MainImg';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function page() {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ['book-list'],
    queryFn: () => {
      return fetch('http://localhost:9090/kids-magazine').then((res) =>
        res.json()
      );
    },
  });

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:py-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <div>
          <MainImg />
        </div>
        <div>
          <Contents />
        </div>
        <div>
          <KidsMagazineList
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
