import api from "@/lib/axios";
import { AnimalResponse, Satwa} from "@/types/satwa";

export const getAnimalDetail = async (
  id: string,
): Promise<Satwa> => {
  const { data } = await api.get<AnimalResponse>(
    `/satwa/${id}`
  );

  return data.data;
};