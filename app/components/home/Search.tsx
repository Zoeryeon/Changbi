//app /components /home /Search.tsx
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Search() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const paramsObj = useSearchParams();

  // search-result주소가 아니면 가져오지 않기
  let search = '';
  if (usePathname() === '/search-result') {
    search = paramsObj.get('keyword') || '';
  }
  const [val, setVal] = useState(search);

  // 즉시반영
  useEffect(() => {
    setVal(search);
  }, [search]);

  // 주소 이동하기
  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const value = inputRef.current?.value;
    router.push(`/search-result?page=1&searchCategory=books&keyword=${value}`);
  }

  return (
    <div>
      <div className="absolute right-[60px] max-[1400px] top-1/2 -translate-y-1/2 max-md:hidden">
        <div className="flex gap-x-[20px]">
          <Link
            href="http://en.changbi.com"
            target="_blank"
            className="flex items-center hover:underline gap-x-[2px]"
          >
            <svg
              className="svg-inline--fa fa-globe w-[14px] h-[14px]"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="globe"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="#707070"
                d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z"
              ></path>
            </svg>
            <span className="text-[#707070] text-[14px]">영문 ENG</span>
          </Link>
          <Link
            href="https://class.changbiedu.com/"
            target="_blank"
            className="flex items-center hover:underline gap-x-[2px]"
          >
            <svg
              className="svg-inline--fa fa-pencil w-[14px] h-[14px]"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="pencil"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="#707070"
                d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"
              ></path>
            </svg>
            <span className="text-[#707070] text-[14px]">창비교육 교과서</span>
          </Link>
        </div>
        <div className="relative w-[200px] mt-[5px]">
          <form onSubmit={handleSearch}>
            <input
              ref={inputRef}
              type="search"
              className="w-[200px] h-[30px] bg-point1 rounded-[10px] px-[16px] border-0 text-[14px] leading-[28px] hover:bg-[#e7e7e8]"
              autoComplete="off"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            <button
              type="submit"
              className="w-[54px] h-[30px] right-0 top-0 absolute bg-point1 rounded-tr-[10px] rounded-br-[10px] place-items-center hover:bg-[#e7e7e8]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="그룹_44"
                data-name="그룹 44"
                width="16.434"
                height="16.434"
                viewBox="0 0 16.434 16.434"
              >
                <g
                  id="타원_14"
                  data-name="타원 14"
                  fill="none"
                  stroke="#333"
                  strokeWidth="1"
                >
                  <circle cx="7" cy="7" r="7" stroke="none" />
                  <circle cx="7" cy="7" r="6.5" fill="none" />
                </g>
                <line
                  id="선_44"
                  data-name="선 44"
                  x1="4.487"
                  y1="4.487"
                  transform="translate(11.593 11.593)"
                  fill="none"
                  stroke="#333"
                  strokeWidth="1"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
