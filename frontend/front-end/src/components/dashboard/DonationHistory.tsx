const data = [
  {
    nama: "Milo",
    nominal: "Rp100.000",
    status: "DIVERIFIKASI",
  },
  {
    nama: "Oyen",
    nominal: "Rp200.000",
    status: "MENUNGGU",
  },
];

export default function DonationHistory() {
  return (
    <div className="mt-10 rounded-3xl bg-white p-8 shadow">

      <h2 className="mb-8 text-3xl font-black">

        Riwayat Donasi

      </h2>

      <table className="w-full">

        <thead>

          <tr>

            <th>Satwa</th>

            <th>Nominal</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {data.map((item) => (
            <tr key={item.nama} className="border-t">

              <td className="py-5">

                {item.nama}

              </td>

              <td>{item.nominal}</td>

              <td>{item.status}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}