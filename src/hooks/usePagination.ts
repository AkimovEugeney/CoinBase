import {useCallback, useState } from 'react'


type TUsePaginationState = {
  startIndex: number;
  handleClickNext: () => void;
  handleClickPrev: () => void;
  isNext: boolean;  
}

export const usePagination = (length: number | undefined, pageSize: number): TUsePaginationState => {
  const [startIndex, setStartIndex] = useState(0);

  const handleClickNext = useCallback(() => {
    if (length) {
      setStartIndex(prevIndex => Math.min(prevIndex + pageSize, length - 1));
    }
  }, [length, pageSize]);

  const handleClickPrev = useCallback(() => {
    setStartIndex(prevIndex => Math.max(prevIndex - pageSize, 0));
  }, [pageSize]);

  const isNext = length ? startIndex + pageSize < length : false;

  return {
    startIndex,
    handleClickNext,
    handleClickPrev,
    isNext,
  }
}