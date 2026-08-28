export type CamperForm =
  | "alcove"
  | "panel_van"
  | "integrated"
  | "semi_integrated";

export type Transmission = "automatic" | "manual";

export type Engine = "diesel" | "petrol" | "hybrid" | "electric";

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: CamperForm;
  description: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  amenities: string[];
  coverImage: string;
  totalReviews: number;
}

export interface ApiResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface Filters {
  forms: CamperForm[];
  transmissions: Transmission[];
  engines: Engine[];
}

export interface FilterFromValues {
  location: string;
  forms: CamperForm;
  transmissions: Transmission;
  engines: Engine;
}
