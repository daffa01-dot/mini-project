import Image from "next/image";

export default function SatwaGallery() {
  return (
    <section className="mx-auto max-w-7xl px-8">

      <h2 className="mb-10 text-4xl font-black">

        Galeri

      </h2>

      <div className="grid gap-5 md:grid-cols-4">

        {[1,2,3,4].map((item)=>(
          <div
            key={item}
            className="relative h-60 overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/cat1.jpg"
              fill
              alt="Gallery"
              className="object-cover"
            />
          </div>
        ))}

      </div>

    </section>
  );
}