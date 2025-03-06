import { Button } from "../ui/Button";
import { FaClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const TourItem = ({ tour, isLoading }) => {
  return !isLoading ? (
    <div className="tour-card">
      <img src={tour.image} alt={tour.title} />
      <div className="tour-content">
        <h2>{tour.title}</h2>
        <p>
          <FaClock className="duration-icon" />
          <strong>{tour.duration}</strong>. Pickup available
        </p>
        <div className="rate">
          <span>
            <FaStar className="star-icon" />
            {tour.rating}
            <span>rating</span>
          </span>
          <span className="review">
            (<HiMiniUsers />
            {tour.reviews}
            <span>reviews</span>)
          </span>
        </div>
        <p>
          From<strong> $ {tour.priceFrom} </strong> Per person
        </p>
        <Button
          as={Link}
          to={`/tour/${tour.id}`}
          style={{ width: "100%", borderRadius: "10px" }}
        >
          See More
        </Button>
      </div>
    </div>
  ) : (
    <div className="undefined-card">
      <div className="image"></div>
      <div className="tour-content">
        <h2></h2>
        <p>
          <FaClock className="duration-icon" />
        </p>
        <div className="rate">
          <span>
            <FaStar className="star-icon" />
          </span>
          <span>
            <FaStar className="star-icon" />
          </span>
        </div>
        <Button
          style={{
            width: "100%",
            borderRadius: "10px",
            backgroundColor: "#ddd",
          }}
        ></Button>
      </div>
    </div>
  );
};

TourItem.propTypes = {
  tour: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.string.isRequired,
    priceFrom: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }),
  isLoading: PropTypes.bool,
};
