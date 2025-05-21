//app /components /about /History.tsx

type HistoryProps = {
  handleHistory: (selectedYear: string) => void;
  yearList: string[];
  history: string;
  filteredHistoryData?: any[];
};

export default function History({
  handleHistory,
  yearList,
  history,
  filteredHistoryData = [],
}: HistoryProps) {
  return (
    <div className="flex items-start justify-end gap-[92px] border-t border-t-[#e6e6e6] pt-[150px] text-justify break-all m-auto px-[130px] max-[1800px]:px-[100px] max-[1600px]:px-[80px] max-[1500px]:px-[60px] pb-[150px] max-md:py-[66px] max-md:block max-md:relative max-sm:px-[28px]">
      <div>
        <h2 className="text-right text-[40px] tracking-tight leading-[60px] break-keep font-bold max-md:text-left max-sm:text-[28px] max-sm:leading-[40px] max-sm:font-medium">
          사진으로 보는
          <br />
          창비의 역사
        </h2>
        <div className="mt-[80px] max-md:flex max-md:gap-[12px]  max-md:flex-wrap max-md:mt-[10px]">
          {yearList.map((item) => (
            <button
              key={item}
              type="button"
              className={`block h-[42px] w-[204px] pl-[25px] leading-[42px] rounded-[10px] mb-[20px] ml-[1px] text-left max-md:w-auto max-md:pr-[25px] max-md:mb-0 shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:py-0 max-sm:px-[18px] ${
                history === item
                  ? 'bg-[#2c3338] text-white'
                  : 'bg-point1 hover:bg-[#e7e7e8]'
              }`}
              onClick={() => handleHistory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="w-[964px] max-[1600px]:w-[860px] max-[1500px]:w-[760px] max-[1300px]:w-[670px] leading-[32px] border-l border-l-[#e6e6e6] min-h-[700px] pl-[90px] max-md:border-0 max-md:pl-0 max-md:min-h-[540px] max-md:mt-[30px] max-md:w-full max-sm:mt-[20px]">
        {filteredHistoryData?.map(
          (item: {
            id: number;
            year: number;
            month: number;
            day: number;
            img: string;
            img2: string;
            title: string;
            explanation: string;
            explanation2: string;
          }) => (
            <div key={item.id} className="mb-[60px] max-md:mb-[50px]">
              <h3 className="leading-[44px] mb-[2px] text-[30px] font-medium break-keep max-sm:text-[28px]">
                {item.year}
                {item.month ? `년 ${item.month}월` : '년'}
                {item.day ? ` ${item.day}일` : ''}
              </h3>
              <img
                src={item.img}
                alt="역사"
                className="max-w-full max-h-[354px]"
              />
              <h4 className="leading-[32px] font-medium max-sm:text-[14px] max-sm:leading-[26px]">
                {item.title}
              </h4>
              <span className="leading-[32px] tracking-tight max-sm:text-[14px] max-sm:leading-[26px]">
                {item.explanation}
              </span>
              {item.img2 && (
                <div className="mt-[60px] max-md:mt-[50px]">
                  <img
                    src={item.img2}
                    alt="역사2"
                    className="max-w-full max-h-[354px]"
                  />
                  {/* dangerouslySetInnerHTML사용하는 경우 내용을 직접 넣지 않음 */}
                  <span
                    className="block leading-[32px] tracking-tight max-sm:text-[14px] max-sm:leading-[26px]"
                    dangerouslySetInnerHTML={{
                      __html: item.explanation2.replace(/\n/g, '<br />'),
                    }}
                  ></span>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
