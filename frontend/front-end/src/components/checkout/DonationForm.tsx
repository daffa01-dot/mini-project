"use client";

import { Resolver, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  checkoutSchema,
  type CheckoutFormValues,
} from "@/schemas/donation.schema";

import { useCheckout } from "@/hooks/useCheckout";

import DonationSummary from "./DonationSummary";

interface Props {
  satwaId?: string;
  shelterId: string;
}

export default function DonationForm({
  satwaId,
  shelterId,
}: Props) {
  const checkout = useCheckout();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm<CheckoutFormValues>({
    resolver:
      zodResolver(checkoutSchema) as Resolver<CheckoutFormValues>,
    defaultValues: {
      nominal: 100000,
      catatan: "",
      satwaId,
      shelterId,
    },
  });

  const nominal = watch("nominal");

  const submit = (values: CheckoutFormValues) => {
    checkout.mutate(values);
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

      {/* FORM */}

      <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow">

        <h1 className="text-4xl font-black">
          Checkout Donasi
        </h1>

        <form
          onSubmit={handleSubmit(submit)}
          className="mt-10"
        >

          <h2 className="mb-5 text-xl font-semibold">
            Pilih Nominal
          </h2>

          <div className="grid grid-cols-2 gap-4">

            {[100000, 250000, 500000, 1000000].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setValue("nominal", item)
                  }
                  className={`
                    rounded-xl
                    border
                    p-5
                    transition

                    ${
                      nominal === item
                        ? "border-green-600 bg-green-600 text-white"
                        : "hover:border-green-600"
                    }
                  `}
                >
                  Rp{" "}
                  {item.toLocaleString("id-ID")}
                </button>
              )
            )}

          </div>

          <div className="mt-8">

            <label className="mb-2 block font-medium">
              Nominal Lain
            </label>

            <input
              type="number"
              {...register("nominal", {
                valueAsNumber: true,
              })}
              className="w-full rounded-xl border p-4"
            />

          </div>

          <div className="mt-8">

            <label className="mb-2 block font-medium">
              Catatan
            </label>

            <textarea
              {...register("catatan")}
              placeholder="Tulis doa atau pesan..."
              className="min-h-40 w-full rounded-xl border p-4"
            />

          </div>

          <button
            type="submit"
            disabled={checkout.isPending}
            className="
              mt-10
              w-full
              rounded-xl
              bg-green-600
              py-4
              text-white
              transition
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {checkout.isPending
              ? "Memproses..."
              : "Lanjutkan Donasi"}
          </button>

        </form>

      </div>

      {/* SUMMARY */}

      <DonationSummary nominal={nominal} />

    </div>
  );
}