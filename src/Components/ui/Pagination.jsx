import PropTypes from "prop-types";
import { Button } from "../ui/Button";
import { useState } from "react";

export const Pagination = ({
  pageLength,
  setStart,
  itemsPerPage,
  isLoading,
}) => {
  const [curPage, setCurPage] = useState(1);
  const handleNext = () => {
    if (curPage < pageLength) {
      setStart((prev) => prev + itemsPerPage);
      setCurPage((prev) => ++prev);
    }
  };

  const handlePrev = () => {
    if (curPage > 1) {
      setStart((prev) => prev - itemsPerPage);
      setCurPage((prev) => --prev);
    }
  };

  const handlePageClick = (page) => {
    setCurPage(page);
    setStart((page - 1) * itemsPerPage);
  };
  return (
    <div className="pagenation">
      <Button
        id="btn-pagenation"
        onClick={handlePrev}
        disabled={curPage === 1 || isLoading}
      >
        Prev
      </Button>

      {Array.from({ length: pageLength }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <div
            className={`pagination-count ${curPage === pageNumber ? "active" : ""}`}
            key={pageNumber}
            onClick={() => handlePageClick(index + 1)}
          >
            {pageNumber}
          </div>
        );
      })}
      <Button
        id="btn-pagenation"
        onClick={handleNext}
        disabled={curPage === pageLength || isLoading}
      >
        Next
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  pageLength: PropTypes.number.isRequired,
  setStart: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
