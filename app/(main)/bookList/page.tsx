//app /(main) /bookList /page.tsx
'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { use, useEffect, useRef, useState } from 'react';
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

export default function BookList() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const router = useRouter();

  const { isPending, data, isError, error } = useQuery<{
    result: BookList[];
    total: number;
  }>({
    queryKey: ['bookList', page],
    queryFn: () => {
      return fetch(`http://localhost:9090/bookList?page=${page}`).then((res) =>
        res.json()
      );
    },
  });
  console.log(data);

  // data 변경시 totalPage 계산
  useEffect(() => {
    if (data) {
      setTotalPage(Math.ceil(data?.total / 5) || 0);
    }
  }, [data]);

  // 페이지 변경시 쿼리 파라미터 추가
  useEffect(() => {
    router.push(`?page=${page}`);
  }, [page]);

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px]">
      <div className="max-w-[1770px] mx-auto px-[60px]">
        <div className="flex items-baseline justify-between flex-wrap">
          <h2 className="text-[56px] font-bold tracking-tight leading-[88px]">
            창비의 책
          </h2>
          <span className="inline-block text-[14px] leading-[28px]">
            {page} / {totalPage} 페이지
          </span>
        </div>
        <div className="relative">
          <div className="flex flex-wrap gap-x-[12px] gap-y-[6px] mt-[24px] top-0 left-0 max-sm:gap-x-[10px]">
            <Link
              href="/bookList"
              className="bg-[#2c3338] text-white w-auto px-[25px] block h-[42px] leading-[42px] rounded-[10px] shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px]"
            >
              전체
            </Link>
            <Link
              href="/bookList?category=문학"
              className="bg-[#f2f3f4] text-gray-500 w-auto pr-[25px] pl-[25px] block h-[42px] leading-[42px] rounded-[10px] shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px]"
            >
              문학
            </Link>
            <Link
              href="/bookList?category=인문교양"
              className="bg-[#f2f3f4] text-gray-500 w-auto pr-[25px] pl-[25px] block h-[42px] leading-[42px] rounded-[10px] shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px]"
            >
              인문교양
            </Link>
            <Link
              href="/bookList?category=어린이"
              className="bg-[#f2f3f4] text-gray-500 w-auto pr-[25px] pl-[25px] block h-[42px] leading-[42px] rounded-[10px] shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px]"
            >
              어린이
            </Link>
            <Link
              href="/bookList?category=청소년"
              className="bg-[#f2f3f4] text-gray-500 w-auto pr-[25px] pl-[25px] block h-[42px] leading-[42px] rounded-[10px] shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px]"
            >
              청소년
            </Link>
            <Link
              href="/bookList?category=그림책"
              className="bg-[#f2f3f4] text-gray-500 w-auto pr-[25px] pl-[25px] block h-[42px] leading-[42px] rounded-[10px] shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px]"
            >
              그림책
            </Link>
            <Link
              href="/bookList?category=만화"
              className="bg-[#f2f3f4] text-gray-500 w-auto pr-[25px] pl-[25px] block h-[42px] leading-[42px] rounded-[10px] shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px]"
            >
              만화
            </Link>
            <Link
              href="/bookList?category=교사 및 부모"
              className="bg-[#f2f3f4] text-gray-500 w-auto pr-[25px] pl-[25px] block h-[42px] leading-[42px] rounded-[10px] shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px]"
            >
              교사 및 부모
            </Link>
            <Link
              href="/bookList?category=정기간행물"
              className="bg-[#f2f3f4] text-gray-500 w-auto pr-[25px] pl-[25px] block h-[42px] leading-[42px] rounded-[10px] shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px]"
            >
              정기간행물
            </Link>
            <Link
              href="/bookList?category=토닥스토리"
              className="bg-[#f2f3f4] text-gray-500 w-auto pr-[25px] pl-[25px] block h-[42px] leading-[42px] rounded-[10px] shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px]"
            >
              토닥스토리
            </Link>
          </div>
          {isPending && <p>Loading...</p>}
          {isError && <p>{error.message}</p>}
          {data && data?.result?.length > 0 && (
            <ul className="pt-[102px] items-baseline grid grid-cols-5 gap-y-[70px] gap-x-[20px] max-md:grid-cols-3 max-sm:grid-cols-2">
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
