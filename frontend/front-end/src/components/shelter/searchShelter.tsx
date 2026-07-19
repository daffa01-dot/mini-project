"use client";

interface SearchShelterProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function SearchShelter({
  value,
  onChange,
}: SearchShelterProps) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Cari shelter..."
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="
          w-full
          rounded-2xl
          border
          border-slate-300
          bg-white
          px-5
          py-4
          shadow-sm
          outline-none
          transition
          focus:border-green-500
          focus:ring-4
          focus:ring-green-100
        "
      />
    </div>
  );
}