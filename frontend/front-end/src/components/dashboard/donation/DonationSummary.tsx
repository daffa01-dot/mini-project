interface Props {
  nominal: number;
}

export default function DonationSummary({
  nominal,
}: Props) {
  return (
    <div className="sticky top-24 rounded-3xl bg-white p-8 shadow">

      <h2 className="text-3xl font-bold">
        Ringkasan
      </h2>

      <div className="mt-8 space-y-5">

        <div className="flex justify-between">
          <span>Nominal</span>

          <span>
            Rp{" "}
            {nominal.toLocaleString("id-ID")}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Biaya Admin</span>

          <span>Rp0</span>
        </div>

        <hr />

        <div className="flex justify-between text-2xl font-bold">

          <span>Total</span>

          <span>
            Rp{" "}
            {nominal.toLocaleString("id-ID")}
          </span>

        </div>

      </div>

    </div>
  );
}