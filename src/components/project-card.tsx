import Image from "next/image";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  hrefLive?: string;
  hrefGithub?: string;
  hrefFigma?: string;
}

export function ProjectCard({ img, title, desc, hrefLive, hrefGithub, hrefFigma }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="p-6">
        <a
          href={hrefGithub || '#'}
          className="text-blue-600 hover:text-blue-800 text-xl font-semibold block mb-2"
        >
          {title}
        </a>
        <p className="text-gray-600 mb-4">
          {desc}
        </p>
        <div className="flex gap-2">
          {hrefGithub && (
            <a
              href={hrefGithub}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              See Github
            </a>
          )}
          {hrefLive && (
            <a
              href={hrefLive}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              See Live
            </a>
          )}
          {hrefFigma && (
            <a
              href={hrefFigma}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              See Figma
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
