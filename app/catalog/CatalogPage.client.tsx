"use client";
import FilterBar from "@/components/FilterBar/FilterBar";
import css from "./CatalogPage.module.css";

const CatalogPageClient = () => {
  return (
    <main>
      <section className={css.catalogPageSection}>
        <div className={`container`}>
          <FilterBar />
        </div>
      </section>
    </main>
  );
};
export default CatalogPageClient;
