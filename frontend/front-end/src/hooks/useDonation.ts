import { useQuery } from "@tanstack/react-query";

import { getDonationById } from "@/services/donation.service";

export function useDonation(
  donationId: string
) {
  return useQuery({
    queryKey: [
      "donation",
      donationId,
    ],

    queryFn: () =>
      getDonationById(donationId),

    enabled: !!donationId,
  });
}