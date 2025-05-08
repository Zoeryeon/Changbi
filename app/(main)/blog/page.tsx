// app/blog/page.tsx
export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => resolve('delay'), 2000);
  });

  return (
    <main className="p-[30px]">
      <h2 className="text-[25px] font-bold">my blog</h2>
    </main>
  );
}
