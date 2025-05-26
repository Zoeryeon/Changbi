//app /components /magazine /MainImg.tsx

import Link from 'next/link';

export default function MainImg() {
  return (
    <div className="flex flex-col items-center mt-[60px] mb-[140px] text-justify max-sm:mb-[88px]">
      <img
        src="/images/250521_be9db14d-34df-4aa5-9334-87ca7855f3a6.jpg"
        alt="창작과비평"
        className="max-w-[260px] w-[calc(100%-110px)] max-sm:w-[calc(100%-150px)]"
      />
      <h4 className="mt-[80px] text-[20px] leading-[34px] tracking-tight max-sm:text-[16px] max-sm:leading-[26px] max-sm:tracking-normal">
        계간 창작과비평
      </h4>
      <h2 className="mt-[10px] text-center text-[40px] leading-[60px] font-bold max-sm:text-[28px] max-sm:leading-[40px] max-sm:break-keep">
        창작과비평 208호(2025년 여름호)
      </h2>
      <div className="max-w-[964px] mt-[70px] mb-[70px] leading-[32px] max-sm:text-[14px] max-sm:leading-[26px]">
        <p>
          12‧3 비상계엄 선포부터 4월 4일 윤석열 대통령 파면까지, 해를 건너 긴
          겨울과 봄을 보내고 여름에 다가서고 있다. 힘겨운 시간이었지만 우리
          민주주의의 놀라운 회복력과 시민들의 저력을 입증한 시간이기도 했다.
          한국사회를 새롭게 할 또 한번의 기회 앞에서 우리는 어떻게 더 큰 힘을
          모아 변혁을 이루어갈 것인가. 윤석열정부의 출범 초기부터 그것이
          촛불혁명 와중에 드러난 ‘변칙적 사태’이며 조기퇴진을 이루어내야 한다고
          주장해온 본지도 새로운 힘을 다진다. 여름호를 내어놓으며 본지
          편집위원인 백영경은 “삶의 현장에서부터 변화를 일구어가는 모두의
          참여”를 요청하며 본지도 “세계와 한반도의 현실을 면밀히 살피며
          2025년체제를 기획”하고 새로운 비전을 모색하는 담론장으로서 최선을
          다하리라는 다짐을 전한다(‘책머리에’).
          <br />
          <br />
          『창작과비평』 2025년 여름호에서 주목할 의제는 ‘2025년체제
          만들기’이다. ‘변혁적 중도’의 관점에서 새 정부의 과제를 살피고
          2025년체제 만들기의 실천적 방안을 집중 논의하는 백낙청‧이남주 특별대담
          「2025년체제, 어떻게 만들 것인가」를 실었다. 해방 80주년을 맞아 분단
          역사를 돌아보고 뼈아픈 교훈을 되새기는 대화 역시 새로운 한반도를 향한
          변화를 촉구한다. 특집에서는 우리를 움직이게 하고 실천을 만들어내는
          ‘감정’에 주목하여 민주주의적 감정과 문학이 접속하는 자리에서 돋아나는
          값진 희망을 전한다. 내란사태의 여진 속에서 그 긴요함을 절감하는
          사법개혁 문제, 대안 경제사상의 원형인 고(故) 박현채를 다룬 논단도
          종요롭다. 빼어난 시·소설 신작과 평론, 작가조명과 산문 등은 여름의
          활기를 깨운다.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-[30px]">
        <Link
          href="https://magazine.changbi.com/MCSubscribe/SubScribeList"
          target="_blank"
          className="bg-[#2c3338] pr-[28px] pl-[30px] inline-block leading-[42px] h-[42px] text-white rounded-[10px] self-end group hover:bg-[#4e5a62] max-sm:mx-auto"
        >
          정기구독 신청하기
          <img
            src="/images/whiterightarrow.svg"
            alt="신청하기"
            className="ml-[10px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300 group-hover:cursor-pointer mt-[15px]"
          />
        </Link>
        <Link
          href="/book-detail"
          className="inline-block pr-[40px] hover:underline group leading-[36px] text-[14px]"
        >
          최신호 구매하기
          <img
            src="/images/rightarrow.svg"
            alt="회사소개"
            className="ml-[8px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300 mt-[12px]"
          />
        </Link>
      </div>
    </div>
  );
}
