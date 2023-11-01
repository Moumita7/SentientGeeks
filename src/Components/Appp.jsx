import { useState } from "react";
import Star from "./Components/Star";
import { Data } from "./utils/Data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./App.css";
import Rating from "./Components/Rating";

function App() {
  const [filterText, setFilterText] = useState("");
  let [rating, setRating] = useState(false);
  let [ratingPoint, setRatingPoint] = useState();

  const handleFilterChange = (e) => {
    const text = e.target.value.toLowerCase();
    setFilterText(text);
  };

  const filteredMovies = Data.filter((movie) =>
    movie.title.toLowerCase().includes(filterText)
  );

  let handleRating = () => {
    setRating(!rating);
  };

  const [isChecked, setIsChecked] = useState(false);
  let [newData,setNewData]=useState([])
  let id;

  let handleRatingPoint = (value) => {
    // console.log(data.value)
    setIsChecked(event.target.checked);
    // console.log(id)
    // id=id;
    let newData=filteredMovies.map((ele,i)=>{
      // return ele
      
      if(ele.rating==value){
        console.log(ele)
      setNewData([...newData,ele])
      
      }
    })

    return newData

  };
  console.log(newData)


  let ratingData = [
    {
      id: 1,
      value: 1,
    },
    {
      id: 2,
      value: 2,
    },
    {
      id: 3,
      value: 3,
    },
    {
      id: 4,
      value: 4,
    },
    {
      id: 5,
      value: 5,
    },
    {
      id: 6,
      value: 6,
    },
    {
      id: 7,
      value: 7,
    },
    {
      id: 8,
      value: 8,
    },
    {
      id: 9,
      value: 9,
    },
    {
      id: 10,
      value: 10,
    },
  ];

  return (
    <div className="main">
      {/* {Data.map((ele,id)=>{
    return <div key={id}>
    <h2>{ele.title}</h2>
    <h2>{ele.rating}</h2>
    <h2>{ele.category}</h2>
    <h4>okkkk</h4>
    <Star star={ele.rating}/>


    </div>
  })} */}
      <div>
        {/* </div> */}
        <input
          type="text"
          placeholder="Enter Movie Name"
          value={filterText}
          onChange={handleFilterChange}
        />

{newData ?     (
          <div>
            {newData.map((movie, index) => (
              movie.id==id ? (
              <div key={index}>
                <p>{movie.title}</p>
                <Star star={movie.rating} />
              </div>
              ):""
            ))}
          </div>
        ):(
          filterText.length > 0 && (
          <div>
            {filteredMovies.map((movie, index) => (
              <div key={index}>
                <p>{movie.title}</p>
                <Star star={movie.rating} />
              </div>
            ))}
          </div>
        )
        )} 
        {/* {filterText.length > 0 && (
          <div>
            {filteredMovies.map((movie, index) => (
              <div key={index}>
                <p>{movie.title}</p>
                <Star star={movie.rating} />
              </div>
            ))}
          </div>
        )} */}
      </div>
      <div className="rating">
        <div>
          <button onClick={handleRating}>
            Rating <IoIosArrowDown />
          </button>
          {rating ? (
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> All Rating</label>
              <Rating handleRatingPoint={handleRatingPoint} arr={ratingData} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <button>
            {" "}
            Genre <IoIosArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
