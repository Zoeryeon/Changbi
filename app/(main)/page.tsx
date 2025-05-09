// app /page.tsx
import Comment from '@/app/components/home/Comment';
import Introduction from '@/app/components/home/Introduction';
import NewBook from '@/app/components/home/NewBook';
import News from '@/app/components/home/News';
import Subscribe from '@/app/components/home/Subscribe';

export default function Home() {
  return (
    <main className="pt-[168px] max-sm:py-[90px]">
      <Introduction />
      <News />
      <NewBook />
      <Subscribe />
      <Comment />
    </main>
  );
}
