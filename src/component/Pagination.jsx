import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <ul className="flex justify-end ">
      {Array.from({ length: totalPages }, (_, index) => (
        <li
          key={index}
          className={`page-item ${index + 1 === currentPage ? "disabled" : ""}`}
        >
          <button
            className={`page-link rounded-0 mr-3 px-6 py-4 shadow-lg border-2   ${
              index + 1 === currentPage
                ? "bg-sky-500 text-white"
                : "bg-white text-dark"
            }`}
            onClick={() => handlePageChange(index + 1)}
            disabled={index + 1 === currentPage}
          >
            {index + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
