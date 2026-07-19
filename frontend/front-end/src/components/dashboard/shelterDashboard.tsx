import DashboardHeader from "./DashBoardHeader";
import Sidebar from "./sidebar";
import SatwaTable from "../animals/satwaTable";

export default function ShelterDashboard() {
  return (
    <>
      <DashboardHeader />
      <SatwaTable data={[]} onDelete={function (id: string): void {
        throw new Error("Function not implemented.");
      } } />
    </>
  );
}
