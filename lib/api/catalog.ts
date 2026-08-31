import { ApiResponse, CamperDetails, Review } from "@/types/types";
import axios from "axios";

const api = axios.create({
  baseURL: "https://campers-api.goit.study/",
});

export const getCampers = async (
  page: number = 1,
  perPage: number = 4,
  location?: string,
  form?: string,
  transmission?: string,
  engine?: string,
): Promise<ApiResponse> => {
  try {
    const { data } = await api.get<ApiResponse>("/campers", {
      params: {
        page,
        perPage,
        location,
        form,
        transmission,
        engine,
      },
    });

    return data;
  } catch (error) {
    throw new Error("Something went wrong by creating new note!", {
      cause: error,
    });
  }
};

export const getCamperById = async (id: string): Promise<CamperDetails> => {
  try {
    const { data } = await api.get<CamperDetails>(`/campers/${id}`);
    console.log("res : ", data);
    return data;
  } catch (error) {
    throw new Error("Something went wrong by creating new note!", {
      cause: error,
    });
  }
};

export const getCamperReviews = async (id: string): Promise<Review[]> => {
  try {
    const { data } = await api.get<Review[]>(`/campers/${id}/reviews`);
    console.log("reviews data : ", data);
    return data;
  } catch (error) {
    throw new Error("Something went wrong by creating new note!", {
      cause: error,
    });
  }
};
