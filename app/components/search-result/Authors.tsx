//app /components /search-result /Authors.tsx
import Link from 'next/link';
import React from 'react';

type AuthorsProps = {
  data: {
    id: number;
    img: string;
    name: string;
  }[];
};

export default function Authors({ data }: AuthorsProps) {
  return (
    <ul className="flex flex-wrap gap-y-[53px] gap-x-[90px] justify-between mt-[60px] pl-[1px] max-[1500px]:block max-sm:mt-[21px]">
      {data?.map(
        (author: { id: number; name: string; img: string }, index: number) => (
          <li key={author.id} className="relative">
            <Link
              href="/authorDetail"
              className="w-[260px] flex flex-nowrap max-[1500px]:w-full max-[1500px]:mb-[20px] hover:underline"
            >
              <div className="w-[70px] h-[70px] rounded-[8px] overflow-hidden max-sm:w-[50px] max-sm:h-[50px]">
                <img
                  src={author.img}
                  alt="저자"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col ml-[20px] w-[170px] justify-center max-[1500px]:w-auto max-sm:ml-[14px] max-sm:w-[calc(100%-64px)]">
                <h4 className="w-full text-ellipsis overflow-hidden whitespace-nowrap text-[20px] leading-[34px] font-medium tracking-tight max-sm:text-[16px] max-sm:leading-[26px] max-sm:tracking-normal">
                  {author.name}
                </h4>
              </div>
            </Link>
            {index % 3 === 2 && (
              <div className="absolute block w-[964px] h-[1px] bg-[#d6d6d6] right-0 top-[96px] max-[1500px]:hidden"></div>
            )}
          </li>
        )
      )}
    </ul>
  );
}
