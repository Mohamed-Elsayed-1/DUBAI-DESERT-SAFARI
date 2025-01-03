import PropTypes from "prop-types";


export const PagenationCount = ({ number, curPage, ...rest }) => {
  return (
    <div
      className={`pagination-count ${curPage === number ? "active" : ""}`}
      {...rest}
    >
      {number}
    </div>
  );
};


PagenationCount.propTypes = {
  number: PropTypes.number.isRequired,
  curPage: PropTypes.number.isRequired,
};
