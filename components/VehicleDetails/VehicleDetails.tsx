"use client";

import { CamperDetails } from "@/types/types";
import css from "./VehicleDetails.module.css";

interface VehicleInfoProps {
  camper: CamperDetails | undefined;
}

const VehicleDetails = ({ camper }: VehicleInfoProps) => {
  return (
    <div className={css.detailsContainer}>
      <p className={css.title}>Vehicle details</p>
      <ul className={css.list}>
        {camper?.amenities.map((elm, idx) => {
          return (
            <li key={idx} className={css.listItem}>
              {elm}
            </li>
          );
        })}
      </ul>
      <ul className={css.list2}>
        <li className={css.list2Item}>
          <p>Form </p>
          <p>{camper?.form}</p>
        </li>
        <li className={css.list2Item}>
          <p>Length</p> <p>{camper?.length}</p>
        </li>
        <li className={css.list2Item}>
          <p>Width</p> <p>{camper?.width}</p>
        </li>
        <li className={css.list2Item}>
          <p>Height</p> <p>{camper?.height}</p>
        </li>
        <li className={css.list2Item}>
          <p>Tank</p> <p>{camper?.engine}</p>
        </li>
        <li className={css.list2Item}>
          <p>Consumption</p> <p>{camper?.consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
