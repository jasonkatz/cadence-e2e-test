export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Why Cadence?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Every project deserves a strong starting point. Cadence gives you a
          clean, modern foundation with dark mode, responsive design, and
          thoughtful defaults so you can focus on what makes your app unique.
        </p>
        <div className="mt-10 inline-flex flex-wrap justify-center gap-3">
          {["React 19", "TypeScript", "Tailwind v4", "Vite", "Lucide Icons"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
