//app /(main) /search-result /page.tsx
'use client';

import Pagination from '@/app/components/Pagination';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { use, useEffect, useRef, useState } from 'react';
import Books from '@/app/components/search-result/Books';
import Authors from '@/app/components/search-result/Authors';
import News from '@/app/components/search-result/News';
import SearchTag from '@/app/components/search-result/SearchTag';
import SearchForm from '@/app/components/search-result/SearchForm';

const buttonLabels = ['도서', '저자', '새소식'];

export default function SearchResult({
  searchParams,
}: {
  searchParams: Promise<{ search: string; page: string; keyword: string }>;
}) {
  const paramsObj = use(searchParams);
  const [params] = useState(new URLSearchParams(paramsObj));

  // 주소에 있는 값을 가져옴
  const initialSearch = params.get('searchCategory') || 'books';

  const [page, setPage] = useState(parseInt(params.get('page') || '1', 10));
  const [totalPage, setTotalPage] = useState(0);
  const [search, setSearch] = useState(initialSearch);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const { isPending, data, isError, error } = useQuery({
    queryKey: ['search-result', page, paramsObj.keyword, search],
    queryFn: () => {
      return fetch(
        `http://localhost:9090/search-result?searchCategory=${search}&page=${page}&keyword=${paramsObj.keyword}`
      ).then((res) => res.json());
    },
  });

  // data 변경시 totalPage 계산
  useEffect(() => {
    if (data) {
      setTotalPage(Math.ceil(data?.total / 3) || 0);
    }
  }, [data]);

  // 페이지 변경시 쿼리 파라미터 추가
  useEffect(() => {
    params.set('page', page.toString());
    params.set('searchCategory', search);
    router.push(`?${params.toString()}`);
  }, [page, search]);

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

  function handlerCategory(label: string) {
    setPage(1);

    if (label === '도서') {
      setSearch('books');
    } else if (label === '저자') {
      setSearch('authors');
    } else if (label === '새소식') {
      setSearch('news');
    }
  }

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:pt-[90px] max-sm:pb-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <div className="flex items-baseline justify-between flex-wrap">
          <h2 className="text-[56px] font-bold tracking-tight leading-[88px] max-sm:text-[32px] max-sm:leading-[46px] max-sm:break-keep">
            검색
          </h2>
        </div>
        <div className="flex items-start justify-between max-md:block max-md:relative max-md:pt-[66px]">
          <div>
            <SearchTag
              buttonLabels={buttonLabels}
              search={search}
              handlerCategory={handlerCategory}
            />
          </div>
          <div className="w-[964px] max-[1500px]:w-[760px] max-[1300px]:w-[670px] max-md:w-full">
            <div className="w-full max-md:mt-[36px] max-sm:mt-[12px]">
              <SearchForm
                handleKeyword={handleKeyword}
                inputRef={inputRef}
                paramsObj={paramsObj}
              />
            </div>
            <div>
              {!paramsObj.keyword ? (
                <div className="w-full h-[300px] flex justify-center items-center flex-col text-center">
                  <h1 className="text-[20px] leading-[34px] -tracking-wider font-medium max-sm:text-[16px] max-sm:leading-[26px]">
                    검색어를 입력해주세요.
                  </h1>
                </div>
              ) : data?.length === 0 ? (
                <div className="w-full h-[300px] flex justify-center items-center flex-col text-center">
                  <h1 className="text-[20px] leading-[34px] font-medium max-sm:text-[16px] max-sm:leading-[26px]">
                    검색 결과가 없습니다.
                  </h1>
                  <h4 className="text-[14px] leading-[28px] max-sm:leading-[26px]">
                    다른 카테고리의 검색 결과도 확인해 보세요.
                  </h4>
                </div>
              ) : (
                <div>
                  {isPending && (
                    <div className="w-full h-[300px] flex justify-center items-center flex-col text-center">
                      <h1 className="text-[20px] leading-[34px] font-medium max-sm:text-[16px] max-sm:leading-[26px]">
                        검색 결과를 불러오고 있습니다.
                      </h1>
                      <h4 className="text-[14px] leading-[28px] max-sm:leading-[26px]">
                        잠시만 기다려주세요
                      </h4>
                    </div>
                  )}
                  {isError && <p>{error.message}</p>}
                  {search === 'books' && data?.result?.length > 0 && (
                    <Books data={data.result} />
                  )}
                  {search === 'authors' && <Authors data={data} />}
                  {search === 'news' && data?.result?.length > 0 && (
                    <News data={data.result} />
                  )}
                  <div className="mt-[134px]">
                    {data && data?.result?.length > 0 && (
                      <Pagination
                        page={page}
                        setPage={setPage}
                        totalPage={totalPage}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
