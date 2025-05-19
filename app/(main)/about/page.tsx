//app /(main) /about /page.tsx
'use client';

import { useState } from 'react';

const yearList = [
  '2020s',
  '2010s',
  '2000s',
  '1990s',
  '1980s',
  '1970s',
  '1960s',
];

export default function page() {
  const [year, setYear] = useState('2020s');
  const [history, sethistory] = useState('2020s');

  function handleYear(selectedYear: string) {
    setYear(selectedYear);
  }
  function handleHistory(selectedHistory: string) {
    sethistory(selectedHistory);
  }

  return (
    <main>
      <div className="flex flex-col h-[870px] bg-[url('/images/about-bg.png')] bg-no-repeat bg-center bg-cover text-center justify-center gap-y-[10px] mt-[80px]">
        <h2 className="text-[40px] tracking-tight leading-[60px] font-bold">
          한결같되
          <br />
          날로 새롭게
        </h2>
        <p className="text-[20px] leading-[43px] tracking-tight">
          독자와 함께 더 나은 세상을
        </p>
      </div>
      <div className="flex items-start justify-end gap-[92px] border-t border-t-[#e6e6e6] pt-[150px] text-justify break-all m-auto px-[130px] max-[1800px]:px-[100px] max-[1600px]:px-[80px] max-[1500px]:px-[60px] pb-[150px]">
        <div>
          <h2 className="text-right text-[40px] tracking-tight leading-[60px] break-keep font-bold">
            창비는
          </h2>
        </div>
        <div className="w-[964px] leading-[32px] tracking-tight">
          <p className="mb-[60px]">
            한국의 종합출판사로서 문학, 인문, 교양, 어린이, 청소년, 그림책 등
            다양한 분야의 양서를 출간하고 있습니다. 또한 교과서 발행, 미디어
            서비스 제공, 강좌 운영 등을 통해 새로운 지식문화 창조에 힘쓰고
            있습니다. 창비는 최고 수준의 편집과 디자인, 마케팅을 통해 작가가
            뛰어난 작품을 생산해낼 수 있도록 지원하며, 책을 매개로 더 나은
            세상을 만들어나가는 데 이바지하고자 합니다.
          </p>
          <strong className="font-medium leading-[32px]">
            새로운 문학과 비판적 담론의 산실
          </strong>
          <p className="mb-[60px]">
            창비의 연원은 1966년 1월 창간된 계간 『창작과비평』으로 거슬러
            올라갑니다. 창간편집인 백낙청 등의 주도로 시작된 『창작과비평』은
            최초 서울 종로구 공평동에 자리한 문우출판사의 이름을 빌려
            발행됐지만, 우리 문단과 지식인 사회에 신선한 충격을 주는 수준 높은
            내용으로 독자들의 주목을 받았습니다.
            <br />
            이어서 창비는 1974년 ‘창비신서’, 1975년 ‘창비시선’, 1977년
            ‘창비아동문고’를 간행하며 본격적인 단행본 출판 시대를 엽니다. 새로운
            지식과 문학을 고대하던 많은 이들에게 창비의 활동은 신선한 감동과
            충격이었습니다.
            <br />
            1990년대 창비는 한층 다양한 도서들을 내어놓는 역동적인 출판사로서
            새롭게 인식됩니다. 많은 화제작과 명저를 선보이며 도서의 결을
            다양화하고 더 많은 독자들과 만났습니다. <br />
            2000년대 창비는 창비신인문학상(시·소설·평론)을 제정해 주목할 만한
            신예를 적극 발굴했고, ‘아동서’ 분야를 어린이·청소년으로
            분화·확장했습니다. 특히 독자들의 꾸준한 관심과 사랑을 받는 화제작을
            필두로 청소년문학의 새로운 장을 열었다는 평가를 받고 있습니다.
          </p>
          <strong className="font-medium leading-[32px]">
            과감한 도전과 혁신을 통한 도약
          </strong>
          <p className="mb-[60px]">
            21세기 창비의 도전과 혁신은 이어져오고 있습니다. 2003년 회사명을
            ‘창작과비평사’에서 ‘창비’로 바꾸고 파주출판단지에 새로운 터를
            잡았습니다. 이곳에서 창비는 한국문학에 새로운 물결을 일으키는 작품을
            출간하고, 국내외 저명학자의 연구성과는 물론 다양한 분야에서 알찬
            교양서를 출간했습니다. 아동·청소년 도서의 활성화를 통해 전세대
            독자를 아우르며 종합출판사로서 위상을 굳건히 했습니다.
            <br />
            아울러 교육출판을 시작해 중고등학교 교과서와 교육서적에 혁신을
            불러일으켰고, 전자책과 오디오북 사업을 비롯해 미디어 콘텐츠 제작에도
            힘쓰고 있습니다. 2014년 법인으로 설립한 ‘창비교육’과 2009년 설립한
            ‘미디어창비’에서 의미 있는 성과를 내고 있습니다.
            <br />
            종합 독서체험 온라인 플랫폼 ‘창비 스위치’와 문예·인문 교육을 위한
            ‘창비학당’, 사서교사들을 위한 수서정보 플랫폼 ‘책씨앗’, 일선
            교원들의 전문성 강화 프로그램인 ‘창비교육연수원’을 비롯해 지역
            독자들을 위한 문화교류 네트워크인 ‘창비부산’에 이르기까지, 현재
            창비는 온오프라인에서 독자들과 다양한 접점을 만들어가고 있습니다.
          </p>
          <strong className="font-medium leading-[32px]">
            독자와 함께, 새 문명 창조를 위하여
          </strong>
          <p className="mb-[60px]">
            지난 50여년 창비의 곁에는 늘 수많은 저자와 독자가 있었습니다. 이러한
            성원 덕분에 창비는 동력을 잃지 않았으며, 새로운 문학의 산실이자
            창조적인 담론 생산의 장으로 성장했습니다.
            <br />
            창비는 앞으로도 참다운 교양을 가꿀 수 있는 양서로 문학과 예술,
            담론을 선도하며 독자들의 변함없는 사랑과 지지에 보답하고자 합니다.
            새로운 문명사적 전환이 그 어느 때보다 절실히 요청되는 지금, 창비는
            세계의 흐름을 함께 호흡하며 미래를 열어가는 지혜의 보고로서
            ‘한결같되 날로 새롭게’ 독자 여러분과 함께하겠습니다.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-end gap-[92px] border-t border-t-[#e6e6e6] pt-[150px] text-justify break-all m-auto px-[130px] max-[1800px]:px-[100px] max-[1600px]:px-[80px] max-[1500px]:px-[60px] pb-[150px]">
        <div>
          <h2 className="text-right text-[40px] tracking-tight leading-[60px] break-keep font-bold">
            연혁
          </h2>
          <div className="mt-[80px]">
            {yearList.map((item) => (
              <button
                key={item}
                type="button"
                className={`block h-[42px] w-[204px] pl-[25px] leading-[42px] rounded-[10px] mb-[20px] ml-[1px] text-left ${
                  year === item
                    ? 'bg-[#2c3338] text-white'
                    : 'bg-point1 hover:bg-[#e7e7e8]'
                }`}
                onClick={() => handleYear(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="w-[964px] leading-[32px] border-l border-l-[#e6e6e6] min-h-[700px] pl-[90px]">
          <div className="mb-[60px]">
            <h3 className="leading-[44px] mb-[2px] text-[30px] font-medium">
              2024
            </h3>
            <p className=" leading-[32px] tracking-tight">
              7월 창비 60주년 기념 ‘창비 한국사상선’ 1차분 10종 출간. 10월
              본사에서 『채식주의자』 『소년이 온다』를 출간한 한강 소설가
              노벨문학상 수상. 김해자 시집 『니들의 시간』 5·18문학상 본상 수상.
              임형택 『실사구시의 한국학』 제5회 한국학저술상 수상. 『순한
              먼지들의 책방』을 출간한 정우영 시인 제21회 이육사 시문학상 수상.
              최은미 장편소설 『마주』, 신철규 시집 『심장보다 높이』 제22회
              유심상 수상. 황유원 시집 『하얀 사슴 연못』 제24회 노작문학상
              수상. 박현민 그림책 『진정한 친구가 되는 법』 2024 대한민국
              그림책상 대상 수상. 이영광 시집 『살 것만 같던 마음』 제26회
              백석문학상 수상. 권선희 시집 『푸른 바다 검게 울던 물의 말』
              제16회 구상문학상 수상. 『알로하, 나의 엄마들』을 출간한 이금이
              소설가 대한민국 문화예술상 수상. 김동수 그림책 『오늘의 할 일』
              제65회 한국출판문화상 어린이·청소년 부문 수상
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-end gap-[92px] border-t border-t-[#e6e6e6] pt-[150px] text-justify break-all m-auto px-[130px] max-[1800px]:px-[100px] max-[1600px]:px-[80px] max-[1500px]:px-[60px] pb-[150px]">
        <div>
          <h2 className="text-right text-[40px] tracking-tight leading-[60px] break-keep font-bold">
            사진으로 보는
            <br />
            창비의 역사
          </h2>
          <div className="mt-[80px]">
            {yearList.map((item) => (
              <button
                key={item}
                type="button"
                className={`block h-[42px] w-[204px] pl-[25px] leading-[42px] rounded-[10px] mb-[20px] ml-[1px] text-left ${
                  history === item
                    ? 'bg-[#2c3338] text-white'
                    : 'bg-point1 hover:bg-[#e7e7e8]'
                }`}
                onClick={() => handleHistory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="w-[964px] leading-[32px] border-l border-l-[#e6e6e6] min-h-[700px] pl-[90px]">
          <div className="mb-[60px]">
            <h3 className="leading-[44px] mb-[2px] text-[30px] font-medium">
              2022년 1월 1일
            </h3>
            <img
              src="/images/220101.jpg"
              alt="역사"
              className="max-w-full max-h-[354px]"
            />
            <h4 className="leading-[32px] font-medium">
              『창작과비평』 신임 주간·부주간 취임
            </h4>
            <span className=" leading-[32px] tracking-tight">
              왼쪽부터 이남주 주간, 황정아·백지연 부주간
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
