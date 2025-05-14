//app /components /home /NewBook.tsx
'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export default function NewBook() {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ['book-list'],
    queryFn: () => {
      return fetch('http://localhost:9090/books').then((res) => res.json());
    },
  });

  // 테블릿인지 여부를 확인하는 상태
  const [isTablet, setIsTablet] = useState(false);

  // 화면 크기에 따라 테블릿 여부 설정
  useEffect(() => {
    const checkIsTablet = () => {
      setIsTablet(window.innerWidth >= 721 && window.innerWidth <= 1101);
    };

    checkIsTablet();
    window.addEventListener('resize', checkIsTablet);

    return () => {
      window.removeEventListener('resize', checkIsTablet);
    };
  }, []);

  // 테블릿이 아닐 경우 처음 6개만 표시, 테블릿일 경우 8개 모두 표시
  const displayedBooks = isTablet ? data ?? [] : (data ?? []).slice(0, 6);

  return (
    <div className="py-[180px] relative max-md:py-[100px] max-md:relative max-md:block border-b border-[#e6e6e6] max-sm:py-[70px]">
      <div className="max-w-[1770px] mx-auto px-[60px] flex justify-between max-md:flex-col max-sm:px-[28px]">
        <div className="shrink-0 mr-[100px]">
          <h2 className="font-medium text-[30px] leading-[56px] max-sm:text-[18px] max-sm:leading-[32px] max-sm:break-keep">
            신간 도서
          </h2>
          <Link
            href="/book-list"
            className="inline-flex pr-[40px] leading-[36px] font-medium text-[14px] items-center hover:underline group max-sm:font-normal"
          >
            더보기
            <img
              src="/images/rightarrow.svg"
              alt="신간도서"
              className="ml-[10px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300"
            />
          </Link>
        </div>
        <ul className="w-[964px] grid grid-cols-3 items-baseline overflow-hidden justify-between gap-y-[70px] gap-x-[20px] max-md:mt-[36px] max-md:w-full max-md:grid-cols-4 max-md:gap-y-[50px] max-sm:grid-cols-2 max-sm:mt-[12px]">
          {displayedBooks.map(
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
      </div>
    </div>
  );
}
