//app /ui/home/Gnb.tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Gnb({
  gnbActive,
  onMouseEnter,
  onMouseLeave,
}: {
  gnbActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  // 현재 페이지 경로 가져오기
  const pathname = usePathname();

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
        { name: '창비어린이', link: '/kids-magazine' },
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

  return (
    <nav
      className="after:absolute after:-left-[3000px] after:-right-[3000px] after:top-0 after:h-0 after:bg-white after:-z-1 after:transition-all after:duration-300 after:border-b after:border-b-[#e6e6e6] hover:after:h-[290px]"
      onMouseLeave={onMouseLeave}
    >
      <ul
        className="flex h-[80px] gap-x-[100px] max-[1300px]:gap-x-[80px] max-md:gap-x-[65px] max-sm:hidden items-center justify-between"
        onMouseEnter={onMouseEnter}
      >
        {menuItems.map((menuItem, index) => (
          <li key={index} className="h-[40px] relative leading-[40px]">
            <span className="inline-block relative font-bold cursor-default">
              {menuItem.title}
            </span>
            <ul
              className={`block absolute left-0 top-[34px] w-full pt-[24px] bg-white ${
                gnbActive
                  ? 'opacity-100 translate-y-0 transition-opacity duration-200 delay-300'
                  : 'opacity-0 -translate-y-[200px]'
              }`}
            >
              {menuItem.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subItem.link}
                    className={`whitespace-nowrap hover:underline relative ${
                      pathname === subItem.link
                        ? "after:content-[''] after:absolute after:-left-[12px] after:top-1/2 after:w-[4px] after:h-[4px] after:bg-gray-500 after:rounded-full after:transform after:-translate-y-1/2"
                        : ''
                    }`}
                  >
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
