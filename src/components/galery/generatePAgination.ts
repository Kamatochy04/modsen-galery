interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const generatePaginationItems = ({
  currentPage,
  totalPages,
}: PaginationProps) => {
  const maxPagesToShow = 7;
  const pages: (number | string)[] = [];

  let startPage = Math.max(1, currentPage - 3);
  let endPage = Math.min(totalPages, currentPage + 3);

  if (endPage - startPage + 1 > maxPagesToShow) {
    if (currentPage > 4) {
      startPage = currentPage - 3;
      endPage = startPage + maxPagesToShow - 1;
    } else {
      startPage = 1;
      endPage = maxPagesToShow;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (startPage > 1) {
    pages.unshift(1, "...");
  }

  if (endPage < totalPages) {
    pages.push(...["...", totalPages]);
  }

  return pages;
};
