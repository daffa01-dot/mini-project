import { useQuery } from "@tanstack/react-query";

import { getDonationById } from "@/services/donation.service";

export function useDonationById(id: string) {
  return useQuery({
    queryKey: ["donation-detail", id],
    queryFn: () => getDonationById(id),
    enabled: !!id,
  });
}