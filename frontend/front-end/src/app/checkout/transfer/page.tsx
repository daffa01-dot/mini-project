"use client";

export default function TransferPage() {

const data=JSON.parse(

sessionStorage.getItem("checkout") || "{}"

);

return(

<main className="min-h-screen bg-slate-100 p-10">

<div className="mx-auto max-w-xl rounded-3xl bg-white p-10 shadow">

<h1 className="text-4xl font-black">

Transfer Donasi

</h1>

<div className="mt-8 space-y-5">

<div>

<p>Bank</p>

<h2 className="text-2xl font-bold">

{data.rekeningTujuan?.bank}

</h2>

</div>

<div>

<p>Nomor Rekening</p>

<h2 className="text-2xl font-bold">

{data.rekeningTujuan?.nomorRekening}

</h2>

</div>

<div>

<p>Atas Nama</p>

<h2 className="text-2xl font-bold">

{data.rekeningTujuan?.atasNama}

</h2>

</div>

</div>

</div>

</main>

)

}