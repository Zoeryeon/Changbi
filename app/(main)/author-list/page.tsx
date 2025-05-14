//app /(main) /authorList /page.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useState } from 'react';

const buttonLabels = [
  'ㄱ·ㄴ·ㄷ·ㄹ',
  'ㅁ·ㅂ·ㅅ·ㅇ',
  'ㅈ·ㅊ·ㅋ·ㅌ',
  'ㅍ·ㅎ',
  'ABC - Z',
  '123·기타',
];

export default function AuthorList({
  searchParams,
}: {
  searchParams: Promise<{ tag: string }>;
}) {
  const [tag, setTag] = useState(1);

  const paramsObj = use(searchParams);
  const [params] = useState(new URLSearchParams(paramsObj));
  const router = useRouter();

  const { isPending, data, isError, error } = useQuery({
    queryKey: ['author-list', tag],
    queryFn: () => {
      return fetch(`http://localhost:9090/author-list?tag=${tag}`).then((res) =>
        res.json()
      );
    },
  });

  // 저자이름 오름차순
  const sortAuthors = (
    data: { id: number; name: string; img: string }[],
    regex: RegExp,
    locale: string
  ) =>
    data
      .filter((author) => regex.test(author.name))
      .sort((a, b) => a.name.localeCompare(b.name, locale));

  const koreanAuthors = sortAuthors(data ?? [], /^[가-힣]/, 'ko-KR');
  const englishAuthors = sortAuthors(data ?? [], /^[A-Za-z]/, 'en-US');
  const numberAuthors = sortAuthors(data ?? [], /^[0-9]/, 'en-US');

  const sortedData = [...koreanAuthors, ...englishAuthors, ...numberAuthors];

  function handleTag(index: number) {
    setTag(index + 1); // tag 값 업데이트
    params.set('tag', (index + 1).toString());
    router.push(`?${params.toString()}`);
  }

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:pt-[90px] max-sm:pb-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <div className="flex items-baseline justify-between flex-wrap">
          <h2 className="text-[56px] font-bold tracking-tight leading-[88px] max-sm:text-[32px] max-sm:leading-[46px] max-sm:break-keep">
            저자
          </h2>
        </div>
        <div className="flex items-start justify-between max-md:block max-md:relative max-md:pt-[66px]">
          <div className="mt-[60px] max-md:flex max-md:gap-[12px] max-md:w-full max-md:mt-[24px] max-md:absolute max-md:top-0 max-md:-left-[80px] max-md:pl-[80px] max-md:pr-[80px] max-sm:-left-[28px] max-sm:pl-[28px] max-sm:pr-[28px] max-sm:flex-wrap">
            {buttonLabels.map((label, index) => (
              <button
                key={index}
                type="button"
                className={`block h-[42px] w-[204px] pl-[25px] ml-[1px] leading-[42px] -tracking-widest rounded-[10px] mb-[20px] text-left max-md:w-auto max-md:pl-[22px] max-md:pr-[22px] max-md:mb-0 max-md:shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px] ${
                  index + 1 === Number(tag)
                    ? 'bg-[#2c3338] text-white'
                    : 'bg-point1 hover:bg-[#e7e7e8]'
                }`}
                onClick={() => handleTag(index)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="w-[964px] max-md:mt-[36px] max-md:w-full max-sm:mt-[50px]">
            <div className="w-[964px] max-md:mt-[36px] max-md:w-full">
              <form className="relative w-full h-[70px] border-b-[4px] border-b-gray-500 max-sm:h-auto max-sm:border max-sm:border-[#e6e6e6] max-sm:rounded-[10px]">
                <input
                  type="search"
                  placeholder="검색어를 입력하세요"
                  className="block outline-0 border-0 w-full h-[56px] leading-[56px] text-[30px] font-bold placeholder:font-bold p-0 max-md:font-medium max-md:placeholder:font-medium max-sm:leading-[40px] max-sm:h-[40px] max-sm:px-[16px] max-sm:text-[14px] max-sm:font-normal max-sm:placeholder:font-normal"
                  autoComplete="off"
                />
                <button
                  type="button"
                  className="absolute w-[62px] h-[62px] bg-[url('/images/searchinputicon.svg')] bg-no-repeat bg-center right-0 top-0 hover:bg-[#f6f6f6] max-sm:bg-[url('/images/headersearchicon.svg')] max-sm:h-[40px] max-sm:w-[54px]"
                ></button>
              </form>
            </div>
            {isPending && <p>Loading...</p>}
            {isError && <p>{error.message}</p>}
            <ul className="flex flex-wrap gap-y-[53px] gap-x-[90px] justify-between mt-[60px] pl-[1px] max-md:block max-sm:mt-[21px]">
              {sortedData.map(
                (
                  author: { id: number; name: string; img: string },
                  index: number
                ) => (
                  <li key={author.id} className="relative">
                    <Link
                      href="/authorDetail"
                      className="w-[260px] flex flex-nowrap max-md:w-full max-md:mb-[20px]"
                    >
                      <div className="w-[70px] h-[70px] rounded-[8px] overflow-hidden max-sm:w-[50px] max-sm:h-[50px]">
                        <img
                          src={author.img}
                          alt="저자"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col ml-[20px] w-[170px] justify-center max-sm:ml-[14px] max-sm:w-[calc(100%-64px)]">
                        <h4 className="w-full text-ellipsis overflow-hidden whitespace-nowrap text-[20px] leading-[34px] font-medium tracking-tight max-sm:text-[16px] max-sm:leading-[26px] max-sm:tracking-normal">
                          {author.name}
                        </h4>
                      </div>
                    </Link>
                    {index % 3 === 2 && (
                      <div className="absolute block w-[964px] h-[1px] bg-[#d6d6d6] right-0 top-[96px] max-md:hidden"></div>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
