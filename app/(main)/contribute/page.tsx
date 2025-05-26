//app /(main) /contribute /page.tsx

const buttonLabels = [
  '시ㆍ소설',
  '인문ㆍ교양',
  '청소년',
  '어린이',
  '그림책',
  '창비교육',
];

export default function page() {
  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:pt-[90px] max-sm:pb-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <div className="flex items-baseline justify-between flex-wrap">
          <h2 className="text-[56px] font-bold tracking-tight leading-[88px] max-sm:text-[32px] max-sm:leading-[46px] max-sm:break-keep">
            단행본 투고
          </h2>
        </div>
      </div>
    </main>
  );
}
