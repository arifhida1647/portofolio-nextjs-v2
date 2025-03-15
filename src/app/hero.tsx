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
            I am Arif Hidayat, an Informatics student at the Faculty of Computer Science with a strong interest in IT, particularly in Product Development, Software QA, and Product Improvement. I have experience in Development, Product, and QA, ensuring high-quality software through testing, debugging, and optimization. Passionate about enhancing product performance and user experience, I thrive in improving workflows and ensuring efficient software development. With a keen eye for detail and a problem-solving mindset, I am eager to grow, learn, and contribute to the tech industry by developing and refining high-quality digital products.
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
