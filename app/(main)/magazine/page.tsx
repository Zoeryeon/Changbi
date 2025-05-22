//app /(main) /magazine /page.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function page() {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ['book-list'],
    queryFn: () => {
      return fetch('http://localhost:9090/magazine').then((res) => res.json());
    },
  });

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:py-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
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
              12‧3 비상계엄 선포부터 4월 4일 윤석열 대통령 파면까지, 해를 건너
              긴 겨울과 봄을 보내고 여름에 다가서고 있다. 힘겨운 시간이었지만
              우리 민주주의의 놀라운 회복력과 시민들의 저력을 입증한 시간이기도
              했다. 한국사회를 새롭게 할 또 한번의 기회 앞에서 우리는 어떻게 더
              큰 힘을 모아 변혁을 이루어갈 것인가. 윤석열정부의 출범 초기부터
              그것이 촛불혁명 와중에 드러난 ‘변칙적 사태’이며 조기퇴진을
              이루어내야 한다고 주장해온 본지도 새로운 힘을 다진다. 여름호를
              내어놓으며 본지 편집위원인 백영경은 “삶의 현장에서부터 변화를
              일구어가는 모두의 참여”를 요청하며 본지도 “세계와 한반도의 현실을
              면밀히 살피며 2025년체제를 기획”하고 새로운 비전을 모색하는
              담론장으로서 최선을 다하리라는 다짐을 전한다(‘책머리에’).
              <br />
              <br />
              『창작과비평』 2025년 여름호에서 주목할 의제는 ‘2025년체제
              만들기’이다. ‘변혁적 중도’의 관점에서 새 정부의 과제를 살피고
              2025년체제 만들기의 실천적 방안을 집중 논의하는 백낙청‧이남주
              특별대담 「2025년체제, 어떻게 만들 것인가」를 실었다. 해방
              80주년을 맞아 분단 역사를 돌아보고 뼈아픈 교훈을 되새기는 대화
              역시 새로운 한반도를 향한 변화를 촉구한다. 특집에서는 우리를
              움직이게 하고 실천을 만들어내는 ‘감정’에 주목하여 민주주의적
              감정과 문학이 접속하는 자리에서 돋아나는 값진 희망을 전한다.
              내란사태의 여진 속에서 그 긴요함을 절감하는 사법개혁 문제, 대안
              경제사상의 원형인 고(故) 박현채를 다룬 논단도 종요롭다. 빼어난
              시·소설 신작과 평론, 작가조명과 산문 등은 여름의 활기를 깨운다.
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
            남겨온, 한국을 대표하는 비판적 종합지입니다. 한국문학을 이끌어가는
            주요 작가들의 시·소설 신작을 비롯해 문학에 대한 깊이 있는 비평과
            정치·사회 현안에 대한 논평 등 다양한 글을 만나실 수 있습니다.
            <br />
            <br />
            1966년 1월 『창작과비평』의 창간은 문단과 지식인 사회에 돌풍을
            일으켰습니다. 창간 초기부터 수준 높은 글을 소개하고 가로쓰기 등
            신선한 편집체제를 선보였을 뿐 아니라 신진작가 발굴에도 적극적으로
            나서 화제를 모았습니다. 그러면서 문학적·사상적 자유가 억압되던 당시
            청년 지성의 집결지이자 창조적 논의의 산실로서 자리매김했습니다. 특히
            문학과 인문·사회과학을 결합한 종합지로서의 구성은 국내외적으로도
            드문 일로 평가되며, 지금까지 다양하고 참신한 기획으로 이어져오고
            있습니다.
            <br />
            <br />
            강제폐간, 출판사 등록취소 등 시련을 겪어야 했던 독재정권 시기에는
            수많은 시민들이 『창작과비평』을 지켜주었습니다. ‘창비 책 팔아주기
            운동’이 줄을 잇는가 하면 ‘출판사 등록취소 조치에 항의하는 범지식인
            서명운동’이 전국적으로 벌어졌습니다. 『창작과비평』이 한국현대사의
            여러 부침 속에서도 반세기 넘게 정진해올 수 있었던 것은 이처럼 깨어
            있는 독자 여러분과 함께했기 때문입니다.
            <br />
            <br />
            2023년 여름 200호 발간을 앞두고 있는 『창작과비평』은 ‘창작과 저항의
            거점’으로서 독자와 함께 더 나은 세상을 만들어가겠다는 다짐을 다시금
            새깁니다. 주목받는 작가들과 함께 문학적 깊이와 폭을 더하며 문단에
            활력을 불어넣고, 우리 것을 우리 시각으로 소중하게 보듬으려는 노력을
            지속하는 동시에 세계적 전망 아래 새로운 문명을 열어갈 지혜를 모으기
            위해 힘쓰고자 합니다. 한결같되 날로 새로운 모습으로 『창작과비평』은
            독자 여러분과 함께하겠습니다.
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
        <div className="mt-[100px]">
          <div className="flex items-start justify-between h-[50px] w-full border-b border-b-[#e6e6e6]">
            <h4 className="text-[20px] leading-[34px] tracking-tight max-sm:text-[16px] max-sm:leading-[36px] max-sm:tracking-normal">
              창작과비평 출간목록
            </h4>
            <Link
              href="/magasine-list"
              className="inline-block pr-[10px] hover:underline group leading-[36px] text-[14px]"
            >
              계간지 더보기
              <img
                src="/images/rightarrow.svg"
                alt="회사소개"
                className="ml-[8px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300 mt-[12px]"
              />
            </Link>
          </div>
          {isPending && <p>Loading...</p>}
          {isError && <p>{error.message}</p>}
          <ul className="mt-[80px] items-baseline grid grid-cols-5 gap-y-[70px] gap-x-[50px] max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-x-[20px]">
            {data?.map(
              (
                book: {
                  id: number;
                  title: string;
                  author: string;
                  image: string;
                  series: string;
                  date: string;
                  price: string;
                  category: string;
                },
                index: number
              ) => (
                <li
                  key={book.id}
                  className={`block ${index >= 3 ? 'max-md:hidden' : ''} ${
                    index >= 2 ? 'max-sm:hidden' : ''
                  }`}
                >
                  <Link href="/book-detail" className="relative group">
                    <div className="relative overflow-hidden border border-[#e6e6e6]">
                      <img
                        src={book.image}
                        alt="창작과비평"
                        className="w-full h-auto align-baseline -mb-[5px]"
                      />
                      <div className="absolute bottom-0 p-[16px] bg-[#00001480] leading-[28px] w-full flex flex-col backdrop-blur-sm text-[#eee] text-[14px] transition-transform duration-300 translate-y-[100%] group-hover:translate-y-0 max-sm:leading-[26px]">
                        <div>
                          <span>{book.series}</span>
                        </div>

                        <div>
                          <span>
                            {book.date}
                            <br />
                          </span>
                          <span>{book.price}</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="mt-[10px] -mb-[4px] text-[20px] leading-[34px] font-medium group-hover:underline max-sm:text-[16px] max-sm:leading-[26px]">
                      {book.title}
                    </h4>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}
