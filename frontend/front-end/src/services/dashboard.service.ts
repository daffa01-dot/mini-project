import api from "@/lib/axios";
import { DashboardResponse } from "@/types/dashboard";

export async function getDashboardStats(): Promise<DashboardResponse> {
  const { data } = await api.get("/dashboard/stats");

  return data.data;
}