import UploadReceipt from "@/components/dashboard/donation/UploadReceipt"

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function UploadPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-3xl p-10">
      <UploadReceipt
        donationId={id}
      />
    </main>
  );
}