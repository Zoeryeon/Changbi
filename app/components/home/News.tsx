//app /components /home /News.tsx
import Link from 'next/link';

export default function News() {
  // 뉴스 데이터를 배열로 정의
  const newsData = [
    {
      id: 6894,
      title: '『창비어린이』 창간 22주년 기념 세미나 관련 안내',
      category: '소식',
      date: '2025.04.08',
    },
    {
      id: 6894,
      title: '제3회 창비그림책상 수상작 발표',
      category: '발표',
      date: '2025.03.17',
    },
    {
      id: 6894,
      title: '㈜창비교육 마케팅 관리팀 사원을 모집합니다.',
      category: '채용',
      date: '2025.03.05',
    },
    {
      id: 6894,
      title: '백영서 『창작과비평』 전 편집주간, 제31회 용재학술상 수상',
      category: '소식',
      date: '2025.02.26',
    },
    {
      id: 6894,
      title: '2025 창비 어린이·청소년 통합시상식 관련 안내',
      category: '소식',
      date: '2025.02.05',
    },
  ];

  return (
    <div className="py-[180px] relative max-md:py-[100px] max-md:relative max-md:block border-b border-[#e6e6e6] max-sm:py-[70px]">
      <div className="max-w-[1770px] mx-auto px-[60px] flex justify-between max-md:flex-col">
        <div className="shrink-0">
          <h2 className="font-medium text-[30px] leading-[56px] max-sm:text-[18px] max-sm:leading-[32px] break-keep">
            창비 새소식
          </h2>
          <Link
            href="/NewsList?page=1"
            className="inline-flex pr-[40px] leading-[36px] font-medium text-[14px] items-center hover:underline group max-sm:font-normal"
          >
            더보기
            <img
              src="/images/rightarrow.svg"
              alt="새소식"
              className="ml-[10px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300"
            />
          </Link>
        </div>
        <ul className="w-[964px] border-t border-t-[#e6e6e6] break-keep max-md:mt-[36px] max-md:w-full max-sm:mt-[12px]">
          {newsData.map((news, index) => (
            <li key={index}>
              <Link
                href={`/NewsDetail?newsid=${news.id}`}
                className="flex flex-col justify-center border-b border-b-[#e6e6e6] pt-[14px] pb-[13px] hover:bg-[#f6f6f6]"
              >
                <strong className="flex items-start text-[20px] leading-[34px] max-sm:flex-col max-sm:text-[16px] max-sm:leading-[26px]">
                  <em className="inline-block bg-[#f7f7f7] py-[2px] px-[12px] rounded-[4px] mr-[12px] mt-[1px] text-[14px] leading-[28px] max-sm:text-[12px] max-sm:px-[8px] max-sm:mt-0 max-sm:mb-[4px] max-sm:leading-[26px]">
                    {news.category}
                  </em>
                  {news.title}
                </strong>
                <span className="text-[14px] leading-[28px] max-sm:leading-[26px]">
                  {news.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
