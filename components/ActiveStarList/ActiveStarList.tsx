"use client";

import { FaStar } from "react-icons/fa";
import s from "./ActiveStarList.module.css";

interface ActiveStarList {
  rating: number;
}

const ActiveStarList = ({ rating }: ActiveStarList) => {
  const filledStars = Math.round(rating);

  return (
    <ul className={s.list}>
      {Array.from({ length: 5 }, (_, index) => (
        <li key={index}>
          <FaStar className={index < filledStars ? s.active : s.inactive} />
        </li>
      ))}
    </ul>
  );
};

export default ActiveStarList;
