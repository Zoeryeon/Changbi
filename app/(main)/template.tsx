// app/(main)/template.tsx
'use client';

import Header from '@/app/components/home/Header';
import Footer from '@/app/components/home/Footer';
import { useState, useEffect } from 'react';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 메뉴 열림 상태를 감지하기 위한 이벤트 리스너 설정
  useEffect(() => {
    const handleMenuChange = () => {
      setIsMenuOpen(document.body.classList.contains('menu-open'));
    };

    // 모든 DOM 변이를 관찰하여 body 클래스 변경 감지
    const observer = new MutationObserver(handleMenuChange);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`relative transition-all duration-300 ${
        isMenuOpen ? '-left-[260px]' : 'left-0'
      }`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
