//app /(main) /bookList /page.tsx
'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Pagination from '@/app/components/Pagination';

type BookList = {
  id: number;
  title: string;
  author: string;
  image: string;
  series: string;
  date: string;
  price: string;
  category: string;
};

const cateList = [
  '전체',
  '문학',
  '인문교양',
  '어린이',
  '청소년',
  '그림책',
  '만화',
  '교사 및 부모',
  '정기간행물',
  '토닥스토리',
];

export default function BookList({
  searchParams,
}: {
  searchParams: Promise<{ category: string; page: string }>;
}) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [cate, setCate] = useState('');

  const paramsObj = use(searchParams);
  const [params] = useState(new URLSearchParams(paramsObj));
  const router = useRouter();

  const { isPending, data, isError, error } = useQuery<{
    result: BookList[];
    total: number;
  }>({
    queryKey: ['bookList', page, cate],
    queryFn: () => {
      return fetch(
        `http://localhost:9090/bookList?page=${page}&category=${cate}`
      ).then((res) => res.json());
    },
  });

  // data 변경시 totalPage 계산
  useEffect(() => {
    if (data) {
      setTotalPage(Math.ceil(data?.total / 7) || 0);
    }
  }, [data]);

  // 페이지 변경시 쿼리 파라미터 추가
  useEffect(() => {
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  }, [page]);

  function handleCate(e: React.MouseEvent<HTMLButtonElement>) {
    if ((e.target as HTMLButtonElement).innerText !== '전체') {
      params.set('category', (e.target as HTMLButtonElement).innerText);
    } else {
      params.delete('category');
    }
    router.push(`?${params.toString()}`);
    setCate((e.target as HTMLButtonElement).innerText);
    setPage(1);
  }

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <div className="flex items-baseline justify-between flex-wrap">
          <h2 className="text-[56px] font-bold tracking-tight leading-[88px] max-sm:text-[32px] max-sm:leading-[46px] max-sm:break-keep">
            창비의 책
          </h2>
          <span className="inline-block text-[14px] leading-[28px]">
            {page} / {totalPage} 페이지
          </span>
        </div>
        <div className="relative">
          <div className="flex flex-wrap gap-x-[12px] gap-y-[6px] mt-[24px] top-0 left-0 max-sm:gap-x-[10px]">
            {cateList.map((item) => (
              <button
                key={item}
                type="button"
                className={`w-auto px-[25px] block h-[42px] leading-[42px] rounded-[10px] shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px] ${
                  (cate === '' ? '전체' : cate) === item
                    ? 'bg-[#2c3338] text-white'
                    : 'bg-[#f2f3f4] text-gray-500'
                }`}
                onClick={handleCate}
              >
                {item}
              </button>
            ))}
          </div>
          {isPending && <p>Loading...</p>}
          {isError && <p>{error.message}</p>}
          {data && data?.result?.length > 0 && (
            <ul className="pt-[102px] items-baseline grid grid-cols-5 gap-y-[70px] gap-x-[20px] max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:pt-[40px]">
              {data.result.map(
                (book: {
                  id: number;
                  title: string;
                  author: string;
                  image: string;
                  series: string;
                  date: string;
                  price: string;
                  category: string;
                }) => (
                  <li key={book.id}>
                    <Link
                      href={`/BookDetail?bookid=${book.id}`}
                      className="relative group"
                    >
                      <div className="relative overflow-hidden border border-[#e6e6e6]">
                        <img
                          src={book.image}
                          alt="신간"
                          className="w-full h-auto align-baseline -mb-[5px]"
                        />
                        <div className="absolute bottom-0 p-[16px] bg-[#00001480] leading-[28px] w-full flex flex-col backdrop-blur-sm text-[#eee] text-[14px] transition-transform duration-300 translate-y-[100%] group-hover:translate-y-0 max-sm:leading-[26px]">
                          {book.series && (
                            <div>
                              <span>{book.series}</span>
                            </div>
                          )}
                          <div>
                            <span>
                              {book.date}
                              <br />
                            </span>
                            <span>{book.price}</span>
                          </div>
                        </div>
                      </div>
                      <h4 className="mt-[10px] -mb-[4px] text-[20px] leading-[34px] font-medium group-hover:underline max-sm:text-[16px] max-sm:leading-[26px]">
                        {book.title}
                      </h4>
                      <span className="text-[14px] leading-[28px]">
                        {book.author}
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
        <div className="mt-[134px]">
          {data && data?.result?.length > 0 && (
            <Pagination page={page} setPage={setPage} totalPage={totalPage} />
          )}
        </div>
      </div>
    </main>
  );
}
