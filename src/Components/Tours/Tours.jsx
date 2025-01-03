import { useEffect, useState } from "react";
import { toursList } from "../../data";
import { TourItem } from "./TourItem";
import "./Tours.css";
import { Button } from "../ui/Button";
import { PagenationCount } from "../ui/PagenationCount";

export const Tours = () => {
  const [start, setStart] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [curPage, setCurPage] = useState(1);
  const [data, setData] = useState([]);

  const itemsPerPage = 6;
  const pageLength = Math.ceil(toursList.length / itemsPerPage);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setData(toursList.slice(start, start + itemsPerPage));
      setIsLoading(false);
    }, 1000);
  }, [start]);

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
    <section className="section-tours">
      <div className="container">
        <div className="tours">
          {isLoading
            ? Array.from({ length: itemsPerPage }, (_, index) => (
                <TourItem isLoading={true} key={index} />
              ))
            : data.map((tour) => (
                <TourItem isLoading={false} tour={tour} key={tour.id} />
              ))}
        </div>
        <div className="pagenation">
          <Button
            id="btn-pagenation"
            onClick={handlePrev}
            disabled={curPage === 1 || isLoading}
          >
            Prev
          </Button>
          {Array.from({ length: pageLength }, (_, index) => (
            <PagenationCount
              key={index + 1}
              number={index + 1}
              curPage={curPage}
              onClick={() => handlePageClick(index + 1)}
            />
          ))}
          <Button
            id="btn-pagenation"
            onClick={handleNext}
            disabled={curPage === pageLength || isLoading}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};
