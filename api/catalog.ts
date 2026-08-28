import { ApiResponse } from "@/types/types";
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
) => {
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
