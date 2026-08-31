"use client";
import FilterBar from "@/components/FilterBar/FilterBar";
import css from "./CatalogPage.module.css";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { getCampers } from "@/lib/api/catalog";
import CatalogList from "@/components/CatalogList/CatalogList";
import { useEffect, useState } from "react";
import Loader from "@/components/Modal/Loader";
import NoContent from "@/components/NoContent/NoContent";
import {
  CamperForm,
  Engine,
  FilterFromValues,
  Transmission,
} from "@/types/types";

interface AppliedFilters {
  location?: string;
  form?: CamperForm;
  transmission?: Transmission;
  engine?: Engine;
}

const CatalogPageClient = () => {
  const [filters, setFilters] = useState<AppliedFilters>({});

  const {
    data: campers,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["campers", filters],

    queryFn: ({ pageParam }) => {
      return getCampers(
        pageParam,
        4,
        filters.location,
        filters.form,
        filters.transmission,
        filters.engine,
      );
    },

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }

      return undefined;
    },

    refetchOnMount: false,
  });

  const camperList = campers?.pages.flatMap((page) => page.campers) ?? [];

  const handleSearchWithFilters = (values: FilterFromValues) =>
    setFilters({
      location: values.location.trim() || undefined,
      form: values.forms,
      transmission: values.transmissions,
      engine: values.engines,
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
          {(isLoading || isFetchingNextPage) && <Loader />}
          <FilterBar onSearch={handleSearchWithFilters} />
          {camperList.length > 0 ? (
            <CatalogList
              campers={camperList}
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          ) : (
            <NoContent refetch={refetch} />
          )}
        </div>
      </section>
    </main>
  );
};
export default CatalogPageClient;
