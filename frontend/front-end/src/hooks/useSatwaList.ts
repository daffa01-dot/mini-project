import { useQuery } from "@tanstack/react-query";
import { getSatwa } from "@/services/satwa.service";
import { Satwa } from "@/types/satwa";

export function useSatwaList() {
  return useQuery<Satwa[]>({
    queryKey: ["landing-satwa"],
    queryFn: getSatwa,
  });
}