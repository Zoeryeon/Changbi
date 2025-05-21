//app /components /home /Comment.tsx
import Link from 'next/link';

export default function Comment() {
  // 논평 데이터를 배열로 정의
  const commentData = [
    {
      id: 1876,
      title: '동동 안동산불, 7일간의 전쟁',
      author: '안상학',
      date: '2025.04.29',
      url: 'https://magazine.changbi.com/MCWC/WeeklyItem/1876',
    },
    {
      id: 1875,
      title: '2025년 공적연금 개혁, 큰 변화를 위한 작은 한걸음',
      author: '최영준',
      date: '2025.04.22',
      url: 'https://magazine.changbi.com/MCWC/WeeklyItem/1875',
    },
    {
      id: 1874,
      title: "새 정부는 '민생 목적 증세'에 나서라",
      author: '오건호',
      date: '2025.04.15',
      url: 'https://magazine.changbi.com/MCWC/WeeklyItem/1874',
    },
  ];

  return (
    <div className="py-[180px] relative max-md:py-[100px] max-md:relative max-md:block max-sm:py-[70px]">
      <div className="max-w-[1770px] mx-auto px-[60px] flex justify-between max-md:flex-col max-sm:px-[28px]">
        <div className="shrink-0 mr-[100px]">
          <h2 className="font-medium text-[30px] leading-[56px] max-sm:text-[18px] max-sm:leading-[32px] max-sm:break-keep">
            창비주간논평
          </h2>
          <h4>더 나은 세상을 위해 발신하는 주간 온라인 칼럼</h4>
          <br />
          <Link
            href="https://magazine.changbi.com/MCWC/Weekly"
            target="_blank"
            className="inline-flex pr-[40px] leading-[36px] font-medium text-[14px] items-center hover:underline group max-sm:font-normal"
          >
            더보기
            <img
              src="/images/rightarrow.svg"
              alt="더보기"
              className="ml-[10px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300"
            />
          </Link>
        </div>
        <div className="w-[964px] border-t border-t-[#e6e6e6] flex flex-col items-end max-md:mt-[35px] max-md:w-full max-sm:mt-[12px]">
          <ul className="w-full break-keep">
            {commentData.map((comment, index) => (
              <li key={index}>
                <Link
                  href={comment.url}
                  target="_blank"
                  className="flex flex-col justify-center h-[140px] border-b border-b-[#e6e6e6] hover:bg-[#f6f6f6] max-md:pt-[14px] max-md:pb-[13px] max-md:h-auto"
                >
                  <span className="text-[20px] leading-[34px] max-sm:text-[16px] max-sm:leading-[26px]">
                    {comment.title}
                  </span>
                  <span className="text-[14px] leading-[28px]">
                    {comment.author} - {comment.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/mailing-apply"
            className="inline-flex pr-[40px] leading-[36px] font-medium text-[14px] items-center hover:underline group mt-[10px] max-sm:font-normal"
          >
            주간논평 메일링 신청하기
            <img
              src="/images/rightarrow.svg"
              alt="더보기"
              className="ml-[10px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
