import React from 'react';

export default function Pagination(props) {
  const { numOfPages, onPageClick, pageN } = props;
  const pages = [];
  const endPageDiff = numOfPages - (pageN + 5);
  const endPage = (endPageDiff > -1) ? pageN + 5 : numOfPages;
  const startPage = (endPage - 6 > 0) ? endPage - 6 : pageN;

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
          <a id="pagePrev" href="#" aria-label="Next">
            {'<'}
          </a>
        </li>
        {pages}
        <li>
          <a id="pageNext" href="#" aria-label="Next">
            {'>'}
          </a>
        </li>
      </ul>
    </nav>
  );
}
