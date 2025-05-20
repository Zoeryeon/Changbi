//app /components /home /Submenu.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Submenu({ menuOpen }: { menuOpen: boolean }) {
  // 각 메뉴 카테고리의 열림/닫힘 상태를 관리하는 state
  // -1은 모든 메뉴가 닫힌 상태를 의미
  const [openMenuIndex, setOpenMenuIndex] = useState(-1);

  // 메뉴 항목 클릭 핸들러
  const handleMenuClick = (index: number) => {
    // 이미 열린 메뉴를 클릭한 경우 닫기
    if (openMenuIndex === index) {
      setOpenMenuIndex(-1);
    } else {
      // 다른 메뉴를 클릭한 경우 해당 메뉴 열기
      setOpenMenuIndex(index);
    }
  };

  // 메뉴 데이터 배열
  const menuItems = [
    {
      title: '창비',
      subItems: [
        { name: '회사 소개', link: '/about' },
        { name: '공동체', link: '/community' },
        { name: '새소식', link: '/news-list' },
        { name: '오시는 길', link: '/map' },
        { name: '채용', link: '/recruit' },
      ],
    },
    {
      title: '도서',
      subItems: [
        { name: '창비의 책', link: '/book-list' },
        {
          name: '저자',
          link: '/author-list',
        },
        { name: '자료실', link: '/library' },
      ],
    },
    {
      title: '매거진',
      subItems: [
        { name: '창작과비평', link: '/magazine' },
        { name: '창비어린이', link: '/kidsMagazine' },
      ],
    },
    {
      title: '문학상/투고',
      subItems: [
        { name: '문학상/공모', link: '/contest' },
        { name: '단행본 투고', link: '/contribute' },
      ],
    },
    {
      title: '문의',
      subItems: [
        { name: '1:1 문의', link: '/cs' },
        { name: '2차 저작권 안내', link: '/copyright' },
      ],
    },
  ];

  // 외부 링크 항목
  const externalLinks = [
    { name: '영문 ENG', link: 'http://en.changbi.com', target: '_blank' },
    {
      name: '창비교육 교과서',
      link: 'https://class.changbiedu.com/',
      target: '_blank',
    },
  ];

  return (
    <nav
      className={`hidden max-sm:block w-[260px] h-screen fixed right-0 top-0 pt-[12px] px-[20px] border-l border-l-[#e6e6e6] bg-white z-40 transition-all duration-300 ${
        menuOpen ? 'translate-x-0' : 'translate-x-[100%]'
      } `}
    >
      <div>
        <ul>
          {/* 메뉴 항목 반복 렌더링 */}
          {menuItems.map((item, index) => (
            <li key={index} className="border-b border-b-[#707070]">
              {/* 메뉴 제목 (클릭 가능) */}
              <span
                className="text-[28px] font-bold leading-[56px] block cursor-pointer"
                onClick={() => handleMenuClick(index)}
              >
                {item.title}
              </span>

              {/* 하위 메뉴 (열렸을 때만 표시) */}
              <ul
                className={`leading-[44px] font-medium text-[18px] overflow-hidden ${
                  openMenuIndex === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={`border-t border-t-[#e6e6e6] ${
                      openMenuIndex !== index ? 'hidden' : ''
                    }`}
                  >
                    <Link href={subItem.link}>{subItem.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          {/* 외부 링크 항목 */}
          {externalLinks.map((link, index) => (
            <li key={`ext-${index}`} className="border-b border-b-[#707070]">
              <Link
                href={link.link}
                target={link.target}
                className="text-[28px] font-bold leading-[56px] block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
