
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Computer Science Student",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Product Manager Intern In PT Kalbe Farma Tbk",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Freelancer Website Development",
  },
];


export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <h2 className="text-3xl font-bold text-gray-900">My Resume</h2>
          <p className="mt-3 mb-4 w-9/12 text-base text-gray-500">
            Highly skilled Product Manager with 1 year of experience in crafting visually stunning and functionally rich systems, and a Computer Science student.
          </p>
          <a
            href="https://docs.google.com/document/d/1yGqyj63KuKWhMQrEivfvMMPuzYxFg0kIe3V-6oNRwXM/edit"
            className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700"
          >
            <span>View More</span>
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <item.icon className="h-6 w-6 text-gray-700" />
              <span className="text-gray-900">{item.children}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;

