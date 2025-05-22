//app /components /news-list /NewsResult.tsx

import Pagination from '@/app/components/Pagination';
import Link from 'next/link';

type NewsProps = {
  handleKeyword: (e: React.FormEvent<HTMLFormElement>) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  paramsObj: {
    keyword: string;
    page: string;
  };
  isPending?: boolean;
  isError?: boolean;
  error?: any;
  data?: any[];
  page: number;
  setPage: any;
  totalPage: any;
};

export default function NewsResult({
  handleKeyword,
  inputRef,
  paramsObj,
  isPending = false,
  isError = false,
  error = null,
  data = [],
  page,
  setPage,
  totalPage,
}: NewsProps) {
  return (
    <div className="flex items-start justify-between max-md:block">
      <div className="mr-[300px]"></div>
      <div className="w-[964px] max-md:mt-[36px] max-md:w-full">
        <form
          onSubmit={handleKeyword}
          className="relative w-full h-[70px] border-b-[4px] border-b-gray-500 max-sm:h-auto max-sm:border max-sm:border-[#e6e6e6] max-sm:rounded-[10px]"
        >
          <input
            ref={inputRef}
            type="search"
            placeholder="검색어를 입력하세요"
            className="block outline-0 border-0 w-full h-[56px] leading-[56px] text-[30px] font-bold placeholder:font-bold max-sm:leading-[40px] max-sm:h-[40px] max-sm:px-[16px] max-sm:text-[14px] max-sm:font-normal max-sm:placeholder:font-normal"
            autoComplete="off"
            defaultValue={paramsObj.keyword}
          />
          <button
            type="submit"
            className="absolute w-[62px] h-[62px] bg-[url('/images/searchinputicon.svg')] bg-no-repeat bg-center right-0 top-0 hover:bg-[#f6f6f6] max-sm:bg-[url('/images/headersearchicon.svg')] max-sm:h-[40px] max-sm:w-[54px]"
          ></button>
        </form>
        {isPending && (
          <div className="w-full h-[300px] flex justify-center items-center flex-col text-center">
            <h1 className="text-[20px] leading-[34px] font-medium max-sm:text-[16px] max-sm:leading-[26px]">
              검색 결과를 불러오고 있습니다.
            </h1>
            <h4 className="text-[14px] leading-[28px] max-sm:leading-[26px]">
              잠시만 기다려주세요
            </h4>
          </div>
        )}
        {isError && <p>{error.message}</p>}
        {data &&
          (data?.length > 0 ? (
            <ul className="mt-[56px] border-t border-t-[#e6e6e6] text-left max-sm:mt-[26px]">
              {data?.map(
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
          ) : (
            <div className="w-full h-[300px] flex justify-center items-center flex-col text-center">
              <h1 className="text-[20px] leading-[34px] font-medium max-sm:text-[16px] max-sm:leading-[26px]">
                검색 결과가 없습니다.
              </h1>
            </div>
          ))}
        <div className="mt-[134px]">
          {data && data?.length > 0 && (
            <Pagination page={page} setPage={setPage} totalPage={totalPage} />
          )}
        </div>
      </div>
    </div>
  );
}
