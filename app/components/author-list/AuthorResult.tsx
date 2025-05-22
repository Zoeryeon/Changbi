//app /components /author-list /AuthorResult.tsx

import Link from 'next/link';

type AuthorProps = {
  handleKeyword: (e: React.FormEvent<HTMLFormElement>) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  paramsObj: {
    tag: string;
    keyword: string;
  };
  isPending?: boolean;
  isError?: boolean;
  error?: any;
  data?: any[];
};

export default function AuthorResult({
  handleKeyword,
  inputRef,
  paramsObj,
  isPending = false,
  isError = false,
  error = null,
  data = [],
}: AuthorProps) {
  return (
    <div className="w-[964px] max-md:mt-[36px] max-md:w-full max-sm:mt-[50px]">
      <form
        onSubmit={handleKeyword}
        className="relative w-full h-[70px] border-b-[4px] border-b-gray-500 max-sm:h-auto max-sm:border max-sm:border-[#e6e6e6] max-sm:rounded-[10px]"
      >
        <input
          ref={inputRef}
          type="search"
          placeholder="검색어를 입력하세요"
          className="block outline-0 border-0 w-full h-[56px] leading-[56px] text-[30px] font-bold placeholder:font-bold p-0 max-md:font-medium max-md:placeholder:font-medium max-sm:leading-[40px] max-sm:h-[40px] max-sm:px-[16px] max-sm:text-[14px] max-sm:font-normal max-sm:placeholder:font-normal"
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
      {data?.length === 0 && (
        <div className="w-full h-[300px] flex justify-center items-center flex-col text-center">
          <h1 className="text-[20px] leading-[34px] font-medium max-sm:text-[16px] max-sm:leading-[26px]">
            검색 결과가 없습니다.
          </h1>
          <h4 className="text-[14px] leading-[28px] max-sm:leading-[26px]">
            다른 카테고리의 검색 결과도 확인해 보세요.
          </h4>
        </div>
      )}
      <ul className="flex flex-wrap gap-y-[53px] gap-x-[90px] justify-between mt-[60px] pl-[1px] max-[1500px]:block max-sm:mt-[21px]">
        {data?.map(
          (
            author: { id: number; name: string; img: string },
            index: number
          ) => (
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
                <div className="flex flex-col ml-[20px] w-[170px] justify-center max-sm:ml-[14px] max-sm:w-[calc(100%-64px)]">
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
    </div>
  );
}
