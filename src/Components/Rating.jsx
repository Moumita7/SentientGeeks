import Star from "./Star";

const Rating = ({ arr, handleRatingPoint }) => {
  return (
    <div style={{}}>
      {arr.map((ele, i) => {
        return (
          <div key={i} style={{ display: "flex" }}>
            <input
              type="checkbox"
              value={ele.value}
              onChange={() => handleRatingPoint(ele.value)}
            />
            <label>
              {" "}
              <Star star={ele.id} />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
