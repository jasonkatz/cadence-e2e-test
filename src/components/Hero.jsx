function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, var(--color-accent-glow) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8 border"
          style={{
            color: "var(--color-accent-hover)",
            backgroundColor: "var(--color-accent-glow)",
            borderColor: "rgba(99, 102, 241, 0.2)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--color-success)" }}
          />
          Now in public beta
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          style={{ color: "var(--color-text-primary)" }}
        >
          Build workflows that{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, var(--color-accent), var(--color-accent-hover), #c084fc)",
            }}
          >
            move with you
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Cadence is the developer platform for orchestrating complex pipelines.
          Ship faster with built-in observability, instant rollbacks, and zero-config deploys.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:brightness-110 hover:shadow-lg"
            style={{
              backgroundColor: "var(--color-accent)",
              boxShadow: "0 0 30px var(--color-accent-glow)",
            }}
          >
            Start Building
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:brightness-125"
            style={{
              color: "var(--color-text-secondary)",
              border: "1px solid var(--color-border)",
            }}
          >
            View Documentation
          </a>
        </div>

        <div
          className="mt-20 rounded-2xl border overflow-hidden"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-bg-secondary)",
          }}
        >
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ borderColor: "var(--color-border)" }}
          >
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ef4444" }} />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#22c55e" }} />
            <span className="flex-1" />
            <span className="text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
              pipeline.config.ts
            </span>
          </div>
          <div className="p-5 sm:p-6 text-left font-mono text-sm leading-relaxed overflow-x-auto">
            <pre style={{ color: "var(--color-text-secondary)" }}>
              <code>
{`import { `}<span style={{ color: "var(--color-accent-hover)" }}>pipeline</span>{`, `}<span style={{ color: "var(--color-accent-hover)" }}>step</span>{` } from "cadence";

export default `}<span style={{ color: "var(--color-accent-hover)" }}>pipeline</span>{`("deploy-prod", {
  `}<span style={{ color: "var(--color-text-muted)" }}>// Automatic parallelization & retry</span>{`
  steps: [
    `}<span style={{ color: "var(--color-accent-hover)" }}>step</span>{`("lint",   { run: "npm run lint"  }),
    `}<span style={{ color: "var(--color-accent-hover)" }}>step</span>{`("test",   { run: "npm test"      }),
    `}<span style={{ color: "var(--color-accent-hover)" }}>step</span>{`("build",  { run: "npm run build" }),
    `}<span style={{ color: "var(--color-accent-hover)" }}>step</span>{`("deploy", { run: "cadence deploy" }),
  ],
});`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
