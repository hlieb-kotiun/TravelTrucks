import { Camper } from "@/types/types";
import css from "./CatalogItem.module.css";
import Image from "next/image";
interface CatalogItemProps {
  camper: Camper;
}

const CatalogItem = ({ camper }: CatalogItemProps) => {
  console.log(camper);

  return (
    <div className={css.catalogItemContainer}>
      <div className={css.cardWrapper}>
        <Image
          className={css.cardImage}
          src={camper.coverImage}
          alt={camper.name}
          width="219"
          height="240"
        />
        <div className={css.cardContentContainer}>
          <div className={css.namePriceContainer}>
            <h3 className={css.cardName}>{camper.name}</h3>
            <p className={css.cardPrice}>{camper.price}</p>
          </div>
          <div className={css.infoContainer}>
            <div>
              <p>
                X{camper.rating}
                {`(${camper.totalReviews} Reviews)`}
              </p>
              <p>{camper.location}</p>
            </div>
            <p>{camper.description}</p>
            <ul>
              <li>{camper.engine}</li>
              <li>{camper.transmission}</li>
              <li>{camper.form}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CatalogItem;
