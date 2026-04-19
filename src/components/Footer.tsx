export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Cadence
          </span>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Built with React, Tailwind CSS, and Vite.
          </p>
        </div>
      </div>
    </footer>
  );
}
