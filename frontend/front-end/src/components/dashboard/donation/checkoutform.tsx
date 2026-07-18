"use client";

import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  checkoutSchema,
  type CheckoutFormValues,
} from "@/schemas/donation.schema";

import { useCheckout } from "@/hooks/useCheckout";

interface Props {
  satwaId?: string;
  shelterId: string;
}

export default function CheckoutForm({
  satwaId,
  shelterId,
}: Props) {
  const checkout = useCheckout();

  const {
    register,
    handleSubmit,
  } = useForm<CheckoutFormValues>({
    resolver:
      zodResolver(checkoutSchema) as Resolver<CheckoutFormValues>,
    defaultValues: {
      shelterId,
      satwaId,
    },
  });

  const submit = (values: CheckoutFormValues) => {
    checkout.mutate(values);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-6"
    >
      <div>
        <label>Nominal Donasi</label>

        <input
          type="number"
          placeholder="Minimal Rp10.000"
          {...register("nominal")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label>Catatan</label>

        <textarea
          placeholder="Tulis doa atau pesan..."
          {...register("catatan")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <button
        disabled={checkout.isPending}
        className="w-full rounded-lg bg-green-600 py-3 text-white"
      >
        {checkout.isPending
          ? "Memproses..."
          : "Lanjut Donasi"}
      </button>
    </form>
  );
}