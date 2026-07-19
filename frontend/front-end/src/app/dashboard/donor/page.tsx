"use client";

import WelcomeCard from "@/components/dashboard/donor/welcomeCard";
import DashboardStats from "@/components/dashboard/donor/dashboardStats";
import RecentDonation from "@/components/dashboard/donor/recentDonation";
import QuickAction from "@/components/dashboard/donor/quickAction";
import DashboardSkeleton from "@/components/dashboard/donor/DashboardSkeleton";

import { useDashboard } from "@/hooks/useDashboard";

export default function DonorDashboardPage() {
  const { data, isLoading } = useDashboard();

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <main className="space-y-8 p-10">
      <WelcomeCard />

      <DashboardStats
        summary={data?.summary}
      />

      <RecentDonation
        donations={data?.recentDonations ?? []}
      />

      <QuickAction />
    </main>
  );
}