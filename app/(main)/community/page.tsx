//app /(main) /community /page.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function Community() {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ['community'],
    queryFn: () => {
      return fetch('http://localhost:9090/community').then((res) => res.json());
    },
  });

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:py-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <div className="">
          <h2 className="text-[56px] font-bold tracking-tight leading-[88px] max-sm:text-[32px] max-sm:leading-[46px] max-sm:break-keep">
            공동체
          </h2>
          {isPending && <p>Loading...</p>}
          {isError && <p>{error.message}</p>}
          {data && (
            <div className="my-[70px] mx-auto max-w-[964px]">
              {Object.entries(data).map(([groupName, items]) => (
                <div key={groupName}>
                  <h3 className="mt-[80px] mb-[14px] mx-0 text-[#606060] text-[20px] leading-[34px] font-medium max-sm:text-[16px] max-sm:leading-[26px]">
                    {groupName}
                  </h3>
                  <ul className="flex flex-wrap justify-between max-md:block">
                    {Array.isArray(items) &&
                      items.map(
                        (item: {
                          id: number;
                          group: string;
                          name: string;
                          contents: string;
                          logo: string;
                          href: string;
                        }) => (
                          <li key={item.id}>
                            <Link
                              href={item.href}
                              target="_blank"
                              className="flex flex-col w-[442px] h-[170px] border-t border-t-[#c3c3c3] justify-center gap-[8px] hover:bg-[#f6f6f6] max-md:w-full max-md:min-h-[130px] max-md:h-auto"
                            >
                              <h4 className="text-[30px] font-medium leading-[56px] max-sm:text-[18px] max-sm:leading-[32px] break-keep">
                                {item.name}
                              </h4>
                              <p className="leading-[32px] max-sm:text-[14px] max-sm:leading-[26px]">
                                {item.contents.split('\n').map((line, i) => (
                                  <span key={i}>
                                    {line}
                                    <br />
                                  </span>
                                ))}
                              </p>
                            </Link>
                            <img
                              src={item.logo}
                              alt={item.name}
                              className="mb-[25px] max-w-[140px] max-h-[80px]"
                            />
                          </li>
                        )
                      )}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
