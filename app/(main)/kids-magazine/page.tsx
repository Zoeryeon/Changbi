//app /(main) /kids-magazine /page.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function page() {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ['book-list'],
    queryFn: () => {
      return fetch('http://localhost:9090/kids-magazine').then((res) =>
        res.json()
      );
    },
  });

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:py-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
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
              다양한 필자가 들려주는 종이책 이야기를 통해 손으로 직접 책장을
              넘기고 눈으로 따라 읽는 독서가 어린이의 성장에 미치는 긍정적인
              영향을 살핀다. 이에 더해 다양한 직업군의 어른이 모여
              아동청소년문학을 읽는 북클럽 ‘사춘기 탐구생활’ 운영기와 동시를
              활용해 문해력을 키우는 초등학교 1학년 교실을 소개한 ‘시와 함께하는
              1학년 공부’를 수록했다. 읽기 너머 쓰기, 듣기, 말하기로 무한히
              확장하는 독서 현장을 생생히 전하며 ‘나’와 타인을 잇는 연결고리로써
              종이책의 역할을 조명한다. 이외에도 ‘해묵은 동시’ 논쟁 이후 동시의
              현재와 미래를 가늠하는 김제곤의 평론, 다른 생명과 연대하며
              성장하는 어린이·청소년의 모습을 담은 창작란, 어린이와 꿈의 관계를
              그린 이다의 만화, 제23회 대산대학문학상 동화 부문 발표 등 다채로운
              읽을거리가 담겼다.
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
          <p className="leading-[32px] max-sm:text-[14px] max-sm:leading-[26px]">
            계간 『창비어린이』는 2003년 창간된 아동청소년문학 전문 비평지로,
            매호 국내 동시, 동화, 청소년소설 장르의 우수작을 엄선하여
            게재함으로써 창작자에게 지속적인 활동 지면을 보장하고 창작 에너지를
            북돋고 있습니다. 또 아동청소년문학의 현주소를 정밀하게 진단하고
            미래지향적 전망을 모색하는 비평의 장을 마련하는 한편, 외국의 주요
            비평이론을 소개하여 우리 아동청소년문학의 수준을 한 단계 높이는 데
            기여하고 있습니다. 이를 통해 독자에게 수준 높은 아동청소년문학
            향유의 기회를 제공함으로써 한국 아동청소년문학 발전의 토대로서
            기능함을 목적으로 합니다.
            <br />
            <br />
            계간 『창비어린이』는 한국 아동문학의 도전, 개척, 논쟁을 이끌어 내는
            데 앞장서고자 노력 중입니다. 한국 아동문학의 근대성에 대한 성찰,
            현대 외국 아동문학의 성과에 대한 점검, 번역·인터뷰·대담 형식을 통한
            외국 아동문학과의 직접적인 교류 등을 지면 기획의 바탕으로 삼고
            있습니다. 또 매년 1회, 창간 기념 세미나를 개최하여 한국 아동문학의
            근대성을 비판적으로 검토하고 현대성의 과제를 제기하며 뜨거운
            현장토론을 이끌어 내고 있습니다.
            <br />
            <br />
            계간 『창비어린이』는 어린이문화에 관한 지속적인 관심을 통해
            어린이와 시대의 소통을 돕는 데 노력을 기울이고 있습니다. 하루가
            다르게 변화를 거듭하는 시대와 어린이가 교차하는 지점―학교, 도서관,
            학원, 텔레비전, 인터넷, 영화, 출판 등―모든 영역에서 진지한 담론을
            형성하기 위해 노력하고 있습니다.
          </p>
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
          <ul className="mt-[80px] items-baseline grid grid-cols-5 gap-y-[70px] gap-x-[40px] max-md:grid-cols-3 max-md:gap-x-[30px] max-sm:grid-cols-2 max-sm:gap-x-[20px]">
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
