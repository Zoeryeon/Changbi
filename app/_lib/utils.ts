// app/_lib/utils.ts

export function formatDate(date: Date): string {
  return date.toLocaleDateString('ko-KR', {
    year: '2-digit',
    month: 'long',
    day: '2-digit',
  });
}

export function generatePagination(currentPage: number, totalPages: number) {
  // 4페이지 이하일 때는 모든 페이지를 보여준다.
  if (totalPages <= 4) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // 5페이지 초과일 때는 현재 페이지를 기준으로 앞뒤로 2페이지씩 보여준다.
  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, totalPages];
  }

  // 마지막 페이지에 가까울 때는 마지막 3페이지를 보여준다.
  if (currentPage >= totalPages - 3) {
    return [
      1,
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  // 중간 페이지일 때는 앞뒤 페이지만 보여준다
  return [
    1,
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
    totalPages,
  ];
}
