import React from "react";

interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-200">
        <Icon className="h-6 w-6 text-gray-600" />
      </div>
      <p className="text-gray-500 font-normal">
        {children}
      </p>
    </div>
  );
}

export default ResumeItem;
