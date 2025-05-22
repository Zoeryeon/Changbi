//app /components /search-result /SearchTag.tsx

type TagProps = {
  buttonLabels: string[];
  search: string;
  handlerCategory: (label: string) => void;
};

export default function SearchTag({
  buttonLabels,
  search,
  handlerCategory,
}: TagProps) {
  return (
    <div className="mt-[60px] max-md:flex max-md:gap-[12px] max-md:w-full max-md:mt-[24px] max-md:absolute max-md:top-0 max-md:-left-[80px] max-md:pl-[80px] max-md:pr-[80px]">
      {buttonLabels.map((label, index) => (
        <button
          key={index}
          type="button"
          className={`block h-[42px] w-[204px] pl-[25px] ml-[1px] leading-[42px] -tracking-widest rounded-[10px] mb-[20px] text-left max-md:w-auto max-md:pl-[25px] max-md:pr-[25px] max-md:mb-0 max-md:shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px] ${
            (label === '도서' && search === 'books') ||
            (label === '저자' && search === 'authors') ||
            (label === '새소식' && search === 'news')
              ? 'bg-[#2c3338] text-white'
              : 'bg-point1 hover:bg-[#e7e7e8]'
          }`}
          onClick={() => handlerCategory(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
