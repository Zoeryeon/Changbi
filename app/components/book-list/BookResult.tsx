//app /components /book-list /AuthorResult.tsx

import Link from 'next/link';

type BookProps = {
  handleCate: (e: React.MouseEvent<HTMLButtonElement>) => void;
  cateList: string[];
  cate: string;
  isPending?: boolean;
  isError?: boolean;
  error?: any;
  data?: any[];
};

export default function BookResult({
  handleCate,
  cateList = [],
  cate,
  isPending = false,
  isError = false,
  error = null,
  data = [],
}: BookProps) {
  return (
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
      {data && data?.length > 0 && (
        <ul className="pt-[102px] items-baseline grid grid-cols-5 gap-y-[70px] gap-x-[20px] max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:pt-[40px]">
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
  );
}
