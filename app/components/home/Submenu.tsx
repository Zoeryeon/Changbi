//app /components /home /Submenu.tsx
'use client';

import Link from 'next/link';

export default function Submenu({ isOpen }: { isOpen: boolean }) {
  return (
    <nav
      className={`hidden max-sm:block w-[260px] h-screen fixed -right-[260px] top-0 pt-[12px] px-[20px] border-l border-l-[#e6e6e6] bg-white z-40 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div>
        <ul>
          <li className="border-b border-b-[#707070]">
            <span className="text-[28px] font-bold leading-[56px]">창비</span>
            <ul className=" leading-[44px] font-medium text-[18px">
              <li className="border-t border-t-[#e6e6e6]">
                <Link href="/about">회사 소개</Link>
              </li>
              <li className="border-t border-t-[#e6e6e6]">
                <Link href="/about">공동체</Link>
              </li>
              <li className="border-t border-t-[#e6e6e6]">
                <Link href="/about">새소식</Link>
              </li>
              <li className="border-t border-t-[#e6e6e6]">
                <Link href="/about">오시는 길</Link>
              </li>
              <li className="border-t border-t-[#e6e6e6]">
                <Link href="/about">채용</Link>
              </li>
            </ul>
          </li>
          <li className="border-b border-b-[#707070]">
            <span className="text-[28px] font-bold leading-[56px]">도서</span>
            <ul className=" leading-[44px] font-medium text-[18px">
              <li className="border-t border-t-[#e6e6e6]">
                <Link href="/about">창비의 책</Link>
              </li>
              <li className="border-t border-t-[#e6e6e6]">
                <Link href="/about">저자</Link>
              </li>
              <li className="border-t border-t-[#e6e6e6]">
                <Link href="/about">자료실</Link>
              </li>
            </ul>
          </li>
          <li className="border-b border-b-[#707070]">
            <span className="text-[28px] font-bold leading-[56px]">매거진</span>
            <ul className=" leading-[44px] font-medium text-[18px">
              <li className="border-t border-t-[#e6e6e6]">
                <Link href="/about">창작과비평</Link>
              </li>
              <li className="border-t border-t-[#e6e6e6]">
                <Link href="/about">창비어린이</Link>
              </li>
            </ul>
          </li>
          <li className="border-b border-b-[#707070]">
            <span className="text-[28px] font-bold leading-[56px]">
              문학상/투고
            </span>
            <ul className=" leading-[44px] font-medium text-[18px">
              <li className="border-t border-t-[#e6e6e6]">
                <Link href="/about">문학상/공모</Link>
              </li>
              <li className="border-t border-t-[#e6e6e6]">
                <Link href="/about">단행본 투고</Link>
              </li>
            </ul>
          </li>
          <li className="border-b border-b-[#707070]">
            <span className="text-[28px] font-bold leading-[56px]">문의</span>
            <ul className=" leading-[44px] font-medium text-[18px">
              <li className="border-t border-t-[#e6e6e6]">
                <Link href="/about">1:1 문의</Link>
              </li>
              <li className="border-t border-t-[#e6e6e6]">
                <Link href="/about">2차 저작권 안내</Link>
              </li>
            </ul>
          </li>
          <li className="border-b border-b-[#707070]">
            <Link
              href="http://en.changbi.com"
              target="_blank"
              className="text-[28px] font-bold leading-[56px]"
            >
              영문 ENG
            </Link>
          </li>
          <li className="border-b border-b-[#707070]">
            <Link
              href="https://class.changbiedu.com/"
              target="_blank"
              className="text-[28px] font-bold leading-[56px]"
            >
              창비교육 교과서
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
