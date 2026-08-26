import axios from "axios";

const api = axios.create({
  baseURL: "https://campers-api.goit.study/",
});

export const getCampers = async (
  page: number = 1,
  perPage: number = 5,
  location: string,
  form: string,
  transmission: string,
  engine: string,
) => {
  try {
    const response = await api.get("/campers", {
      params: {},
    });
    return response;
  } catch {}
};
