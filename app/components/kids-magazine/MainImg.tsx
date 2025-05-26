//app /components /kids-magazine /MainImg.tsx

import Link from 'next/link';

export default function MainImg() {
  return (
    <div className="flex flex-col items-center mt-[60px] mb-[140px] text-justify max-sm:mb-[88px]">
      <img
        src="/images/250227_5c8983a7-74c5-485e-ac62-5324c40b4948.jpg"
        alt="창비어린이"
        className="max-w-[260px] w-[calc(100%-110px)] max-sm:w-[calc(100%-150px)]"
      />
      <h4 className="mt-[80px] text-[20px] leading-[34px] tracking-tight max-sm:text-[16px] max-sm:leading-[26px] max-sm:tracking-normal">
        계간 창비어린이
      </h4>
      <h2 className="mt-[10px] text-center text-[40px] leading-[60px] font-bold max-sm:text-[28px] max-sm:leading-[40px] max-sm:break-keep">
        창비어린이 88호(2025년 봄호)
      </h2>
      <div className="max-w-[964px] mt-[70px] mb-[70px] leading-[32px] max-sm:text-[14px] max-sm:leading-[26px]">
        <p>
          봄호 특집 ‘AI 시대와 종이책’은 최근 정부가 내놓은 AI 디지털 교과서
          정책에 문제를 제기하며 어린이에게 종이책의 경험이 필요한 이유를
          탐색한다. 문학 교육학자, 작가, 편집자, 평론가, 도서관장, 번역가 등
          다양한 필자가 들려주는 종이책 이야기를 통해 손으로 직접 책장을 넘기고
          눈으로 따라 읽는 독서가 어린이의 성장에 미치는 긍정적인 영향을 살핀다.
          이에 더해 다양한 직업군의 어른이 모여 아동청소년문학을 읽는 북클럽
          ‘사춘기 탐구생활’ 운영기와 동시를 활용해 문해력을 키우는 초등학교
          1학년 교실을 소개한 ‘시와 함께하는 1학년 공부’를 수록했다. 읽기 너머
          쓰기, 듣기, 말하기로 무한히 확장하는 독서 현장을 생생히 전하며 ‘나’와
          타인을 잇는 연결고리로써 종이책의 역할을 조명한다. 이외에도 ‘해묵은
          동시’ 논쟁 이후 동시의 현재와 미래를 가늠하는 김제곤의 평론, 다른
          생명과 연대하며 성장하는 어린이·청소년의 모습을 담은 창작란, 어린이와
          꿈의 관계를 그린 이다의 만화, 제23회 대산대학문학상 동화 부문 발표 등
          다채로운 읽을거리가 담겼다.
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
