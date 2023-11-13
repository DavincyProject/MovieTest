import { Link } from "react-router-dom";
import PopularCard from "./CardComponent/PopularCard";
import { useState } from "react";
import { useSelector } from "react-redux";

const PopularMovies = () => {
  const [showAllMovies, setShowAllMovies] = useState(false);

  const totalResults = useSelector((state) => state.popular.totalResult);

  const handleSeeAllClick = () => {
    setShowAllMovies(true);
  };

  return (
    <div className="container-fluid mt-3 ">
      <div className="d-flex justify-content-between align-items-center mx-4 mb-4">
        {totalResults && (
          <>
            <h1 className="mb-0 text-light fs-2 ">
              Popular Movie - Staging ver
            </h1>

            <Link
              className="text-decoration-none text-danger fw-semibold cursor-pointer"
              onClick={handleSeeAllClick}
            >
              See All Movies{" "}
              <span>
                <img
                  src="/arrow.svg"
                  alt="arrow_icon"
                  style={{ width: "20px" }}
                />
              </span>
            </Link>
          </>
        )}
      </div>

      <div>
        <PopularCard showAllMovies={showAllMovies} />
      </div>
    </div>
  );
};

export default PopularMovies;
