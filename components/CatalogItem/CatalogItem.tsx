import { Camper } from "@/types/types";
import css from "./CatalogItem.module.css";
import Image from "next/image";
import { FaGasPump, FaCaravan, FaStar } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import { LuMap } from "react-icons/lu";
import Link from "next/link";
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
          <div className={css.nameContainer}>
            <p className={css.cardName}>{camper.name}</p>
            <p className={css.cardName}>€{camper.price}</p>
          </div>
          <div className={css.infoContainer}>
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
            <p className={css.description}>{camper.description}</p>
            <ul className={css.cardList}>
              <li className={css.listItem}>
                <FaGasPump className={css.itemIcon} />
                <p className={css.itemText}>{camper.engine}</p>
              </li>
              <li className={css.listItem}>
                <TbManualGearbox className={css.itemIcon} />
                <p className={css.itemText}>{camper.transmission}</p>
              </li>
              <li className={css.listItem}>
                <FaCaravan className={css.itemIcon} />
                <p className={css.itemText}>{camper.form}</p>
              </li>
            </ul>
            <Link
              className={`greenBtn ${css.datailsPageLink}`}
              href={`/catalog/${camper.id}`}
            >
              Show more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CatalogItem;
