"use client";

import css from "./LoadMoreButton.module.css";

interface Props {
  fetchNextPage: () => void;
}

const LoadMoreButton = ({ fetchNextPage }: Props) => {
  return (
    <button className={css.btn} onClick={fetchNextPage}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
