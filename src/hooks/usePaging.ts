import { useMemo, useState } from "react";

const usePaging = (maxPage: number, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  //새로고침 => localStorage에 페이지, input text 저장했다가 뿌려주기
  // 새로고침시 양식 페이지를 다시 제출하시겠습니까 팝업

  // 페이지 배열 만들기
  const pageArray = useMemo(() => {
    return Array.from({ length: maxPage }, (_, index) => index + 1);
  }, [maxPage]);

  // 페이지 변경
  const goToPage = (page: number) => {
    if (page >= 1 && page <= maxPage) {
      setCurrentPage(page);
    }
  };

  // 이전 페이지로
  const goToPreviousPage = () => {
    goToPage(currentPage - 1);
  };

  // 다음 페이지로
  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= maxPage) {
      setCurrentPage(nextPage);
    }
  };

  return {
    currentPage,
    maxPage,
    goToPage,
    goToPreviousPage,
    goToNextPage,
  };
};

export default usePaging;
