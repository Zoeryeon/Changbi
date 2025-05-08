// app/ui/product-reviews/Reviews.tsx
export default async function Reviews() {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return <div>Reviews</div>;
}
