//app /components /library /LibraryResult.tsx

import Pagination from '@/app/components/Pagination';
import Link from 'next/link';

type ResultProps = {
  isPending?: boolean;
  isError?: boolean;
  error?: any;
  data?: any[];
  page: number;
  setPage: any;
  totalPage: any;
};

export default function LibraryResult({
  isPending = false,
  isError = false,
  error = null,
  data = [],
  page,
  setPage,
  totalPage,
}: ResultProps) {
  return (
    <div>
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
          <ul className="mt-[34px] break-keep max-sm:mt-[26px]">
            {data?.map(
              (library: {
                id: number;
                tag: number;
                cate: string;
                title: string;
                url: string;
                down: string;
              }) => (
                <li key={library.id}>
                  <Link
                    href={library.url}
                    download
                    className="flex h-[90px] items-center bg-[url('/images/downloadblack.svg')] bg-no-repeat bg-[left_center] justify-between border-b border-b-[#e6e6e6] pl-[36px] group hover:bg-[#f6f6f6]"
                  >
                    <div className="flex items-center">
                      <em className="inline-block bg-[#f7f7f7] group-hover:bg-[#eee] py-[2px] px-[12px] rounded-[4px] mr-[12px] shrink-0 mt-[1px] text-[14px] leading-[28px] font-normal italic max-sm:text-[12px] max-sm:py-0 max-sm:px-[8px] max-sm:mt-0 max-sm:mb-[4px]">
                        {library.cate}
                      </em>
                      <strong className="flex items-start font-normal text-[20px] leading-[34px] max-sm:flex-col max-sm:text-[16px] max-sm:leading-[26px]">
                        {library.title}
                      </strong>
                    </div>
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
  );
}
