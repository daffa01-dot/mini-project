import CheckoutForm from "@/components/dashboard/donation/checkoutform";

interface Props {
  searchParams: {
    satwaId?: string;
    shelterId: string;
  };
}

export default function CheckoutPage({
  searchParams,
}: Props) {
  return (
    <main className="mx-auto max-w-2xl p-10">
      <h1 className="mb-8 text-3xl font-bold">
        Checkout Donasi
      </h1>

      <CheckoutForm
        satwaId={searchParams.satwaId}
        shelterId={searchParams.shelterId}
      />
    </main>
  );
}