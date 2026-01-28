import Link from "next/link";

interface Tool {
  name: string;
  href: string;
  icon: string;
}

interface RelatedToolsProps {
  tools: Tool[];
  linkColor?: string;
}

export default function RelatedTools({ tools, linkColor = "text-blue-600" }: RelatedToolsProps) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Related Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex items-center space-x-3 bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200"
            >
              <span className="text-2xl">{tool.icon}</span>
              <span className="font-medium text-gray-900">{tool.name}</span>
              <span className={`ml-auto ${linkColor}`}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
