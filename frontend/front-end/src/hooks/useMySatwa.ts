import { useQuery } from "@tanstack/react-query";
import { getMySatwa } from "@/services/satwa.service";

export function useMySatwa() {
  return useQuery({
    queryKey: ["my-satwa"],
    queryFn: getMySatwa,
  });
}