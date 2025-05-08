// app /page.tsx
import { formatDate } from '@/app/_lib/utils';
import Comment from '@/app/components/home/Comment';
import Introduction from '@/app/components/home/Introduction';
import NewBook from '@/app/components/home/NewBook';
import News from '@/app/components/home/News';
import Subscribe from '@/app/components/home/Subscribe';
import Link from 'next/link';

export default function Home() {
  const now = formatDate(new Date());
  return (
    <main className="mt-[20px] pt-[148px] px-[50px] 2xl:px-[118px] pb-[150px] h-auto max-sm:py-[90px] max-sm:px-[40px]">
      <Introduction />
      <News />
      <NewBook />
      <Subscribe />
      <Comment />

      <Link href="/blog">blog</Link>
      <Link href="/products">products</Link>
      <Link href="/articles/breaking-news-123">read in korean</Link>
      <Link href="/articles/breaking-news-123?lang=en">read in english</Link>
      <Link href="/articles/breaking-news-123?lang=fr">read in franch</Link>
    </main>
  );
}
