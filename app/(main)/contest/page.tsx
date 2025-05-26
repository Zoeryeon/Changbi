//app /(main) /contest /page.tsx

const buttonLabels = ['문학상', '공모', '수시원고모집'];

export default function page() {
  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:pt-[90px] max-sm:pb-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <div className="flex items-baseline justify-between flex-wrap">
          <h2 className="text-[56px] font-bold tracking-tight leading-[88px] max-sm:text-[32px] max-sm:leading-[46px] max-sm:break-keep">
            문학상/공모
          </h2>
        </div>
      </div>
    </main>
  );
}
