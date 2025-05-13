// app/ui/home/Footer.tsx
import Community from '@/app/components/home/Community';
import LinkList from '@/app/components/home/LinkList';
import Snsicon from '@/app/components/home/Snsicon';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="block py-[80px] px-[126px] max-[1400px]:px-[50px] bg-white border-t border-t-[#e6e6e6] max-md:pt-[40px] max-md:px-[60px] max-md:pd-[90px] max-sm:px-[28px] max-sm:pd-[60px]">
      <img
        src="/images/footerlogo.svg"
        alt="푸터로고"
        className="max-sm:h-[26px]"
      />
      <div className="flex items-start justify-between mt-[54px] max-md:flex-col-reverse max-md:gap-y-[42px] max-md:mb-[54px] max-sm:mb-[50px]">
        <LinkList />
        <Community />
      </div>
      <span className="text-[14px] leading-[28px] text-gray-500">
        copyright (c) Changbi Publishers, Inc. All Rights Reserved.
        <br />
        10881 경기도 파주시 회동길 184 (413-756 경기도 파주시 문발동
        출판문화정보산업단지 513-11)
        <br />
        전화 031-955-3333(월~금 10시~17시, 점심시간 11시 30분~13시) | 메일
        changbi_pr@changbi.com
        <br />
        대표이사: 염종선 | 사업자등록번호: 105-81-63672 |
        <Link
          href="/privacy_policy?category=1"
          className="font-medium text-gray-500 pl-[2px] hover:underline"
        >
          개인정보처리방침
        </Link>
      </span>
      <Snsicon />
    </footer>
  );
}
