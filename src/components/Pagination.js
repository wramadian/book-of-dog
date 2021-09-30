import React from "react";

const Pagination = ({ imagesPerPage, totalImages, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let index = 1; index < Math.ceil(totalImages / imagesPerPage); index++) {
    pageNumbers.push(index);
  }
  return (
    <div className="row">
      <div className="col">
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${
                  number === currentPage ? "active" : ""
                }`}
              >
                <a
                  href="#subbreed"
                  onClick={() => paginate(number)}
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
