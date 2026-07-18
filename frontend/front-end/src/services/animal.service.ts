import api from "@/lib/axios";
import { AnimalResponse, Animal} from "@/types/satwa";

export const getAnimalDetail = async (
  id: string,
): Promise<Animal> => {
  const { data } = await api.get<AnimalResponse>(
    `/satwa/${id}`
  );

  return data.data;
};