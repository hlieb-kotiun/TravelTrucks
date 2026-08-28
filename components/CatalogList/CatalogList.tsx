import { Camper } from "@/types/types";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./CatalogList.module.css";

interface CatalogListProps {
  campers: Camper[];
}

const CatalogList = ({ campers }: CatalogListProps) => {
  return (
    <ul className={css.catalogList}>
      {campers.map((item) => {
        return (
          <li key={item.id}>
            <CatalogItem camper={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default CatalogList;
