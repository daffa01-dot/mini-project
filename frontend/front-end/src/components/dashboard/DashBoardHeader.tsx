interface Props {
  shelterName?: string;
}

export default function DashboardHeader({
  shelterName,
}: Props) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold">
        Halo, {shelterName ?? "Shelter"} 👋
      </h1>

      <p className="mt-2 text-gray-500">
        Selamat datang kembali.
      </p>
    </div>
  );
}