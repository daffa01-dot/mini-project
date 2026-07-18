import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/queryKeys";
import { getDonationHistory } from "@/services/donation.service";

export function useDonationHistory() {
  return useQuery({
   queryKey: QUERY_KEYS.donationHistory,
    queryFn: getDonationHistory,
  });
}