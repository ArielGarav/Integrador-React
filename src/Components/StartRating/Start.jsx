import React from "react";
import { useDispatch } from "react-redux";
import { setRating } from "../../redux/Star/starSlice";

const Star = ({ filled, onClick }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setRating(onClick));
  };

  return (
    <span
      style={{
        color: filled ? "yellow" : "gray",
        cursor: "pointer",
        fontSize: "40px",
        marginRight: "8px",
      }}
      onClick={handleClick}
    >
      &#9733;
    </span>
  );
};

export default Star;
