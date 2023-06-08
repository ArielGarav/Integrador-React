import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Star from "./Start";
import { setRating } from "../../redux/Star/starSlice";

const StarRating = () => {
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.star.rating);

  const handleClick = (value) => {
    dispatch(setRating(value));
  };

  return (
    <div>
      <p>Rate The Product :</p>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star key={value} filled={value <= rating} onClick={value} />
      ))}
    </div>
  );
};

export default StarRating;
