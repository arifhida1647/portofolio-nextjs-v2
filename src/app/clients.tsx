"use client";

import Image from "next/image";

const CLIENTS = [
  "Kalbe",
  "Gtech",
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <h6 className="text-blue-gray-900 mb-8 text-xl font-semibold">
          Internship Experience Company
        </h6>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40 ml-8"
              src={`/logos/${logo}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
