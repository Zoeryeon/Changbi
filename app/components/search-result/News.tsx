//app /components /search-result /News.tsx
import Link from 'next/link';
import React from 'react';

type NewsProps = {
  data: {
    id: number;
    category: string;
    title: string;
    date: string;
  }[];
};

export default function News({ data }: NewsProps) {
  return (
    <ul className="mt-[56px] text-left max-sm:mt-[26px]">
      {data.map(
        (news: {
          id: number;
          category: string;
          title: string;
          date: string;
        }) => (
          <li key={news.id}>
            <Link
              href="/NewsDetail"
              className="flex flex-col justify-center border-b border-b-[#e6e6e6] pt-[14px] pb-[13px] group hover:bg-[#f6f6f6]"
            >
              <strong className="flex items-start font-normal text-[20px] leading-[34px] max-sm:flex-col max-sm:text-[16px] max-sm:leading-[26px]">
                {news.title}
              </strong>
              <span className="text-[14px] leading-[28px] max-sm:leading-[26px] max-sm:font-normal">
                {news.date}
              </span>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
