// app /products /[productId] /page.tsx

// 동일 타입을 두군데 이상 사용시 타입을 따로 정의하여 사용
type ProductDetailsProps = {
  params: Promise<{ productId: string }>;
};

// 메타데이터 동적으로 생성하는 함수, 이름변경 불가
export async function generateMetadata({ params }: ProductDetailsProps) {
  const { productId } = await params;

  // 핸들러 지연하는거랑 똑같음
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`갤럭시 ${productId}`), 200);
  });

  return {
    title: `Product ${title}`,
  };
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { productId } = await params;

  return (
    <main className="p-[30px]">
      <h2 className="text-[25px] font-bold">
        details about product {productId}
      </h2>
    </main>
  );
}
