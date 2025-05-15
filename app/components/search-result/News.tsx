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
    <ul className="mt-[56px] border-t border-t-[#e6e6e6] text-left max-sm:mt-[26px]">
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
                <em className="inline-block bg-[#f7f7f7] group-hover:bg-[#eee] py-[2px] px-[12px] rounded-[4px] mr-[12px] shrink-0 mt-[1px] text-[14px] leading-[28px] font-normal italic max-sm:text-[12px] max-sm:py-0 max-sm:px-[8px] max-sm:mt-0 max-sm:mb-[4px]">
                  {news.category}
                </em>
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
