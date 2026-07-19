"use client";

import { useQuery } from "@tanstack/react-query";

import { getShelters } from "@/services/shelter.service";

export const useShelters = () => {
  return useQuery({
    queryKey: ["shelters"],

    queryFn: getShelters,
  });
};