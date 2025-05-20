// app/ui/home/Header.tsx
'use client';

import Gnb from '@/app/components/home/Gnb';
import Search from '@/app/components/home/Search';
import SubMenu from '@/app/components/home/SubMenu';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [gnbActive, setGnbActive] = useState(false);
  const [visible, setVisible] = useState(true);
  // 모바일 메뉴 열기
  const [menuOpen, setMenuOpen] = useState(false);

  // 스크롤 이벤트 처리
  useEffect(() => {
    let prevScrollY = 0;

    function handleScroll() {
      let currentScrollY = window.scrollY;

      // 아래로 스크롤시 헤더 안보이게
      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setVisible(false);
        // 위로 스크롤시 헤더 보이게
      } else if (currentScrollY <= prevScrollY && currentScrollY > 50) {
        setVisible(true);
      }

      // 현재 스크롤 위치를 이전 위치로 업데이트
      prevScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 의존성 배열에서 scrollY 제거

  // 메뉴 상태가 변경될 때 body에 클래스를 추가/제거하여 전체 화면 이동을 제어
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed w-full border-b border-b-[#e6e6e6] max-sm:border-none bg-white z-999 left-0 transition-all duration-400 ${
        menuOpen ? 'top-0' : visible ? 'top-0' : '-top-[80px]'
      }`}
    >
      <div className="flex items-center justify-center max-w-[1770px] px-[60px] max-sm:px-[28px] mx-auto relative h-[80px] max-sm:h-[60px]">
        <h1
          onClick={() => (window.location.href = '/')}
          className="w-[200px absolute left-[60px] max-sm:left-[28px] max-[1400px] top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 46.054 36.257"
            className="w-[46px] h-[36px] max-sm:w-[34px] max-sm:h-auto"
          >
            <g id="ChangbiLogo" transform="translate(0)">
              <path
                id="패스_18"
                data-name="패스 18"
                d="M26.368,8.514v5.278H22.562V.006h3.806v5.2h2.8V8.514Z"
                transform="translate(-4.813 -0.002)"
                fill="#333"
              ></path>{' '}
              <path
                id="패스_19"
                data-name="패스 19"
                d="M34.462,11.08h3.775v3.543h3.38V11.08h3.766V24.852H34.462Zm7.155,6.8h-3.38V21.56h3.38Z"
                transform="translate(-7.351 -2.364)"
                fill="#333"
              ></path>{' '}
              <rect
                id="사각형_23"
                data-name="사각형 23"
                width="3.766"
                height="13.79"
                transform="translate(42.289)"
                fill="#333"
              ></rect>{' '}
              <path
                id="패스_20"
                data-name="패스 20"
                d="M23.308,29.974a6.338,6.338,0,1,0,6.336,6.337,6.339,6.339,0,0,0-6.336-6.337m0,8.961a2.624,2.624,0,1,1,2.624-2.624,2.621,2.621,0,0,1-2.624,2.624"
                transform="translate(-3.62 -6.394)"
                fill="#333"
              ></path>{' '}
              <path
                id="패스_21"
                data-name="패스 21"
                d="M6.879,20.555,3,25.542,0,23.193l5.006-6.151V15.818H1.064v-3.29H5.006V9.433H8.744v3.095h3.963v3.29H8.744v1.224l4.906,6.151-2.886,2.349Z"
                transform="translate(0 -2.012)"
                fill="#333"
              ></path>
            </g>
          </svg>
        </h1>
        <Gnb
          gnbActive={gnbActive}
          onMouseEnter={() => setGnbActive(true)}
          onMouseLeave={() => setGnbActive(false)}
        />
        <Search />
        <div
          className={`hidden max-md:block absolute right-[50px] max-sm:right-[60px] top-1/2 -translate-y-1/2 transition-all duration-300 ${
            menuOpen ? 'translate-x-[-252px]' : 'translate-x-0'
          }`}
        >
          <Link
            href="/search-result?page=1&searchCategory=books&keyword="
            className="w-[30px] h-[60px]"
          >
            <img src="/images/mobilesearch.svg" alt="검색" />
          </Link>
        </div>
        <div
          className={`hidden max-sm:block right-[28px] absolute top-1/2 -translate-y-1/2 transition-all duration-300 ${
            menuOpen ? 'translate-x-[-252px]' : 'translate-x-0'
          }`}
        >
          <button
            type="button"
            className={`w-[30px] h-[60px] bg-no-repeat bg-[100%] scale-100 ${
              menuOpen
                ? "bg-[url('/images/x-button.svg')]"
                : "bg-[url('/images/hamburger.svg')]"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          ></button>
        </div>
        <SubMenu menuOpen={menuOpen} />
      </div>
    </header>
  );
}
