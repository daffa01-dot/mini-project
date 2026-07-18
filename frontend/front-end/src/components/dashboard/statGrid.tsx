import {
  PawPrint,
  Wallet,
  FileText,
  Clock3,
} from "lucide-react";

import DashboardStatCard from "@/components/dashboard/common/dashboardStatCard";
import { DashboardSummary } from "@/types/dashboard";

interface Props {
  data?: DashboardSummary;
}

export default function StatsGrid({
  data,
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

      <DashboardStatCard
        title="Total Satwa"
        value={data?.totalSatwa ?? 0}
        icon={PawPrint}
      />

      <DashboardStatCard
        title="Total Donasi"
        value={`Rp ${Number(
          data?.totalDonasi ?? 0
        ).toLocaleString("id-ID")}`}
        icon={Wallet}
      />

      <DashboardStatCard
        title="Total Laporan"
        value={data?.totalLaporan ?? 0}
        icon={FileText}
      />

      <DashboardStatCard
        title="Pending"
        value={data?.totalPending ?? 0}
        icon={Clock3}
      />

    </div>
  );
}