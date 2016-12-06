import React from 'react';

export default function Pagination(props) {
  const { numOfPages, onPageClick, pageN } = props;
  const pages = [];
  // expert lvl algebra I
  const endPageDiff = numOfPages - (pageN + 5);
  const endPage = (endPageDiff > -1) ? pageN + 5 : numOfPages;
  const startPageDiff = (endPage - 6 > 0) ? endPage - 6 : pageN;
  const startPage = (endPage - startPageDiff > 5) ? startPageDiff : 0;

  for (let i = startPage; i < endPage; i++) {
    pages.push(
      <li key={i} className={(pageN === i) ? 'active' : ''}>
        <a key={`page${i}`} id={`page${i}`} href="#">
          {i + 1}
        </a>
      </li>);
  }


  return (
    <nav className="tablePagination" aria-label="...">
      <ul className="pagination" onClick={onPageClick}>
        <li>
          <a id="prev" href="#" aria-label="Next">
            {'<'}
          </a>
        </li>
        {pages}
        <li>
          <a id="next" href="#" aria-label="Next">
            {'>'}
          </a>
        </li>
      </ul>
    </nav>
  );
}
