import Link from "next/link";

interface ToolCardProps {
  name: string;
  description: string;
  href: string;
  icon: string;
  color?: string;
}

export default function ToolCard({ name, description, href, icon, color = "bg-blue-50 hover:bg-blue-100 border-blue-200" }: ToolCardProps) {
  return (
    <Link
      href={href}
      className={`${color} border-2 rounded-lg p-6 transition-all duration-200 hover:shadow-lg hover:scale-105`}
    >
      <div className="flex items-start space-x-4">
        <span className="text-4xl">{icon}</span>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {name}
          </h3>
          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
