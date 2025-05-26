//app /components /magazine /Homepage.tsx

import Link from 'next/link';

export default function Homepage() {
  return (
    <div className="max-w-[964px] m-auto border-t border-t-[#e6e6e6] py-[88px] text-justify max-sm:py-[78px]">
      <h3 className="mb-[70px] text-[30px] font-medium leading-[56px] tracking-tight max-sm:text-[18px] max-sm:leading-[32px] max-sm:break-keep max-sm:tracking-normal">
        계절마다
        <br />
        당신의 문학이 더 깊어집니다
        <br />
        당신의 관점이 더 넓어집니다
      </h3>
      <p className="leading-[32px] max-sm:text-[14px] max-sm:leading-[26px]">
        계간 『창작과비평』은 지난 50여년간 우리 문학과 지성계에 큰 발자취를
        남겨온, 한국을 대표하는 비판적 종합지입니다. 한국문학을 이끌어가는 주요
        작가들의 시·소설 신작을 비롯해 문학에 대한 깊이 있는 비평과 정치·사회
        현안에 대한 논평 등 다양한 글을 만나실 수 있습니다.
        <br />
        <br />
        1966년 1월 『창작과비평』의 창간은 문단과 지식인 사회에 돌풍을
        일으켰습니다. 창간 초기부터 수준 높은 글을 소개하고 가로쓰기 등 신선한
        편집체제를 선보였을 뿐 아니라 신진작가 발굴에도 적극적으로 나서 화제를
        모았습니다. 그러면서 문학적·사상적 자유가 억압되던 당시 청년 지성의
        집결지이자 창조적 논의의 산실로서 자리매김했습니다. 특히 문학과
        인문·사회과학을 결합한 종합지로서의 구성은 국내외적으로도 드문 일로
        평가되며, 지금까지 다양하고 참신한 기획으로 이어져오고 있습니다.
        <br />
        <br />
        강제폐간, 출판사 등록취소 등 시련을 겪어야 했던 독재정권 시기에는 수많은
        시민들이 『창작과비평』을 지켜주었습니다. ‘창비 책 팔아주기 운동’이 줄을
        잇는가 하면 ‘출판사 등록취소 조치에 항의하는 범지식인 서명운동’이
        전국적으로 벌어졌습니다. 『창작과비평』이 한국현대사의 여러 부침
        속에서도 반세기 넘게 정진해올 수 있었던 것은 이처럼 깨어 있는 독자
        여러분과 함께했기 때문입니다.
        <br />
        <br />
        2023년 여름 200호 발간을 앞두고 있는 『창작과비평』은 ‘창작과 저항의
        거점’으로서 독자와 함께 더 나은 세상을 만들어가겠다는 다짐을 다시금
        새깁니다. 주목받는 작가들과 함께 문학적 깊이와 폭을 더하며 문단에 활력을
        불어넣고, 우리 것을 우리 시각으로 소중하게 보듬으려는 노력을 지속하는
        동시에 세계적 전망 아래 새로운 문명을 열어갈 지혜를 모으기 위해 힘쓰고자
        합니다. 한결같되 날로 새로운 모습으로 『창작과비평』은 독자 여러분과
        함께하겠습니다.
      </p>
      <div className="mt-[70px] text-center">
        <Link
          href="https://magazine.changbi.com"
          target="_blank"
          className="bg-[#2c3338] pr-[28px] pl-[30px] inline-block leading-[42px] h-[42px] text-white rounded-[10px] self-end group hover:bg-[#4e5a62] max-sm:mx-auto"
        >
          『창작과비평』 홈페이지
          <img
            src="/images/whiterightarrow.svg"
            alt="신청하기"
            className="ml-[10px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300 group-hover:cursor-pointer mt-[15px]"
          />
        </Link>
      </div>
    </div>
  );
}
