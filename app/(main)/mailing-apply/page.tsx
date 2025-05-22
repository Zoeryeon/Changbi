//app /(main) /mailing-apply /page.tsx
'use client';

import Mail from '@/app/components/mailing-apply/Mail';
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
          <form onSubmit={handleSubmit}>
            <Mail />
          </form>
        </div>
      </div>
    </main>
  );
}
