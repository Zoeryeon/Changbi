//app /(main) /mailing-apply /page.tsx
'use client';

import Link from 'next/link';

export default function page() {
  // 폼 제출 핸들러 추가
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 기본 제출 동작 방지
    alert('메일링 신청이 완료되었습니다.'); // 알림 표시

    // 폼 리셋 - 모든 입력 필드 초기화
    event.currentTarget.reset();
  };

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:pt-[90px] max-sm:pb-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <div className="flex flex-col items-baseline justify-between flex-wrap">
          <Link
            href="/"
            className="inline-flex pl-[6px] leading-[36px] font-medium text-[14px] items-center hover:underline group mb-[20px] max-sm:font-normal"
          >
            <img
              src="/images/leftarrow.svg"
              alt="더보기"
              className="mr-[10px] transition-transform group-hover:-translate-x-1.5 group-hover:duration-300"
            />
            뒤로가기
          </Link>
          <h2 className="text-[56px] font-bold tracking-tight leading-[88px] max-sm:text-[32px] max-sm:leading-[46px] max-sm:break-keep">
            창비주간논평 메일링
          </h2>
          <div className="mt-[60px] break-keep max-w-[948px] w-full">
            <p className="leading-[32px] max-sm:text-[14px] max-sm:leading-[26px]">
              메일링을 신청하시면 매주 창비주간논평의 발행 소식을 이메일로
              손쉽게 접하실 수 있습니다.
              <br />
              신청 관련 문의: cnc@changbi.com (계간지출판부)
            </p>
          </div>
          <form
            className="mt-[42px] flex flex-col justify-between gap-y-[42px] max-w-[620px] "
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block h-[20px] leading-[20px] text-[14px]">
                이름
              </label>
              <input
                type="text"
                placeholder="이름을 입력하세요."
                required
                className="block h-[42px] leading-[42px] border-0 border-b border-b-[#707070] w-full p-0"
              />
            </div>
            <div>
              <label className="block h-[20px] leading-[20px] text-[14px]">
                이메일
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                required
                className="block h-[42px] leading-[42px] border-0 border-b border-b-[#707070] w-full p-0"
              />
            </div>
            <div>
              <p className="text-[14px] leading-[28px]">
                개인정보 수집·이용 목적 : 창비 주간논평 발송을 위해 수집
                이용됩니다.
                <br />
                수집 항목 : 이메일
                <br />
                보유 기간 : 수신 거부 시까지
                <br />- 본 동의를 거부할 수 있으나. 미동의 시 접수가
                불가능합니다.
                <br />- 수집된 개인정보는 위 목적 이외의 용도로는 이용되지
                않으며, 제3자에게 제공하지 않습니다.
              </p>
            </div>
            <div className="flex justify-start items-center gap-[7px] text-[14px] leading-[28px] font-medium">
              <label className="checkbox group hover:underline hover:cursor-pointer">
                <input type="checkbox" required className="sr-only" />
                만 14세 이상 개인정도 수집 동의
                <img
                  src="/images/rightarrow.svg"
                  alt="더보기"
                  className="ml-[4px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300 group-hover:cursor-pointer"
                />
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#2c3338] pr-[28px] pl-[30px] inline-block h-[42px] text-white rounded-[10px] self-end group hover:bg-[#4e5a62]"
            >
              메일링 신청하기
              <img
                src="/images/whiterightarrow.svg"
                alt="더보기"
                className="ml-[6px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300 group-hover:cursor-pointer mt-[6px]"
              />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
