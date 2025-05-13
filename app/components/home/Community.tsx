//app /components /home /Community.tsx
import Link from 'next/link';

export default function Community() {
  return (
    <div className="text-[14px] leading-[28px] text-gray-500">
      커뮤니티
      <div className="flex flex-wrap max-w-[666px] max-2xl:max-w-[540px] max-md:max-w-[560px] max-md:w-full max-sm:block">
        <Link
          href="https://class.changbiedu.com/"
          target="_blank"
          className="flex w-[50%] h-[84px] items-center gap-x-[10px] max-sm:w-full"
        >
          <img
            src="/images/changbi_edu.png"
            alt="창비교육 교과서"
            className="max-w-[60px] max-h-[60px] ml-[9px]"
          />
          <span className="ml-[11px] text-[14px] leading-[28px] text-gray-500 hover:underline">
            국어│사회│미술
            <br />
            수업지원자료실
          </span>
        </Link>
        <Link
          href="https://club.changbi.com/"
          target="_blank"
          className="flex w-[50%] h-[84px] items-center gap-x-[10px] max-sm:w-full"
        >
          <img
            src="/images/클럽창비.svg"
            alt="클럽창비"
            className="max-w-[80px] max-h-[80px]"
          />
          <span className="ml-[11px] text-[14px] leading-[28px] text-gray-500 hover:underline">
            프리미엄 독서 멤버십 서비스,
            <br />
            클럽창비
          </span>
        </Link>
        <Link
          href="https://www.instagram.com/changbibusan/"
          target="_blank"
          className="flex w-[50%] h-[84px] items-center gap-x-[10px] max-sm:w-full"
        >
          <img
            src="/images/changbibusan.svg"
            alt="창비부산"
            className="max-w-[80px] max-h-[80px]"
          />
          <span className="ml-[11px] text-[14px] leading-[28px] text-gray-500 hover:underline">
            책과 이야기가
            <br />
            머무는 공간, 창비부산
          </span>
        </Link>
        <Link
          href="https://www.instagram.com/cafe_changbi/"
          target="_blank"
          className="flex w-[50%] h-[84px] items-center gap-x-[10px] max-sm:w-full"
        >
          <img
            src="/images/cafechangbi.svg"
            alt="카페창비"
            className="max-w-[80px] max-h-[80px]"
          />
          <span className="ml-[11px] text-[14px] leading-[28px] text-gray-500 hover:underline">
            일상을 깨우는
            <br />
            책과 커피, 카페창비
          </span>
        </Link>
      </div>
      <hr className="h-[1px] bg-[#ddd] border-none max-sm:h-0" />
    </div>
  );
}
