import React from "react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <div className="border border-gray-200 shadow-sm rounded-lg p-6 bg-white">
      <div className="flex items-center justify-center mb-6 h-12 w-12 rounded-full bg-gray-900 text-white shadow-md">
        <Icon className="h-6 w-6" />
      </div>
      <h5 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h5>
      <p className="text-gray-500 font-normal px-8">
        {children}
      </p>
    </div>
  );
}

export default SkillCard;
