interface Props {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <p className="text-slate-500">

        {title}

      </p>

      <h2 className="mt-5 text-4xl font-black">

        {value}

      </h2>

    </div>
  );
}