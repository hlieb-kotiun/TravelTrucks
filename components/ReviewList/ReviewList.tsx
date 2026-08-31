"use client";
import { Review } from "@/types/types";
import ReviewCard from "../ReviewCard/ReviewCard";

import css from "./ReviewList.module.css";

interface ReviewListProps {
  reviews: Review[] | undefined;
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
    <div>
      <h3 className={css.title}>Reviews</h3>
      <ul className={css.list}>
        {reviews?.map((item) => {
          return <ReviewCard key={item.id} review={item} />;
        })}
      </ul>
    </div>
  );
};

export default ReviewList;
