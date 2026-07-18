import StatsCard from "./dashboardStat"
import { DashboardStats } from "@/types/dashboard";

interface Props {
  data?: DashboardStats;
}

export default function StatsGrid({
  data,
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Total Satwa"
        value={data?.totalSatwa ?? 0}
      />

      <StatsCard
        title="Total Donasi"
        value={`Rp ${Number(
          data?.totalDonasi ?? 0
        ).toLocaleString("id-ID")}`}
      />

      <StatsCard
        title="Total Laporan"
        value={data?.totalLaporan ?? 0}
      />

      <StatsCard
        title="Pending"
        value={data?.totalDonasiPending ?? 0}
      />

    </div>
  );
}