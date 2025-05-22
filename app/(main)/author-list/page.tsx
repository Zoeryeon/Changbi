//app /(main) /author-list /page.tsx
'use client';

import AuthorResult from '@/app/components/author-list/AuthorResult';
import ListTap from '@/app/components/author-list/ListTap';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { use, useRef, useState } from 'react';

const buttonLabels = [
  'ㄱ·ㄴ·ㄷ·ㄹ',
  'ㅁ·ㅂ·ㅅ·ㅇ',
  'ㅈ·ㅊ·ㅋ·ㅌ',
  'ㅍ·ㅎ',
  'ABC - Z',
  '123·기타',
];

export default function AuthorList({
  searchParams,
}: {
  searchParams: Promise<{ tag: string; keyword: string }>;
}) {
  const paramsObj = use(searchParams);
  // 2개 이상에서 사용할때 공통변수 만들어서 사용해주기
  const [params] = useState(new URLSearchParams(paramsObj));

  const initialTag = params.get('tag') || '1';
  const [tag, setTag] = useState(initialTag);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const { isPending, data, isError, error } = useQuery({
    queryKey: ['author-list', tag, paramsObj.keyword],
    queryFn: () => {
      return fetch(
        `http://localhost:9090/author-list?tag=${tag}&keyword=${paramsObj.keyword}`
      ).then((res) => res.json());
    },
  });

  //태그 클릭 이벤트
  function handleTag(index: number) {
    setTag((index + 1).toString()); // tag 값 업데이트
    params.set('tag', (index + 1).toString());
    router.push(`?${params.toString()}`);
  }

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
            저자
          </h2>
        </div>
        <div className="flex items-start justify-between max-md:block max-md:relative max-md:pt-[66px]">
          <div>
            <ListTap
              buttonLabels={buttonLabels}
              tag={tag}
              handleTag={handleTag}
            />
          </div>
          <div>
            <AuthorResult
              handleKeyword={handleKeyword}
              inputRef={inputRef}
              paramsObj={paramsObj}
              isPending={isPending}
              isError={isError}
              error={error}
              data={data}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
