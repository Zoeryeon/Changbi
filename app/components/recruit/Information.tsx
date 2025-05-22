//app /components /recruit /Information.tsx

import Link from 'next/link';

type InformProps = {
  isPending?: boolean;
  isError?: boolean;
  error?: any;
  data?: any[];
};

export default function Information({
  isPending = false,
  isError = false,
  error = null,
  data = [],
}: InformProps) {
  return (
    <div className="flex mt-[70px] break-keep max-md:block max-md:w-full max-sm:mt-[26px]">
      <div className="flex flex-col px-[40px] text-center justify-center w-[50%] max-md:my-[100px] max-md:mx-0 max-md:w-full max-sm:p-0">
        <h3 className="text-[40px] font-bold leading-[60px] tracking-tight mb-[18px] underline break-all hover:text-[#888] cursor-pointer max-sm:text-[28px] max-sm:leading-[40px]">
          resume@changbi.com
        </h3>
        <p className="break-keep leading-[32px] max-sm:text-[14px] max-sm:leading-[26px]">
          *[상시채용_직무_이름]으로 파일명을
          지정해주세요.(예:상시채용_편집_홍길동)
        </p>
      </div>
      <div className="pl-[40px] w-[50%] max-md:w-full max-md:text-center max-md:p-0">
        <h3 className="mb-[28px] text-[30px] font-medium leading-[56px] tracking-tight break-keep max-sm:text-[18px] max-sm:leading-[32px] max-sm:tracking-normal">
          책을 매개로 더 나은 세상을 만들어갈
          <br /> 당신을 기다립니다.
        </h3>
        <div>
          <p className="leading-[32px] max-sm:text-[14px] max-sm:leading-[26px]">
            (주)창비와 좋은 책으로 새로운 지식문화를 만들어 가실 분들의 지원을
            언제나 환영합니다.
            <br />
            해당 직무의 소요에 따라 심사와 채용 절차를 거쳐 개별 연락드립니다.
          </p>
          <ul className="list-inside list-disc mt-[60px] leading-[32px] max-sm:text-[14px] max-sm:leading-[26px]">
            <li>채용 시기: 상하반기 각 1회 및 비정기적 모집</li>
            <li>
              지원 방법: 입사지원서, 포트폴리오(디자인, 경력 지원 등) 이메일
              접수
            </li>
            <li>
              채용 분야: 편집, 홍보마케팅, 디자인/조판, 제작, 인사총무, 회계,
              저작권
            </li>
          </ul>
        </div>
        <Link
          href="/resources/[서식] 입사지원서.hwp"
          download
          className="mt-[68px] mr-[32px] inline-block h-[42px] pr-[30px] pl-[52px] leading-[42px] rounded-[10px] bg-[url('/images/button1-download.svg')] bg-no-repeat bg-[left_20px_top_8px] bg-[#2c3338] text-white hover:bg-[#4e5e62] max-sm:mr-0 max-sm:mb-[28px]"
        >
          입사지원서 양식 다운로드(상시채용 지원)
        </Link>
        <Link
          href="/resources/[서식] 입사지원서_편집 2024상.hwp"
          download
          className="mt-[68px] mr-[32px] inline-block h-[42px] pr-[30px] pl-[52px] leading-[42px] rounded-[10px] bg-[url('/images/button1-download.svg')] bg-no-repeat bg-[left_20px_top_8px] bg-[#2c3338] text-white hover:bg-[#4e5e62] max-sm:mr-0 max-sm:mb-[28px]"
        >
          입사지원서 양식 다운로드((주)창비 2024년 상반기 편집 직무 채용)
        </Link>
        {isPending && <p>Loading...</p>}
        {isError && <p>{error.message}</p>}
        <ul className="mt-[56px] border-t border-t-[#e6e6e6] text-left">
          {data?.map(
            (item: {
              id: number;
              category: string;
              title: string;
              date: string;
            }) => (
              <li key={item.id}>
                <Link
                  href="/NewsDetail"
                  className="flex flex-col justify-center border-b border-b-[#e6e6e6] pt-[14px] pb-[13px] group hover:bg-[#f6f6f6]"
                >
                  <strong className="flex items-start font-normal text-[20px] leading-[34px] max-sm:flex-col max-sm:text-[16px] max-sm:leading-[26px]">
                    <em className="inline-block bg-[#f7f7f7] group-hover:bg-[#eee] py-[2px] px-[12px] rounded-[4px] mr-[12px] shrink-0 mt-[1px] text-[14px] leading-[28px] font-normal max-sm:text-[12px] max-sm:py-0 max-sm:px-[8px] max-sm:mt-0 max-sm:mb-[4px]">
                      최신 채용 정보
                    </em>
                    {item.title}
                  </strong>
                  <span className="text-[14px] leading-[28px] max-sm:leading-[26px] max-sm:font-normal">
                    {item.date}
                  </span>
                </Link>
              </li>
            )
          )}
        </ul>
        <Link
          href="/news-list"
          className="inline-flex pr-[40px] leading-[36px] text-[14px] mt-[20px] items-center hover:underline group"
        >
          더보기
          <img
            src="/images/rightarrow.svg"
            alt="새소식"
            className="ml-[10px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300"
          />
        </Link>
      </div>
    </div>
  );
}
