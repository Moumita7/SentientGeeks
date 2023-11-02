import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Star = ({ star }) => {
  // console.log(star)
  const ratingStar = Array.from({ length: 10 }, (ele, index) => {
    let num = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar className="icon" />
        ) : star >= num ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <FaRegStar className="icon" />
        )}
      </span>
    );
  });
  return <div>{ratingStar}</div>;
};

export default Star;
