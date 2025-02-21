import "./NewsLetter.css";
import NewsLetterImage from "../../images/newsletterimage.jpg";
import {Button} from '../ui/Button'
export const NewsLetter = () => {
  return (
    <div className="new-letter">
      <div className="container">
        <img src={NewsLetterImage} alt="News letter" />
        <div className="news-letter-content">
          <h2>Your Dubai itinerary is waiting.</h2>
          <p>
            Recieve a curated 48-hour itinerary featuring the most iconic
            experience in Dubai straight to your inbox
          </p>
          <div className="form-box">
            <input type="email" placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
