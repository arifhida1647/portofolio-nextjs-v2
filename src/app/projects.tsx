"use client";

import { ProjectCard } from "@/components";

const PROJECTS = [
  {
    img: "https://portofolio-temp.vercel.app/images/UPNSehat.jpg",
    title: "Website UPN Sehat",
    desc: "This website is designed for a medication reminder system as well as for health articles. Made with ExpressJs",
    hrefLive: 'https://upn-sehat.vercel.app/',
    hrefGithub: 'https://github.com/arifhida1647/projectService.git',
  },
  {
    img: "https://portofolio-temp.vercel.app/images/porto-3.jpg",
    title: "Website UPN Sehat",
    desc: "This website is designed for a medication reminder system as well as for health articles. Made with NextJs + ExpressJs",
    hrefLive: 'https://upn-sehat-next-js.vercel.app/',
    hrefGithub: 'https://github.com/arifhida1647/UPNSehat-NextJs.git',
  },
  {
    img: "https://portofolio-temp.vercel.app/images/porto-4.jpg",
    title: "Website SenaksLab Laundry",
    desc: "This website is designed for payment system and purchase of laundry services. Made with PHP Codeigniter",
    hrefLive: 'https://sneakslab-admin.my.id/',
    hrefGithub: 'https://github.com/arifhida1647/senaklab-frontend.git',
  },
  {
    img: "https://portofolio-temp.vercel.app/images/porto-6.jpg",
    title: "Wesbite Dashboard Sneaklab",
    desc: "This website is designed for the dashboard of the sneaklab website. Made with PHP Codeigniter",
    hrefLive: 'https://dashboard.sneakslab-admin.my.id/',
    hrefGithub: 'https://github.com/arifhida1647/sneaklab_project.git',
  },
  {
    img: "https://portofolio-temp.vercel.app/images/porto-7.png",
    title: "Wesbite Dashboard Point Of Sale",
    desc: "This website is designed for buying and selling and managing stock in a shop. Made with PHP Codeigniter",
    hrefLive: 'https://tokosembakoleon.my.id/',
    hrefGithub: 'https://github.com/arifhida1647/sneaklab_project.git',
  },
  {
    img: "https://portofolio-temp.vercel.app/images/porto-2.png",
    title: "Website SiJago",
    desc: "Website design for displaying the sale and purchase of games products, made with PHP Native + Bootstrap",
    hrefLive: 'https://sijago.arifhida.my.id/',
    hrefGithub: 'https://github.com/arifhida1647/sijago-PHP.git',
  },
  {
    img: "https://portofolio-temp.vercel.app/images/FulusBanner.jpg",
    title: "Mobile App Fulus",
    desc: "Mobile application designed for money storage like ewallet, created using java android studio + ExpressJs + Firebase",
    hrefGithub: 'https://github.com/arifhida1647/Fulus-MobileApps.git',
  },
  {
    img: "https://portofolio-temp.vercel.app/images/figma.png",
    title: "Prototype UI Dicash",
    desc: "Mobile application designed for financial application display, namely ewallet, created using Figma",
    hrefFigma: "https://www.figma.com/proto/NFFwdR8WeAE9qeZQJgvk16/IMK?type=design&node-id=341-723&t=O2ZFz5Sj1oBeLfRd-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=422%3A5457&show-proto-sidebar=1&mode=design",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-gray-900 mb-4">
          My Projects
        </h2>
        <p className="mx-auto w-full px-4 font-normal text-gray-500 lg:w-6/12">
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
