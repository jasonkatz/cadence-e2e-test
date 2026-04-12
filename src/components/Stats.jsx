const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "< 50ms", label: "Avg Latency" },
  { value: "10K+", label: "Teams" },
  { value: "2M+", label: "Deploys / Month" },
];

function Stats() {
  return (
    <section
      className="py-16 px-4 sm:px-6 border-y"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-bg-secondary)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div
              className="text-3xl sm:text-4xl font-bold mb-1"
              style={{ color: "var(--color-text-primary)" }}
            >
              {stat.value}
            </div>
            <div
              className="text-sm font-medium"
              style={{ color: "var(--color-text-muted)" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
