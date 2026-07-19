"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authstore";

export default function DashboardPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!user) return;

    switch (user.role) {
      case "DONATUR":
        router.replace("/dashboard/donor");
        break;

      case "SHELTER":
        router.replace("/dashboard/shelter");
        break;

      case "SUPER_ADMIN":
        router.replace("/dashboard/admin");
        break;
    }
  }, [user, router]);

  return <p>Mengarahkan...</p>;
}