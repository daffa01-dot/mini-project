"use client";

import { useCheckoutDonation } from "@/hooks/useCheckoutDonation";

interface Props {
  satwaId: string;
  pesan: string;
}

export default function DonationCheckoutContainer({
  satwaId,
}: Props) {
  const checkout = useCheckoutDonation();

  const handleCheckout = (nominal: number) => {
    checkout.mutate({
      satwaId,
      nominal,
      
    });
  };

  return (
    <div>
      {/* Nanti diganti partner */}
      <button
        onClick={() =>
          handleCheckout(
            50000,
            
          )
        }
        disabled={checkout.isPending}
      >
        {checkout.isPending
          ? "Memproses..."
          : "Checkout"}
      </button>
    </div>
  );
}