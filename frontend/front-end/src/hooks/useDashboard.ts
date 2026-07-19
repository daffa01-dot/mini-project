"use client";

import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "@/services/dashboard.service";
import { QUERY_KEYS } from "@/lib/queryKeys";

export function useDashboard() {
  return useQuery({
   queryKey: QUERY_KEYS.dashboard,
    queryFn: getDashboardStats,
  });
}