//app /(main) /library /page.tsx
'use client';

import LibraryResult from '@/app/components/library/LibraryResult';
import LibrarySearch from '@/app/components/library/LibrarySearch';
import LibraryTag from '@/app/components/library/LibraryTag';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { use, useEffect, useRef, useState } from 'react';

const buttonLabels = [
  '통합 보도자료실',
  '어린이 청소년 자료실',
  '도서목록 자료실',
];

export default function page({
  searchParams,
}: {
  searchParams: Promise<{ tag: string; keyword: string; page: string }>;
}) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const paramsObj = use(searchParams);
  // 2개 이상에서 사용할때 공통변수 만들어서 사용해주기
  const [params] = useState(new URLSearchParams(paramsObj));

  const initialTag = params.get('tag') || '1';
  const [tag, setTag] = useState(initialTag);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const { isPending, data, isError, error } = useQuery({
    queryKey: ['author-list', tag, page, paramsObj.keyword],
    queryFn: () => {
      return fetch(
        `http://localhost:9090/library?tag=${tag}&page=${page}&keyword=${paramsObj.keyword}`
      ).then((res) => res.json());
    },
  });

  //태그 클릭 이벤트
  function handleTag(index: number) {
    setTag((index + 1).toString()); // tag 값 업데이트
    params.set('tag', (index + 1).toString());
    router.push(`?${params.toString()}`);
  }

  // data 변경시 totalPage 계산
  useEffect(() => {
    if (data) {
      setTotalPage(Math.ceil(data?.total / 5) || 0);
    }
  }, [data]);

  // 페이지 변경시 쿼리 파라미터 추가
  useEffect(() => {
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  }, [page]);

  // 검색 시 쿼리 파라미터 추가
  function handleKeyword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputRef?.current?.value) {
      params.set('keyword', inputRef.current.value);
    } else {
      params.delete('keyword');
    }
    router.push(`?${params.toString()}`);

    // 검색 실행 후 검색어, 커서 초기화
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:pt-[90px] max-sm:pb-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <div className="flex items-baseline justify-between flex-wrap">
          <h2 className="text-[56px] font-bold tracking-tight leading-[88px] max-sm:text-[32px] max-sm:leading-[46px] max-sm:break-keep">
            자료실
          </h2>
        </div>
        <div className="flex items-start justify-between max-md:block max-md:relative max-md:pt-[66px]">
          <div>
            <LibraryTag
              buttonLabels={buttonLabels}
              tag={tag}
              handleTag={handleTag}
            />
          </div>
          <div className="w-[964px] max-md:mt-[36px] max-md:w-full max-sm:mt-[50px]">
            <LibrarySearch
              handleKeyword={handleKeyword}
              inputRef={inputRef}
              paramsObj={paramsObj}
            />
            <LibraryResult
              isPending={isPending}
              isError={isError}
              error={error}
              data={data?.result}
              page={page}
              setPage={setPage}
              totalPage={totalPage}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
