"use client";

interface Props {
  value: "DONATUR" | "SHELTER";
  onChange: (role: "DONATUR" | "SHELTER") => void;
}

export default function RoleSelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        type="button"
        onClick={() => onChange("DONATUR")}
        className={`rounded-xl border p-4 transition ${
          value === "DONATUR"
            ? "bg-green-600 text-white border-green-600"
            : "border-gray-300"
        }`}
      >
        Donatur
      </button>

      <button
        type="button"
        onClick={() => onChange("SHELTER")}
        className={`rounded-xl border p-4 transition ${
          value === "SHELTER"
            ? "bg-green-600 text-white border-green-600"
            : "border-gray-300"
        }`}
      >
        Shelter
      </button>
    </div>
  );
}