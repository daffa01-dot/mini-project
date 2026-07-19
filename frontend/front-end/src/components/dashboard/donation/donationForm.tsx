"use client";

import { useState } from "react";
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
  const [agree, setAgree] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(
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
    if (!agree) return;

    onSubmit(values);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-6 rounded-2xl bg-white p-8 shadow"
    >
      {/* Nominal */}

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

      {/* Catatan */}

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

      {/* Ringkasan */}

      <div className="rounded-lg bg-green-50 p-4">
        <p className="text-sm text-slate-500">
          Total Donasi
        </p>

        <h2 className="text-2xl font-bold text-green-700">
          Rp {nominal.toLocaleString("id-ID")}
        </h2>
      </div>

      {/* Terms & Conditions */}

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="mb-3 text-lg font-semibold text-amber-900">
          Syarat & Ketentuan Donasi
        </h3>

        <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>
            Donasi dilakukan secara sukarela tanpa adanya
            paksaan dari pihak mana pun.
          </li>

          <li>
            Donasi yang telah dikirim melalui transfer bank
            tidak dapat dibatalkan atau diminta kembali.
          </li>

          <li>
            Donatur wajib mengunggah bukti transfer yang
            valid agar dapat diverifikasi oleh pihak shelter.
          </li>

          <li>
            Shelter berhak melakukan verifikasi terhadap
            bukti transfer sebelum status donasi berubah
            menjadi <strong>Diverifikasi</strong>.
          </li>

          <li>
            Apabila bukti transfer tidak sesuai atau tidak
            valid, shelter dapat menolak proses verifikasi.
          </li>
        </ul>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) =>
              setAgree(e.target.checked)
            }
            className="mt-1 h-4 w-4"
          />

          <span className="text-sm text-slate-700">
            Saya telah membaca, memahami, dan menyetujui
            seluruh syarat dan ketentuan donasi.
          </span>
        </label>
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading || !agree}
        className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {loading
          ? "Memproses..."
          : "Lanjutkan Donasi"}
      </button>
    </form>
  );
}