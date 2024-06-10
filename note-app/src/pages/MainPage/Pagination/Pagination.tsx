import React, { useEffect, useState } from 'react';
import { useTheme } from '../../../context/theme';
import { pagewrapper, wrapper } from './Pagination.style';

interface PaginationPropTypes {
  totalMemo: number;
  setStartIdx: React.Dispatch<React.SetStateAction<number>>;
  setEndIdx: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ totalMemo, setStartIdx, setEndIdx }: PaginationPropTypes) => {
  const { theme } = useTheme();
  const [page, setPage] = useState(1);
  const limit = 3;

  setStartIdx((page - 1) * limit);
  setEndIdx(page * limit);

  const pages = Math.ceil(totalMemo / limit);

  useEffect(() => {
    if (pages == 1) setPage(1);
  }, [pages])
  return (
    <section css={wrapper}>
      <button
        type="button"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        css={pagewrapper}
      >
        &lt;
      </button>
      <article>
        {Array.from(Array(pages), (_, index) => (
          <button
            key={index + 1}
            onClick={() => setPage(index + 1)}
            css={[pagewrapper, page === index + 1 && { color: theme.textColor }]}
          >
            {index + 1}
          </button>
        ))}
      </article>
      <button
        type="button"
        onClick={() => setPage(page + 1)}
        disabled={page === pages}
        css={pagewrapper}
      >
        &gt;
      </button>
    </section>
  );
};

export default Pagination;
