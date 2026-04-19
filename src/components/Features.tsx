import { Zap, Shield, Palette, Smartphone, Code2, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built on Vite for instant HMR and sub-second builds. No waiting around.",
  },
  {
    icon: Shield,
    title: "Type Safe",
    description:
      "Full TypeScript from day one. Catch errors before they reach production.",
  },
  {
    icon: Palette,
    title: "Beautiful Theming",
    description:
      "Dark and light modes with smooth transitions. Respects system preferences.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description:
      "Pixel-perfect on every screen size from mobile to ultra-wide monitors.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Minimal dependencies, clear structure, and modern best practices throughout.",
  },
  {
    icon: Layers,
    title: "Extensible",
    description:
      "A solid foundation ready for your features. Add what you need, nothing more.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Everything you need
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A modern stack with the tools and patterns that matter.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-800 dark:hover:shadow-primary-900/20"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary-50 p-3 text-primary-600 transition-colors group-hover:bg-primary-100 dark:bg-primary-900/30 dark:text-primary-400 dark:group-hover:bg-primary-900/50">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
