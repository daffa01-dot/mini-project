"use client";

import { useQuery } from "@tanstack/react-query";
import { getShelterDetail } from "@/services/shelter.service";

export function useShelterDetail(id: string) {
  return useQuery({
    queryKey: ["shelter-detail", id],
    queryFn: () => getShelterDetail(id),
    enabled: !!id,
  });
}