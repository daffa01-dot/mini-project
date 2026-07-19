import api from "@/lib/axios";
import { ShelterDetail, ShelterResponse } from "@/types/shelter";

export const getShelters = async (): Promise<ShelterResponse> => {
  const { data } = await api.get("/shelter");

  return data;
};

export const getShelterDetail = async (id: string): Promise<ShelterDetail> => {
  const { data } = await api.get(`/shelter/${id}`);

  return data.data;
};
