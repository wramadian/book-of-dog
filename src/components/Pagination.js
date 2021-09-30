import React from "react";

const Pagination = ({ imagesPerPage, totalImages, paginate }) => {
  const pageNumbers = [];

  for (let index = 1; index < Math.ceil(totalImages / imagesPerPage); index++) {
    pageNumbers.push(index);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="#galery"
              onClick={() => paginate(number)}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
