import { useState } from "react";
import Star from "./Components/Star";
import { Data, GenreData, ratingData } from "./utils/Data";
import { IoIosArrowDown } from "react-icons/io";
import "./App.css";
import Rating from "./Components/Rating";
import Genre from "./Components/Genre";

function App() {
  const [filterText, setFilterText] = useState("");
  let [rating, setRating] = useState(false);
  let [genre, setGenre] = useState(false);

  let [filteredMoviesData] = useState(Data);

  console.log("ff", filteredMoviesData);

  const handleFilterChange = (e) => {
    const text = e.target.value.toLowerCase();
    setFilterText(text);
  };

  const filteredMovies = filteredMoviesData.filter((movie) =>
    movie.title.toLowerCase().includes(filterText)
  );

  let handleRating = () => {
    setRating(!rating);
  };
  let handleGenre = () => {
    setGenre(!genre);
  };

  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedGenre, setIsCheckedGenre] = useState(false);

  let [ratingEle, setratingEle] = useState("");
  let [genreEle, setgenreEle] = useState([]);

  let handleRatingPoint = (value) => {
    setIsChecked(!isChecked);

    let elearr = [];
    filteredMovies.filter((ele) => {
      if (ele.rating == value) {
        elearr.push(ele);
        setratingEle(elearr);
      }
    });
  };
  // console.log(filteredMovies);
  // console.log("c", isChecked);

  let handleGenrePoint = (category) => {
    setIsCheckedGenre(!isCheckedGenre);

    let elearrGenre = [];
    filteredMovies.filter((ele) => {
      if (ele.category == category) {
        elearrGenre.push(ele);
        setgenreEle(elearrGenre);
      }
    });
  };
  // console.log("data",genreEle)

  return (
    <div className="main">
      <div>
        <input
          type="text"
          placeholder="Enter Movie Name"
          value={filterText}
          onChange={handleFilterChange}
        />
        {filterText.length > 0 &&
          (isChecked ? (
            ratingEle.length == 0 ? (
              ""
            ) : (
              <div style={{ border: "1px solid black" }}>
                {ratingEle?.map((ele, id) => {
                  return (
                    <div key={id} style={{ display: "flex" }}>
                      <div>
                        <p>{ele.title}</p>
                        <Star star={ele.rating} />
                      </div>
                      <div>
                        <p style={{ fontSize: "10px" }}>{ele.category}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )
          ) : isCheckedGenre ? (
            genreEle.map((ele, id) => {
              return (
                <div
                  key={id}
                  style={{ display: "flex", border: "1px solid black" }}
                >
                  <div>
                    <p>{ele.title}</p>
                    <Star star={ele.rating} />
                  </div>
                  <div>
                    <p style={{ fontSize: "10px" }}>{ele.category}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ border: "1px solid black" }}>
              {filteredMovies.map((movie, index) => (
                <div key={index} style={{ display: "flex" }}>
                  <div>
                    <p>{movie.title}</p>
                    <Star star={movie.rating} />
                  </div>
                  <div>
                    <p style={{ fontSize: "10px" }}>{movie.category}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
      <div className="rating">
        <div>
          <button onClick={handleRating}>
            Rating <IoIosArrowDown />
          </button>
          {rating ? (
            <div>
              <input type="checkbox" value="Bike" />
              <label> All Rating</label>
              <Rating handleRatingPoint={handleRatingPoint} arr={ratingData} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <button onClick={handleGenre}>
            {" "}
            Genre <IoIosArrowDown />
          </button>
          {genre ? (
            <div>
              <input type="checkbox" value="Bike" />
              <label> All Genre</label>
              <Genre arr={GenreData} handleGenrePoint={handleGenrePoint} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
