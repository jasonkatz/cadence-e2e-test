function FeatureCard({ icon, title, description }) {
  return (
    <div
      className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
      style={{
        backgroundColor: "var(--color-bg-card)",
        borderColor: "var(--color-border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--color-bg-card-hover)";
        e.currentTarget.style.borderColor = "var(--color-border-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "var(--color-bg-card)";
        e.currentTarget.style.borderColor = "var(--color-border)";
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{
          backgroundColor: "var(--color-accent-glow)",
          color: "var(--color-accent-hover)",
        }}
      >
        {icon}
      </div>
      <h3
        className="text-lg font-semibold mb-2"
        style={{ color: "var(--color-text-primary)" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
