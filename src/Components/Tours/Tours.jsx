import { useEffect, useState } from "react";
import { toursList } from "../../data";
import { TourItem } from "./TourItem";
import "./Tours.css";
import { Pagination } from "../ui/Pagination";
import { CustomDropdown } from "../ui/CustomDropdown";

export const Tours = () => {
  const [start, setStart] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("Recommended");
  const itemsPerPage = 6;
  const pageLength = Math.ceil(toursList.length / itemsPerPage);

  sortTours(selected);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setData(toursList.slice(start, start + itemsPerPage));
      setIsLoading(false);
    }, 1000);
  }, [start, selected]);

  return (
    <section className="section-tours">
      <div className="container">
        <CustomDropdown
          toursList={toursList}
          selected={selected}
          setSelected={setSelected}
        />
        <div className="tours">
          {isLoading
            ? Array.from({ length: itemsPerPage }, (_, index) => (
                <TourItem isLoading={true} key={index} />
              ))
            : data.map((tour) => (
                <TourItem isLoading={false} tour={tour} key={tour.id} />
              ))}
        </div>
        <Pagination
          isLoading={isLoading}
          pageLength={pageLength}
          setStart={setStart}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </section>
  );
};

const sortTours = (selected) => {
  toursList.sort((a, b) => {
    if (selected.includes("Low")) return a.priceFrom - b.priceFrom;
    if (selected.includes("High")) return b.priceFrom - a.priceFrom;
    return b.rating - a.rating;
  });
};
