import Link from "next/link";

interface HeroSectionProps {
  title: string;
  description: string;
  breadcrumb: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
}

export default function HeroSection({
  title,
  description,
  breadcrumb,
  gradientFrom = "from-blue-600",
  gradientVia = "via-indigo-600",
  gradientTo = "to-purple-700",
}: HeroSectionProps) {
  return (
    <section className={`bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo} py-3 sm:py-4 md:py-5`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-2 text-xs flex items-center flex-wrap">
          <Link href="/" className="text-blue-100 hover:text-white transition-colors flex items-center">
            <span className="mr-1">🏠</span>
            <span>Home</span>
          </Link>
          <span className="mx-2 text-blue-300">/</span>
          <span className="text-white font-medium">{breadcrumb}</span>
        </nav>

        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-1.5 leading-tight">
          {title}
        </h1>
        <p className="text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
