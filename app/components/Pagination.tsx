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
    <div className="flex gap-x-[5px] max-sm:justify-center">
      {totalPage < 5
        ? pageArr.map((item, i) => (
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
          ))
        : pageArr.map((item, i) => {
            // page가 4이상일때 index가 1인 자리에 화살표 넣기
            if (i === 1 && page >= 5) {
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(page - 1)}
                  className="min-w-[42px] w-[56px] h-[42px] rounded-[10px] bg-[url('/images/leftarrow.svg')] bg-no-repeat bg-center hover:bg-[#e7e7e8] max-sm:min-w-[34px] max-sm:h-[34px] max-sm:mb-[8px]"
                  disabled={page === 1}
                ></button>
              );
              // page가 totalPage에서 4를 뺀 것보다 이상일때 index가 1인 자리에 화살표 넣기
            } else if (i === 1 && page >= totalPage - 4) {
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(page - 1)}
                  className="min-w-[42px] w-[56px] h-[42px] rounded-[10px] bg-[url('/images/leftarrow.svg')] bg-no-repeat bg-center hover:bg-[#e7e7e8] max-sm:min-w-[34px] max-sm:h-[34px] max-sm:mb-[8px]"
                  disabled={page === 1}
                ></button>
              );
              // page가 4이상이고 page가 totalPage에서 3뺀 것보다 작을때 index가 5인 자리에 화살표 넣기
            } else if (i === 5 && page >= 5 && page < totalPage - 3) {
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(page + 1)}
                  className="min-w-[42px] w-[56px] h-[42px] rounded-[10px] bg-[url('/images/rightarrow.svg')] bg-no-repeat bg-center hover:bg-[#e7e7e8] max-sm:min-w-[34px] max-sm:h-[34px] max-sm:mb-[8px]"
                  disabled={page === totalPage}
                ></button>
              );
              // page가 4이하일때 index가 4인 자리에 화살표 넣기
            } else if (i === 4 && page < 5) {
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
