"use client";

import { Resolver, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  checkoutSchema,
  CheckoutFormValues,
} from "@/schemas/donation.schema";

import type { CheckoutPayload } from "@/types/donation";

interface Props {
  loading: boolean;
  satwaId?: string;
  shelterId: string;
  onSubmit: (payload: CheckoutPayload) => void;
}

export default function DonationForm({
  loading,
  satwaId,
  shelterId,
  onSubmit,
}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver:
      zodResolver(
        checkoutSchema,
      ) as Resolver<CheckoutFormValues>,

    defaultValues: {
      nominal: 10000,
      catatan: "",
      satwaId,
      shelterId,
    },
  });

  const nominal = Number(
    watch("nominal") ?? 0,
  );

  const submit = (
    values: CheckoutFormValues,
  ) => {
    onSubmit(values);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-6 rounded-2xl bg-white p-8 shadow"
    >
      <div>
        <label className="mb-2 block font-semibold">
          Nominal Donasi
        </label>

        <input
          type="number"
          {...register("nominal", {
            valueAsNumber: true,
          })}
          className="w-full rounded-lg border p-3"
        />

        {errors.nominal && (
          <p className="mt-1 text-sm text-red-500">
            {errors.nominal.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Catatan
        </label>

        <textarea
          rows={5}
          {...register("catatan")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div className="rounded-lg bg-green-50 p-4">
        <p className="text-sm text-slate-500">
          Total Donasi
        </p>

        <h2 className="text-2xl font-bold text-green-700">
          Rp{" "}
          {nominal.toLocaleString(
            "id-ID",
          )}
        </h2>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white disabled:opacity-50"
      >
        {loading
          ? "Memproses..."
          : "Lanjutkan Donasi"}
      </button>
    </form>
  );
}