import { DashboardStats } from "@/types/dashboard";

interface Props {
  data?: DashboardStats;
}

export default function RecentAnimals({
  data,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6">

      <h2 className="mb-5 text-lg font-semibold">
        Satwa Terbaru
      </h2>

      <div className="space-y-3">

        {data?.recentAnimals.map((animal) => (

          <div
            key={animal.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <div>

              <h3 className="font-semibold">
                {animal.nama}
              </h3>

              <p className="text-sm text-gray-500">
                {animal.jenis}
              </p>

            </div>

            <span>
              {animal.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}