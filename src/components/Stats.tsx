const stats = [
  { value: "< 1s", label: "Build Time" },
  { value: "100", label: "Lighthouse Score" },
  { value: "~45kb", label: "Bundle Size" },
  { value: "0", label: "Runtime Dependencies*" },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="border-y border-gray-200 bg-gray-50 py-24 dark:border-gray-800 dark:bg-gray-900/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Built for performance
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Numbers that speak for themselves.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold tracking-tight text-primary-600 sm:text-5xl dark:text-primary-400">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-gray-400 dark:text-gray-600">
          * Beyond React and React DOM
        </p>
      </div>
    </section>
  );
}
