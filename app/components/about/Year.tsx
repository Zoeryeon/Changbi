//app /components /about /Year.tsx

type YearProps = {
  handleYear: (selectedYear: string) => void;
  yearList: string[];
  year: string;
  filteredYearData?: any[];
  isPending?: boolean;
  isError?: boolean;
  error?: any;
};

export default function Year({
  handleYear,
  yearList,
  year,
  filteredYearData = [],
  isPending = false,
  isError = false,
  error = null,
}: YearProps) {
  return (
    <div className="flex items-start justify-end gap-[92px] border-t border-t-[#e6e6e6] pt-[150px] text-justify break-all m-auto px-[130px] max-[1800px]:px-[100px] max-[1600px]:px-[80px] max-[1500px]:px-[60px] pb-[150px] max-md:py-[66px] max-md:block max-md:relative  max-sm:px-[28px]">
      <div>
        <h2 className="text-right text-[40px] tracking-tight leading-[60px] break-keep font-bold max-md:text-left max-sm:text-[28px] max-sm:leading-[40px] max-sm:font-medium">
          연혁
        </h2>
        <div className="mt-[80px] max-md:flex max-md:gap-[12px]  max-md:flex-wrap max-md:mt-[10px]">
          {yearList.map((item) => (
            <button
              key={item}
              type="button"
              className={`block h-[42px] w-[204px] pl-[25px] leading-[42px] rounded-[10px] mb-[20px] ml-[1px] text-left max-md:w-auto max-md:pr-[25px] max-md:mb-0 shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:py-0 max-sm:px-[18px] ${
                year === item
                  ? 'bg-[#2c3338] text-white'
                  : 'bg-point1 hover:bg-[#e7e7e8]'
              }`}
              onClick={() => handleYear(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="w-[964px] max-[1600px]:w-[860px] max-[1500px]:w-[760px] max-[1300px]:w-[670px] leading-[32px] border-l border-l-[#e6e6e6] min-h-[700px] pl-[90px] max-md:border-0 max-md:pl-0 max-md:min-h-[540px] max-md:mt-[30px] max-md:w-full max-sm:mt-[20px]">
        {isPending && <p>Loading...</p>}
        {isError && <p>{error.message}</p>}
        {filteredYearData?.map(
          (item: { id: number; year: number; contents: string }) => (
            <div key={item.id} className="mb-[60px] max-md:mb-[50px]">
              <h3 className="leading-[44px] mb-[2px] text-[30px] font-medium break-keep max-sm:text-[28px]">
                {item.year}
              </h3>
              <p className=" leading-[32px] tracking-tight max-sm:text-[14px] max-sm:leading-[26px]">
                {item.contents}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
