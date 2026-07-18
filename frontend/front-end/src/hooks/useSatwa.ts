"use client";

import { useQuery } from "@tanstack/react-query";

import { getAnimalDetail } from "@/services/animal.service";

export function useAnimal(id: string) {
  return useQuery({
    queryKey: ["animal", id],

    queryFn: () => getAnimalDetail(id),

    enabled: !!id,
  });
}