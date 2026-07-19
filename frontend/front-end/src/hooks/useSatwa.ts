"use client";

import { useQuery } from "@tanstack/react-query";
import { getSatwaById } from "@/services/satwa.service";

export function useSatwa(id: string) {
  return useQuery({
    queryKey: ["satwa", id],

    queryFn: () => getSatwaById(id),

    enabled: !!id,
  });
}