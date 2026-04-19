import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div
        aria-hidden="true"
        className="animate-gradient absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-primary-50 dark:from-gray-950 dark:via-primary-900/20 dark:to-gray-950"
      />

      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-primary-300/20 blur-3xl dark:bg-primary-500/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-1/4 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl dark:bg-primary-600/10"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="animate-fade-in-up mb-4 inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-700 dark:border-primary-800 dark:bg-primary-900/40 dark:text-primary-300">
          Built with React + Tailwind
        </span>

        <h1 className="animate-fade-in-up mt-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 [animation-delay:100ms] sm:text-6xl lg:text-7xl dark:text-white">
          Ship faster with{" "}
          <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-600">
            Cadence
          </span>
        </h1>

        <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 [animation-delay:200ms] dark:text-gray-400">
          A sleek, modern dashboard foundation designed for speed, clarity, and
          developer experience. Start building your next project on a polished
          base.
        </p>

        <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 [animation-delay:300ms] sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/30 active:scale-[0.98] dark:bg-primary-500 dark:hover:bg-primary-600"
          >
            Explore Features
            <ArrowRight size={16} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 active:scale-[0.98] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
