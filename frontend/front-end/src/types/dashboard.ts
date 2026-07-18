import { Donation } from "./donation";

export interface DashboardSummary {
  // DONATUR
  totalNominal?: number;
  jumlahDonasi?: number;
  pending?: number;
  verified?: number;

  // SHELTER
  totalSatwa?: number;
  totalDonasi?: number;
  totalPending?: number;
  totalLaporan?: number;

  // ADMIN
  totalShelter?: number;
  totalUser?: number;
}

export interface DashboardResponse {
  summary: DashboardSummary;
  recentDonations: Donation[];
}