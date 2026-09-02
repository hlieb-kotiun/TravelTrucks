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
    return data;
  } catch (error) {
    throw new Error("Something went wrong by creating new note!", {
      cause: error,
    });
  }
};

export const bookCamper = async (
  id: string,
  name: string,
  email: string,
): Promise<{ message: string }> => {
  try {
    const res = await api.post<{ message: string }>(
      `/campers/${id}/booking-requests`,
      {
        name,
        email,
      },
    );
    console.log(res);

    return res.data;
  } catch (error) {
    throw new Error("Something went wrong by creating new note!", {
      cause: error,
    });
  }
};
