//app /components /home /LinkList.tsx
import Link from 'next/link';

export default function LinkList() {
  return (
    <div className="flex gap-x-[48px] max-2xl:gap-x-[20px] max-md:gap-x-[48px]  max-sm:flex-wrap max-sm:gap-y-[20px] max-sm:gap-x-0">
      <span className="text-gray-400 text-[14px] leading-[28px] max-sm:w-[50%]">
        회사/연구
        <div className="pt-[12px]">
          <Link
            href="http://en.changbi.com/"
            target="_blank"
            className="block text-[14px] leading-[28px] text-gray-500 hover:underline"
          >
            Changbi English
          </Link>
          <Link
            href="http://www.changbiedu.com/"
            target="_blank"
            className="block text-[14px] leading-[28px] text-gray-500 hover:underline"
          >
            창비교육
          </Link>
          <Link
            href="http://www.mediachangbi.com/"
            target="_blank"
            className="block text-[14px] leading-[28px] text-gray-500 hover:underline"
          >
            미디어창비
          </Link>
          <Link
            href="http://www.segyo.org/"
            target="_blank"
            className="block text-[14px] leading-[28px] text-gray-500 hover:underline"
          >
            세교연구소
          </Link>
        </div>
      </span>
      <span className="text-[#999] text-[14px] leading-[28px]">
        연재
        <div className="pt-[12px]">
          <Link
            href="https://magazine.changbi.com/"
            target="_blank"
            className="block text-[14px] leading-[28px] text-gray-500 hover:underline"
          >
            창작과비평 전자구독
          </Link>
          <Link
            href="https://www.siyoil.com/"
            target="_blank"
            className="block text-[14px] leading-[28px] text-gray-500 hover:underline"
          >
            시요일
          </Link>
        </div>
      </span>
      <span className="text-[#999] text-[14px] leading-[28px] max-sm:w-[50%]">
        도서관/학교
        <div className="pt-[12px]">
          <Link
            href="https://bookseed.kr/"
            target="_blank"
            className="block text-[14px] leading-[28px] text-gray-500 hover:underline"
          >
            책씨앗
          </Link>
          <Link
            href="http://www.thechaek.com/"
            target="_blank"
            className="block text-[14px] leading-[28px] text-gray-500 hover:underline"
          >
            더책
          </Link>
          <Link
            href="https://audioschool.kr/"
            target="_blank"
            className="block text-[14px] leading-[28px] text-gray-500 hover:underline"
          >
            오디오스쿨
          </Link>
          <Link
            href="https://teacher.changbiedu.com/"
            target="_blank"
            className="block text-[14px] leading-[28px] text-gray-500 hover:underline"
          >
            창비교육연수원
          </Link>
        </div>
      </span>
      <span className="text-[#999] text-[14px] leading-[28px]">
        대관
        <div className="pt-[12px]">
          <Link
            href="http://changbi.net/"
            target="_blank"
            className="block text-[14px] leading-[28px] text-gray-500 hover:underline"
          >
            창비서교빌딩
          </Link>
          <Link
            href="http://studio.changbi.com/"
            target="_blank"
            className="block text-[14px] leading-[28px] text-gray-500 hover:underline"
          >
            스튜디오 창비
          </Link>
        </div>
      </span>
    </div>
  );
}
