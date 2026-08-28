"use client";

import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <div className={css.loaderContendWrapper}>
          <div className={css.loader} />
          <div className={css.messageContainer}>
            <p className={css.message1}>Loading tracks...</p>
            <p className={css.message2}>
              Please wait while we fetch the best travel trucks for you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
