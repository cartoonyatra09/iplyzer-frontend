import { ReactNode } from "react";

interface ResultBoxProps {
  title?: string;
  icon?: string;
  children: ReactNode;
  borderColor?: string;
  bgColor?: string;
}

export default function ResultBox({
  title,
  icon,
  children,
  borderColor = "border-blue-200",
  bgColor = "bg-white"
}: ResultBoxProps) {
  return (
    <div className={`${bgColor} rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 ${borderColor}`}>
      {(title || icon) && (
        <div className="text-center mb-4 sm:mb-6">
          {icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mb-3 sm:mb-4">
              <span className="text-3xl sm:text-4xl">{icon}</span>
            </div>
          )}
          {title && (
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 px-2">
              {title}
            </h3>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
