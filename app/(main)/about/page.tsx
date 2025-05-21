//app /(main) /about /page.tsx
'use client';

import History from '@/app/components/about/History';
import Report from '@/app/components/about/Report';
import Year from '@/app/components/about/Year';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const yearList = [
  '2020s',
  '2010s',
  '2000s',
  '1990s',
  '1980s',
  '1970s',
  '1960s',
];

export default function page() {
  const [year, setYear] = useState('2020s');
  const [history, setHistory] = useState('2020s');

  const { isPending, data, isError, error } = useQuery({
    queryKey: ['about'],
    queryFn: () => {
      return fetch('http://localhost:9090/about').then((res) => res.json());
    },
  });
  const yearData = data?.year ?? null;
  const filteredYearData = yearData?.filter((item: { year: number }) =>
    item.year.toString().startsWith(year.slice(0, 3))
  );

  const historyData = data?.history ?? null;
  const filteredHistoryData = historyData?.filter((item: { year: number }) =>
    item.year.toString().startsWith(history.slice(0, 3))
  );

  function handleYear(selectedYear: string) {
    setYear(selectedYear);
  }
  function handleHistory(selectedHistory: string) {
    setHistory(selectedHistory);
  }

  return (
    <main>
      <div className="flex flex-col h-[870px] bg-[url('/images/about-bg.png')] bg-no-repeat bg-center bg-cover text-center justify-center gap-y-[10px] mt-[80px] max-md:h-[calc(100vh-200px)] max-sm:bg-[url('/images/about-bg-mobile.png')] max-sm:pt-[60px] max-sm:mt-0">
        <h2 className="text-[40px] tracking-tight leading-[60px] font-bold max-sm:text-[28px] max-sm:leading-[40px] max-sm:tracking-tight max-sm:break-keep">
          한결같되
          <br />
          날로 새롭게
        </h2>
        <p className="text-[20px] leading-[43px] tracking-tight max-sm:text-[16px] max-sm:leading-[26px] max-sm:tracking-normal">
          독자와 함께 더 나은 세상을
        </p>
      </div>
      <div>
        <Report />
      </div>
      <div>
        <Year
          handleYear={handleYear}
          yearList={yearList}
          year={year}
          filteredYearData={filteredYearData}
          isPending={isPending}
          isError={isError}
          error={error}
        />
      </div>
      <div>
        <History
          handleHistory={handleHistory}
          yearList={yearList}
          history={history}
          filteredHistoryData={filteredHistoryData}
        />
      </div>
    </main>
  );
}
