"use client";
import { Review } from "@/types/types";
import s from "./ReviewCard.module.css";
import ActiveStarList from "../ActiveStarList/ActiveStarList";

interface ReviewCardProps {
  review: Review | undefined;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className={s.cardContainer}>
      <div className={s.reviewerContainer}>
        <div className={s.profile}>
          {review?.reviewer_name.at(0)?.toUpperCase()}
        </div>
        <div className={s.nameContainer}>
          <p className={s.name}>{review?.reviewer_name}</p>
          <ActiveStarList rating={review?.reviewer_rating ?? 5} />
        </div>
      </div>
      <p className={s.comment}>{review?.comment}</p>
    </div>
  );
};

export default ReviewCard;
