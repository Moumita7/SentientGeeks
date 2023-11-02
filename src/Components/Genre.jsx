const Genre = ({ arr, handleGenrePoint }) => {
  return (
    <div style={{}}>
      {arr.map((ele, i) => {
        return (
          <div key={i} style={{ display: "flex" }}>
            <input
              type="checkbox"
              value={ele.category}
              onChange={() => handleGenrePoint(ele.category)}
            />
            <label> {ele.category}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Genre;
