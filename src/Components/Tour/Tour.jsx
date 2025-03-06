import { useParams } from "react-router";
import { toursList } from "../../data";
import { StarRating } from "./StarRating";
import { HiMiniUsers } from "react-icons/hi2";
import "./Tour.css";
import { FaClock } from "react-icons/fa";
import { Button } from "../ui/Button";

export const Tour = () => {
  const { id } = useParams();
  const tour = toursList.find((tour) => tour.id === parseInt(id));
  return (
    <section className="single-tour">
      <p className="tour-text">
        United Arab Emirates &gt; Things to do in Dubai &gt; Safari
      </p>
      <div className="container">
        <div className="image">
          <img src={tour.image} alt={tour.title} />
        </div>
        <div className="content-box">
          <h3>{tour.title}</h3>
          <h2>
            {tour.priceFrom} $ <span>per person</span>
          </h2>
          <div className="rating-star">
            <h4>Rate :</h4>
            <StarRating rating={tour.rating} />
          </div>
          <div className="review">
            <h4>Reviews :</h4>
            <div>
              <HiMiniUsers />
              {tour.reviews}
            </div>
          </div>
          <div className="time-duration">
            <h4>Duration :</h4>
            <div>
              <FaClock className="duration-icon" />
              <strong>{tour.duration}</strong>. Pickup available
            </div>
          </div>
          <p className="offer-box">Save up to 35%</p>
          <Button className="btn">Book Now</Button>
        </div>
      </div>
    </section>
  );
};
