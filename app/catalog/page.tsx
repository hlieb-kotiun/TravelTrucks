import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CatalogPageClient from "./CatalogPage.client";
import { getCampers } from "@/api/catalog";

const CatalogPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["campers"],
    queryFn: () => getCampers(1, 5),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogPageClient />
    </HydrationBoundary>
  );
};
export default CatalogPage;
