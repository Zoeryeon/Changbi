//app /components /kids-magazine /KidsMagazineList.tsx

import Link from 'next/link';

type KidsMagazineProps = {
  isPending?: boolean;
  isError?: boolean;
  error?: any;
  data?: any[];
};

export default function KidsMagazineList({
  isPending = false,
  isError = false,
  error = null,
  data = [],
}: KidsMagazineProps) {
  return (
    <div className="mt-[100px]">
      <div className="flex items-start justify-between h-[50px] w-full border-b border-b-[#e6e6e6]">
        <h4 className="text-[20px] leading-[34px] tracking-tight max-sm:text-[16px] max-sm:leading-[36px] max-sm:tracking-normal">
          창작과비평 출간목록
        </h4>
        <Link
          href="/magasine-list"
          className="inline-block pr-[10px] hover:underline group leading-[36px] text-[14px]"
        >
          계간지 더보기
          <img
            src="/images/rightarrow.svg"
            alt="회사소개"
            className="ml-[8px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300 mt-[12px]"
          />
        </Link>
      </div>
      {isPending && <p>Loading...</p>}
      {isError && <p>{error.message}</p>}
      <ul className="mt-[80px] items-baseline grid grid-cols-5 gap-y-[70px] gap-x-[40px] max-md:grid-cols-3 max-md:gap-x-[30px] max-sm:grid-cols-2 max-sm:gap-x-[20px]">
        {data?.map(
          (
            book: {
              id: number;
              title: string;
              author: string;
              image: string;
              series: string;
              date: string;
              price: string;
              category: string;
            },
            index: number
          ) => (
            <li
              key={book.id}
              className={`block ${index >= 3 ? 'max-md:hidden' : ''} ${
                index >= 2 ? 'max-sm:hidden' : ''
              }`}
            >
              <Link href="/book-detail" className="relative group">
                <div className="relative overflow-hidden border border-[#e6e6e6]">
                  <img
                    src={book.image}
                    alt="창작과비평"
                    className="w-full h-auto align-baseline -mb-[5px]"
                  />
                  <div className="absolute bottom-0 p-[16px] bg-[#00001480] leading-[28px] w-full flex flex-col backdrop-blur-sm text-[#eee] text-[14px] transition-transform duration-300 translate-y-[100%] group-hover:translate-y-0 max-sm:leading-[26px]">
                    <div>
                      <span>{book.series}</span>
                    </div>

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
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
