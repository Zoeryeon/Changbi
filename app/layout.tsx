// app /laout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { SpoqaHanSansNeo } from '@/app/components/fonts';
import TanStackProvider from '@/providers/TanStackProvider';
import ThemeProvider from '@/app/components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: '창비',
    template: '%s | 창비',
  },
  description: '한결같되 날로 새롭게',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ThemeProvider>
        <body className={SpoqaHanSansNeo.className}>
          <TanStackProvider>{children}</TanStackProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
