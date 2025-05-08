//app /ui/home/Gnb.tsx
import Link from 'next/link';

export default function Gnb({
  gnbActive,
  onMouseEnter,
  onMouseLeave,
}: {
  gnbActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <nav className="pt-[20px]">
      <ul
        className="flex h-[60px] gap-x-[100px] max-md:gap-x-[65px] max-sm:hidden items-center justify-between group"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <li className="h-[40px] relative leading-[40px] ">
          <span className="inline-block relative font-bold cursor-default">
            창비
          </span>
          <ul
            className={`block absolute left-0 top-[34px] w-full pt-[24px] bg-white ${
              gnbActive
                ? 'opacity-100 translate-y-0 transition-opacity duration-200 delay-350'
                : 'opacity-0 -translate-y-[200px]'
            }`}
          >
            <li>
              <Link href="/about" className="whitespace-nowrap hover:underline">
                회사 소개
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="whitespace-nowrap hover:underline"
              >
                공동체
              </Link>
            </li>
            <li>
              <Link
                href="/newsList?page1"
                className="whitespace-nowrap hover:underline"
              >
                새소식
              </Link>
            </li>
            <li>
              <Link href="/map" className="whitespace-nowrap hover:underline">
                오시는 길
              </Link>
            </li>
            <li>
              <Link
                href="/recruit"
                className="whitespace-nowrap hover:underline"
              >
                채용
              </Link>
            </li>
          </ul>
        </li>

        <li className="h-[40px] relative leading-[40px] group">
          <span className="inline-block relative font-bold cursor-default">
            도서
          </span>
          <ul className="block absolute left-0 top-[34px] w-full pt-[24px] bg-white opacity-0 -translate-y-[200px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:transition-opacity group-hover:duration-200 group-hover:delay-350">
            <li>
              <Link
                href="/bookList?page=1"
                className="whitespace-nowrap hover:underline"
              >
                창비의 책
              </Link>
            </li>
            <li>
              <Link
                href="/authorList?regExp=%5E%5B%EA%B0%80-%EB%A7%87%5D"
                className="whitespace-nowrap hover:underline"
              >
                저자
              </Link>
            </li>
            <li>
              <Link
                href="/library?category=102&page=1"
                className="whitespace-nowrap hover:underline"
              >
                자료실
              </Link>
            </li>
          </ul>
        </li>

        <li className="h-[40px] relative leading-[40px] group">
          <span className="inline-block relative font-bold cursor-default">
            매거진
          </span>
          <ul className="block absolute left-0 top-[34px] w-full pt-[24px] bg-white opacity-0 -translate-y-[200px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:transition-opacity group-hover:duration-200 group-hover:delay-350">
            <li>
              <Link
                href="/magazine"
                className="whitespace-nowrap hover:underline"
              >
                창작과비평
              </Link>
            </li>
            <li>
              <Link
                href="/kidsMagazine"
                className="whitespace-nowrap hover:underline"
              >
                창비어린이
              </Link>
            </li>
          </ul>
        </li>

        <li className="h-[40px] relative leading-[40px] group">
          <span className="inline-block relative font-bold cursor-default">
            문학상/투고
          </span>
          <ul className="block absolute left-0 top-[34px] w-full pt-[24px] bg-white opacity-0 -translate-y-[200px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:transition-opacity group-hover:duration-200 group-hover:delay-350">
            <li>
              <Link
                href="/contest?type=1"
                className="whitespace-nowrap hover:underline"
              >
                문학상/공모
              </Link>
            </li>
            <li>
              <Link
                href="/contribute?type=1"
                className="whitespace-nowrap hover:underline"
              >
                단행본 투고
              </Link>
            </li>
          </ul>
        </li>

        <li className="h-[40px] relative leading-[40px] group">
          <span className="inline-block relative font-bold cursor-default">
            문의
          </span>
          <ul className="block absolute left-0 top-[34px] w-full pt-[24px] bg-white opacity-0 -translate-y-[200px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:transition-opacity group-hover:duration-200 group-hover:delay-350">
            <li>
              <Link
                href="/cs?type=ask"
                className="whitespace-nowrap hover:underline"
              >
                1:1 문의
              </Link>
            </li>
            <li>
              <Link
                href="/copyright"
                className="whitespace-nowrap hover:underline"
              >
                2차 저작권 안내
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
