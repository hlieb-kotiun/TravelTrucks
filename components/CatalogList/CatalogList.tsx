import { Camper } from "@/types/types";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./CatalogList.module.css";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

interface CatalogListProps {
  campers: Camper[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

const CatalogList = ({
  campers,
  fetchNextPage,
  hasNextPage,
}: CatalogListProps) => {
  return (
    <div className={css.container}>
      <ul className={css.catalogList}>
        {campers.map((item) => {
          return (
            <li key={item.id}>
              <CatalogItem camper={item} />
            </li>
          );
        })}
      </ul>
      {hasNextPage && <LoadMoreButton fetchNextPage={fetchNextPage} />}
    </div>
  );
};

export default CatalogList;
