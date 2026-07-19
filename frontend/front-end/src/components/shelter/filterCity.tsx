"use client";

const cities = [
  "Semua",
  "Batam",
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Medan",
];

interface Props {
  selected?: string;
  onSelect?: (city: string) => void;
}

export default function FilterCity({
  selected = "Semua",
  onSelect,
}: Props) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">

      {cities.map((city) => (

        <button
          key={city}
          onClick={() => onSelect?.(city)}
          className={`
          rounded-full
          px-5
          py-2
          transition

          ${
            selected === city
              ? "bg-green-600 text-white"
              : "border border-slate-300 bg-white"
          }
          `}
        >
          {city}
        </button>

      ))}

    </div>
  );
}