import api from "@/lib/axios";

export const getMySatwa = async () => {
  const { data } = await api.get("/satwa/my");
  return data.data;
};

export const getSatwaById = async (id: string) => {
  const { data } = await api.get(`/satwa/${id}`);
  return data.data;
};

export const createSatwa = async (
  formData: FormData
) => {
  const { data } = await api.post(
    "/satwa",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return data;
};

export const updateSatwa = async (
  id: string,
  formData: FormData
) => {
  const { data } = await api.put(
    `/satwa/${id}`,
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return data;
};

export const deleteSatwa = async (
  id: string
) => {
  const { data } = await api.delete(
    `/satwa/${id}`
  );

  return data;
};