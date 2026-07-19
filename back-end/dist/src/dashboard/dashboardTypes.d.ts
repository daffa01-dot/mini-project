export interface DashboardSummary {
    totalDonasi?: number;
    totalSatwa?: number;
    totalShelter?: number;
    totalUser?: number;
    totalLaporan?: number;
    totalPending?: number;
    jumlahDonasi?: number;
    verified?: number;
}
export interface DashboardResponse {
    summary: DashboardSummary;
    recentDonations: any[];
    charts?: unknown;
}
//# sourceMappingURL=dashboardTypes.d.ts.map