//app /components /search-result /SearchForm.tsx

type FormProps = {
  handleKeyword: (e: React.FormEvent<HTMLFormElement>) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  paramsObj: {
    search: string;
    page: string;
    keyword: string;
  };
};

export default function SearchForm({
  handleKeyword,
  inputRef,
  paramsObj,
}: FormProps) {
  return (
    <div>
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
    </div>
  );
}
