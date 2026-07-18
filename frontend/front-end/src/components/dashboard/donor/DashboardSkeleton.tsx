"use client";

export default function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-32 rounded-2xl bg-slate-200" />

      <div className="grid grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-32 rounded-2xl bg-slate-200"
          />
        ))}
      </div>

      <div className="h-72 rounded-2xl bg-slate-200" />
    </div>
  );
}