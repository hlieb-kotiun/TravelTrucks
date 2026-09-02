"use client";
import { getCamperById, getCamperReviews } from "@/lib/api/catalog";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./CamperPageClient.module.css";
import Gallery from "@/components/Gallery/Gallery";
import VehicleInfo from "@/components/VehicleInfo/VehicleInfo";
import VehicleDetails from "@/components/VehicleDetails/VehicleDetails";
import ReviewList from "@/components/ReviewList/ReviewList";
import BookingForm from "@/components/BookingForm/BookingForm";

const CamperPageClient = () => {
  const { id } = useParams<{ id: string }>();

  const { data: camper } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => {
      return getCamperById(id);
    },
    refetchOnMount: false,
    placeholderData: keepPreviousData,
  });

  const { data: reviews } = useQuery({
    queryKey: ["reviews", id],
    queryFn: () => {
      return getCamperReviews(id);
    },
    refetchOnMount: false,
    placeholderData: keepPreviousData,
  });

  return (
    <section className={css.section}>
      <div className={`container`}>
        <div className={css.container1}>
          <Gallery gallery={camper?.gallery ?? []} />
          <div className={css.infoCards}>
            <VehicleInfo camper={camper} />
            <VehicleDetails camper={camper} />
          </div>
        </div>

        <h3 className={css.title}>Reviews</h3>
        <div className={css.container2}>
          <ReviewList reviews={reviews} />
          <BookingForm id={id} />
        </div>
      </div>
    </section>
  );
};

export default CamperPageClient;
