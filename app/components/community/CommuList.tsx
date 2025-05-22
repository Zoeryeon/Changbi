//app /components /community /CommuList.tsx

import Link from 'next/link';

type CommuProps = {
  isPending?: boolean;
  isError?: boolean;
  error?: any;
  data?: any[];
};

export default function CommuList({
  isPending = false,
  isError = false,
  error = null,
  data = [],
}: CommuProps) {
  return (
    <div>
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
  );
}
