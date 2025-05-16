//app /components /search-result /Books.tsx
import Link from 'next/link';
import React from 'react';

type BooksProps = {
  data: {
    id: number;
    title: string;
    author: string;
    image: string;
    series: string;
    date: string;
    price: string;
    category: string;
  }[];
};

export default function Books({ data }: BooksProps) {
  return (
    <ul className="mt-[70px] grid grid-cols-3 justify-between items-baseline gap-y-[70px] gap-x-[20px] max-sm:grid-cols-2">
      {data.map(
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
                  alt="책"
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
              <span className="text-[14px] leading-[28px]">{book.author}</span>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
