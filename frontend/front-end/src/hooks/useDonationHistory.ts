import { useQuery } from "@tanstack/react-query";

import { getDonationHistory } from "@/services/donation.service";

export function useDonationHistory() {
  return useQuery({
    queryKey: ["donation-history"],
    queryFn: getDonationHistory,
  });
}