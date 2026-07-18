"use client";

import { useRouter } from "next/navigation";

interface Props {
  satwaId: string;
  shelterId: string;
}

export default function DonateButton({
  satwaId,
  shelterId,
}: Props) {
  const router = useRouter();

  const handleDonate = () => {
   
    router.push(
      `/dashboard/donor/donation/create?satwaId=${satwaId}&shelterId=${shelterId}`
    );
  };

  return (
    
    <button
      onClick={handleDonate}
      className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
    >
      Donasi Sekarang
    </button>
    
  );
}