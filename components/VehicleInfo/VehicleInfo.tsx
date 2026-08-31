import { FaStar } from "react-icons/fa";
import css from "./VehicleInfo.module.css";
import { LuMap } from "react-icons/lu";
import { CamperDetails } from "@/types/types";

interface VehicleInfoProps {
  camper: CamperDetails | undefined;
}

const VehicleInfo = ({ camper }: VehicleInfoProps) => {
  if (!camper) return null;

  return (
    <div className={css.infoContainer}>
      <p className={css.cardName}>{camper.name}</p>
      <div className={css.reviewsContainer}>
        <div className={css.iconContainer}>
          <FaStar className={css.starIcon} />
          <p className={css.reviwesText}>
            {camper.rating}
            {`(${camper.totalReviews} Reviews)`}
          </p>
        </div>
        <div className={css.iconContainer}>
          <LuMap className={css.mapIcon} />
          <p className={css.reviwesText}>{camper.location}</p>
        </div>
      </div>
      <p className={`${css.cardName} ${css.cardPrice}`}>€{camper.price}</p>
      <p className={css.description}>{camper.description}</p>
    </div>
  );
};

export default VehicleInfo;
