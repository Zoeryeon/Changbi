// app/ui/Pagination.tsx
import { useEffect, useState } from 'react';
import { generatePagination } from '@/app/_lib/utils';

export default function Pagination({
  page,
  setPage,
  totalPage,
}: {
  totalPage: number;
  setPage: (num: number) => void;
  page: number;
}) {
  const [pageArr, setPageArr] = useState<(number | string)[]>([]);

  useEffect(() => {
    const arr = generatePagination(page, totalPage);
    setPageArr(arr);
  }, [page, totalPage]);

  return (
    <div className="flex gap-x-[5px]">
      {pageArr.map((item, i) => {
        if (i === 1 && page >= 4) {
          return (
            <button
              key={i}
              type="button"
              onClick={() => setPage(page - 1)}
              className="min-w-[42px] w-[56px] h-[42px] rounded-[10px] bg-[url('/images/leftarrow.svg')] bg-no-repeat bg-center hover:bg-[#e7e7e8] max-sm:min-w-[34px] max-sm:h-[34px] max-sm:mb-[8px]"
              disabled={page === 1}
            ></button>
          );
        } else if (i === 1 && page >= 11) {
          return (
            <button
              key={i}
              type="button"
              onClick={() => setPage(page - 1)}
              className="min-w-[42px] w-[56px] h-[42px] rounded-[10px] bg-[url('/images/leftarrow.svg')] bg-no-repeat bg-center hover:bg-[#e7e7e8] max-sm:min-w-[34px] max-sm:h-[34px] max-sm:mb-[8px]"
              disabled={page === 1}
            ></button>
          );
        } else if (i === 5 && page >= 4 && page < 11) {
          return (
            <button
              key={i}
              type="button"
              onClick={() => setPage(page + 1)}
              className="min-w-[42px] w-[56px] h-[42px] rounded-[10px] bg-[url('/images/rightarrow.svg')] bg-no-repeat bg-center hover:bg-[#e7e7e8] max-sm:min-w-[34px] max-sm:h-[34px] max-sm:mb-[8px]"
              disabled={page === totalPage}
            ></button>
          );
        } else if (i === 4 && page < 4) {
          return (
            <button
              key={i}
              type="button"
              onClick={() => setPage(page + 1)}
              className="min-w-[42px] w-[56px] h-[42px] rounded-[10px] bg-[url('/images/rightarrow.svg')] bg-no-repeat bg-center hover:bg-[#e7e7e8] max-sm:min-w-[34px] max-sm:h-[34px] max-sm:mb-[8px]"
              disabled={page === totalPage}
            ></button>
          );
        } else {
          return (
            <button
              type="button"
              key={i}
              onClick={() => setPage(item as number)}
              className={`${
                page === item
                  ? 'bg-[#2c3541] text-white'
                  : 'bg-point1 text-gray-500 hover:bg-[#e7e7e8]'
              } min-w-[42px] h-[42px] rounded-[10px] leading-[42px] px-[11px] text-center mb-[12px] max-sm:min-w-[34px] max-sm:h-[34px] max-sm:leading-[34px] max-sm:text-[14px] max-sm:mb-[8px]`}
            >
              {item}
            </button>
          );
        }
      })}
    </div>
  );
}
