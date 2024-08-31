"use client";

import Image from "next/image";

function Hero() {
  return (
    <header className="bg-white p-8 mt-20">
      <div className="container mx-auto grid min-h-[60vh] w-full grid-cols-1 gap-10 lg:grid-cols-2 items-center">
        <div className="lg:row-auto">
          <h1 className="mb-4 text-3xl lg:text-5xl font-bold text-blue-gray-900 leading-tight">
            Welcome to my Portfolio!
          </h1>
          <p className="mb-4 text-gray-500 md:pr-16 xl:pr-28">
            I&apos;m Arif Hidayat, a technology enthusiast with a strong interest in
            both development and analysis. I enjoy exploring the latest
            advancements in the tech industry and am passionate about creating
            innovative solutions and gaining insights through Business Analyst
            or System Analyst.
          </p>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="Profile picture of Arif Hidayat"
          src="/image/profile.jpg"
          className="h-[36rem] w-full rounded-xl object-cover shadow-2xl"
        />
      </div>
    </header>
  );
}

export default Hero;
