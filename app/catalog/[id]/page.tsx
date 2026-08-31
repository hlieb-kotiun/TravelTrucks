import { getCamperById, getCamperReviews } from "@/lib/api/catalog";
import CamperPageClient from "./CamperPage.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface CamperPageProps {
  params: Promise<{ id: string }>;
}

const CamperPage = async ({ params }: CamperPageProps) => {
  const { id } = await params;

  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["camper", id],
      queryFn: () => getCamperById(id),
    }),

    queryClient.prefetchQuery({
      queryKey: ["reviews", id],
      queryFn: () => getCamperReviews(id),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperPageClient />;
    </HydrationBoundary>
  );
};
export default CamperPage;
