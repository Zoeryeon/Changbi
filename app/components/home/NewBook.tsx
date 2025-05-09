//app /components /home /NewBook.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NewBook() {
  // 책 데이터를 배열로 정의
  const booksData = [
    {
      id: 4537,
      title: '새벽 탐험',
      author: '슷카이',
      image: '/images/books/250429_b292bdfd-604a-4f85-9649-ca580ac63b05.jpg',
      series: '',
      date: '2025.05.05',
      price: '16,800원',
      alt: '신간1',
    },
    {
      id: 4537,
      title: '작은 것들에 입술을 달아주고',
      author: '이근화',
      image: '/images/books/250425_ef5b69ee-18ea-4cdd-ba84-7069553ba84e.jpg',
      series: '에세이& 08',
      date: '2025.04.30',
      price: '15,000원',
      alt: '신간2',
    },
    {
      id: 4537,
      title: '건전지 할머니',
      author: '강인숙, 전승배',
      image: '/images/books/250424_56a4dcdd-c66e-47b5-b7a2-06e0f75c2ec2.jpg',
      series: '건전지 가족',
      date: '2025.04.28',
      price: '16,800원',
      alt: '신간3',
    },
    {
      id: 4537,
      title: '망할 토마토, 기막힌 가지',
      author: '박찬일',
      image: '/images/books/250421_776e181a-ff69-47cb-abcf-06cbb3f272bd.jpg',
      series: '',
      date: '2025.04.28',
      price: '15,000원',
      alt: '신간4',
    },
    {
      id: 4537,
      title: '우리 없이 빛난 아침',
      author: '최현우',
      image: '/images/books/250418_d38d2434-da2e-4a4a-980c-43b449c722ae.jpg',
      series: '창비시선 517',
      date: '2025.04.25',
      price: '13,000원',
      alt: '신간5',
    },
    {
      id: 4537,
      title: '처음 만나는 헌법',
      author: '차병직',
      image: '/images/books/250418_23cb7ade-6387-4e4a-9aa6-a9a471ff8436.jpg',
      series: '교양100그램 6',
      date: '2025.04.18',
      price: '12,000원',
      alt: '신간6',
    },
    {
      id: 4537,
      title: '나는 빠리의 택시운전사(개정증보판)',
      author: '홍세화',
      image: '/images/books/250415_14261078-b049-4e81-84ea-34a74ee7362c.jpg',
      series: '',
      date: '2025.04.11',
      price: '22,000원',
      alt: '신간7',
    },
    {
      id: 4537,
      title: '스파클',
      author: '최현진',
      image: '/images/books/250414_165e3f75-a9b4-4140-b819-e8f3f7640598.jpg',
      series: '창비청소년문학 134',
      date: '2025.04.11',
      price: '15,000원',
      alt: '신간8',
    },
  ];

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
  const displayedBooks = isTablet ? booksData : booksData.slice(0, 6);

  return (
    <div className="py-[180px] relative max-md:py-[100px] max-md:relative max-md:block border-b border-[#e6e6e6] max-sm:py-[70px]">
      <div className="max-w-[1770px] mx-auto px-[60px] flex justify-between max-md:flex-col">
        <div className="shrink-0">
          <h2 className="font-medium text-[30px] leading-[56px] max-sm:text-[18px] max-sm:leading-[32px] max-sm:break-keep">
            신간 도서
          </h2>
          <Link
            href="/BookList?page=1"
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
          {displayedBooks.map((book, index) => (
            <li key={index}>
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
          ))}
        </ul>
      </div>
    </div>
  );
}
