import Image from "next/image";
import css from "./NoContent.module.css";
import { IoMdClose } from "react-icons/io";
import { ApiResponse } from "@/types/types";

interface Props {
  refetch: () => void;
  onReset: () => void;
}

const NoContent = ({ refetch, onReset }: Props) => {
  return (
    <div className={css.noContent}>
      <Image
        className={css.img}
        src="/notFoundImg.png"
        alt="No campers found"
        width="488"
        height="463"
      />
      <h2 className={css.title}>No campers found</h2>
      <p className={css.subTitle}>
        We couldn`t find any campers that match your filters. <br /> Try
        adjusting yoursearch or clearing some filters.
      </p>
      <div className={css.btnContainer}>
        <button onClick={onReset} className={css.clearBtn}>
          <IoMdClose width="24" height="24" className={css.clearBtnIcon} />
          Clear filters
        </button>
        <button onClick={refetch} className={`greenBtn ${css.refetchBtn}`}>
          View all campers
        </button>
      </div>
    </div>
  );
};

export default NoContent;
