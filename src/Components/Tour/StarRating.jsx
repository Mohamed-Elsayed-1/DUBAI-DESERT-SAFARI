import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./StarRating.css";

export const StarRating = ({ maxStars = 5, rating }) => {
  return (
    <div className="star-rating">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <span key={starValue} className="star-wrapper">
            {rating >= starValue ? (
              <FaStar className="star filled" />
            ) : rating >= starValue - 0.5 ? (
              <FaStarHalfAlt className="star half-filled" />
            ) : (
              <FaRegStar className="star empty" />
            )}
          </span>
        );
      })}
    </div>
  );
};

StarRating.propTypes = {
  maxStars: PropTypes.number,
  rating: PropTypes.number.isRequired,
};
