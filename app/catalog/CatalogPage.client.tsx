"use client";
import FilterBar from "@/components/FilterBar/FilterBar";
import css from "./CatalogPage.module.css";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getCampers } from "@/api/catalog";
import CatalogList from "@/components/CatalogList/CatalogList";
import { useEffect } from "react";
import Loader from "@/components/Modal/Loader";
import NoContent from "@/components/NoContent/NoContent";

const CatalogPageClient = () => {
  const {
    data: campers,
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["note"],
    queryFn: () => {
      return getCampers();
    },
    refetchOnMount: false,
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (!isLoading) return;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <main>
      <section className={css.catalogPageSection}>
        <div className={`container ${css.catalogPageContainer}`}>
          {isLoading && <Loader />}
          <FilterBar />
          {campers?.campers && campers?.campers.length > 1 ? (
            <CatalogList campers={campers?.campers ?? []} />
          ) : (
            <NoContent />
          )}
        </div>
      </section>
    </main>
  );
};
export default CatalogPageClient;
