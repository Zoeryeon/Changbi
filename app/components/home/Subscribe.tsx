//app /components /home /Subscribe.tsx
import Link from 'next/link';

export default function Subscribe() {
  return (
    <div className="py-[180px] relative max-md:py-[100px] max-md:relative max-md:block border-b border-[#e6e6e6] max-sm:py-[70px]">
      <div className="max-w-[1770px] mx-auto px-[60px] flex justify-between max-md:flex-col max-sm:px-[28px]">
        <div className="shrink-0">
          <h2 className="font-medium text-[30px] leading-[56px] max-sm:text-[18px] max-sm:leading-[32px] max-sm:break-keep">
            계간 창작과비평
          </h2>
          <Link
            href="https://magazine.changbi.com/MCSubscribe/SubScribeList"
            target="_blank"
            className="inline-flex pr-[40px] leading-[36px] font-medium text-[14px] items-center hover:underline group max-sm:font-normal"
          >
            정기구독 신청하기
            <img
              src="/images/rightarrow.svg"
              alt="정기구독"
              className="ml-[10px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300"
            />
          </Link>
        </div>
        <div className="w-[964px] text-center max-md:mt-[36px] max-md:w-full max-sm:mt-[12px]">
          <img
            src="/images/250226_c13077f2-8c91-484f-8b14-b0f7c77e97da.jpg"
            alt="창작과비평"
            className="m-auto max-w-[212px] max-md:w-[180px] mt-[32px]"
          />
          <h2 className="text-[40px] leading-[60px] my-[24px] font-bold tracking-tight max-sm:text-[28px] max-sm:leading-[40px] max-sm:break-keep">
            창작과비평 207호(2025년 봄호)
          </h2>
          <div className="flex gap-y-[20px] gap-x-[40px] items-center justify-center">
            <Link
              href="/magazine"
              className="inline-flex pr-[40px] leading-[36px] font-medium text-[14px] items-center hover:underline group max-sm:font-normal"
            >
              자세히 보기
              <img
                src="/images/rightarrow.svg"
                alt="자세히보기"
                className="ml-[10px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
