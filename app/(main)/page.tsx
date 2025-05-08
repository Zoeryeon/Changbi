// app /page.tsx
import { formatDate } from '@/app/_lib/utils';
import Link from 'next/link';

export default function Home() {
  const now = formatDate(new Date());
  return (
    <main className="mt-[20px] pt-[148px] px-[50px] 2xl:px-[118px] pb-[150px] h-auto">
      <div className="relative flex items-start justify-between pt-[100px] pb-[180px] border-b border-b-[#e6e6e6]">
        <div className="flex flex-col justify-between h-auto">
          <h2 className="text-[56px] font-medium leading-24">
            한결같되
            <br /> 날로 새롭게
          </h2>
          <span className="my-[20px] text-[20px] leading-[34px]">
            1966년부터 지금까지 <br /> 독자와 함께 더 나은 세상을
          </span>
          <Link
            href="/about"
            className="inline-block pr-[40px] leading-[36px] font-medium text-[14px] bg-[url('/images/rightarrow.svg')] bg-[right_5px_center] bg-no-repeat"
          >
            회사 소개 보러가기
          </Link>
        </div>
        <div className="w-[760px] 2xl:w-[964px]">
          <img
            src="/images/main-visual-202403.png"
            alt="메인사진"
            className="w-full"
          />
        </div>
      </div>

      <div className="py-[180px] relative flex items-start justify-between">
        <div>
          <h2 className="font-medium text-[30px] leading-[56px]">
            창비 새소식
          </h2>
          <Link
            href="/NewsList?page=1"
            className="inline-block pr-[40px] leading-[36px] font-medium text-[14px] bg-[url('/images/rightarrow.svg')] bg-[right_5px_center] bg-no-repeat"
          >
            더보기
          </Link>
        </div>
      </div>
      <Link href="/blog">blog</Link>
      <Link href="/products">products</Link>
      <Link href="/articles/breaking-news-123">read in korean</Link>
      <Link href="/articles/breaking-news-123?lang=en">read in english</Link>
      <Link href="/articles/breaking-news-123?lang=fr">read in franch</Link>
    </main>
  );
}
