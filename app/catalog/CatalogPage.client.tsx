"use client";
import FilterBar from "@/components/FilterBar/FilterBar";
import css from "./CatalogPage.module.css";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getCampers } from "@/api/catalog";
import CatalogList from "@/components/CatalogList/CatalogList";

const CatalogPageClient = () => {
  const {
    data: campers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note"],
    queryFn: () => {
      return getCampers();
    },
    refetchOnMount: false,
    placeholderData: keepPreviousData,
  });

  return (
    <main>
      <section className={css.catalogPageSection}>
        <div className={`container ${css.catalogPageContainer}`}>
          <FilterBar />
          <CatalogList campers={campers?.campers ?? []} />
        </div>
      </section>
    </main>
  );
};
export default CatalogPageClient;
