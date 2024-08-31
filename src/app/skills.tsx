import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development",
  },
  {
    icon: SwatchIcon,
    title: "Backend Development",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
  },
  {
    icon: HashtagIcon,
    title: "Fullstack Web Development",
  },
  {
    icon: EyeIcon,
    title: "Product Manager",
  },
  {
    icon: DocumentTextIcon,
    title: "Business or System Analyst",
  },
];

export function Skills() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-16 text-center">
        <h2 className="text-lg font-semibold text-blue-gray-900 uppercase mb-2">
          My Skills
        </h2>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          What I Do
        </h1>
        <p className="text-base text-gray-500 mx-auto w-full lg:w-10/12">
          I am not just a professional developer; I am a technology enthusiast. Research and development is also my interest in technology.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md mx-2">
            <skill.icon className="h-12 w-12 text-blue-gray-900 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {skill.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
