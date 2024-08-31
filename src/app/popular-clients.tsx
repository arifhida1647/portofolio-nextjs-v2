"use client";

import Image from "next/image";

const CLIENTS = [
  "Laravel",
  "NodeJs",
  "Codeigniter",
  "tailwind",
  "bootstrap",
  "android-studio",
];

export function PopularClients() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-gray-900 mb-4">
            Tech Stack
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={480}
              height={480}
              src={`/logos/${logo}.png`}
              className="w-40 grayscale opacity-75"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularClients;
