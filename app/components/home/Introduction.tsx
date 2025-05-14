//app /components /home /Introduction.tsx
import Link from 'next/link';

export default function Introduction() {
  return (
    <div className="relative pt-[100px] pb-[180px] max-md:py-[100px] max-md:block border-b border-[rgb(230,230,230)] max-sm:py-[70px]">
      <div className="max-w-[1770px] mx-auto px-[60px] flex justify-between max-md:flex-col max-sm:px-[28px]">
        <div className="shrink-0 max-md:relative max-md:w-auto max-md:block">
          <h2 className="text-[56px] font-medium leading-24 max-sm:text-[32px] max-sm:leading-[46px] max-sm:-tracking-widest">
            한결같되
            <br /> 날로 새롭게
          </h2>
          <p className="flex max-md: w-full my-[20px] text-[20px] leading-[34px] max-sm:text-[16px] max-sm:leading-[26px]">
            1966년부터 지금까지 <br /> 독자와 함께 더 나은 세상을
          </p>
          <Link
            href="/about"
            className="inline-flex w-auto leading-[36px] font-medium text-[14px] items-center hover:underline group max-sm:font-normal"
          >
            회사 소개 보러가기
            <img
              src="/images/rightarrow.svg"
              alt="회사소개"
              className="ml-[10px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300"
            />
          </Link>
        </div>
        <div className="max-w-[964px] max-md:mt-[36px] max-md:w-full max-sm:mt-[12px]">
          <img
            src="/images/main-visual-202403.png"
            alt="메인사진"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
