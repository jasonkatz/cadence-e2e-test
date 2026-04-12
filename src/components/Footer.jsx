const links = {
  Product: ["Features", "Pricing", "Changelog", "Docs"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy", "Terms", "Security"],
};

function Footer() {
  return (
    <footer
      className="border-t pt-12 pb-8 px-4 sm:px-6"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-bg-secondary)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                C
              </div>
              <span className="text-lg font-semibold" style={{ color: "var(--color-text-primary)" }}>
                Cadence
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              The developer platform for orchestrating complex pipelines.
            </p>
          </div>

          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4
                className="text-sm font-semibold mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200 hover:brightness-150"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            &copy; {new Date().getFullYear()} Cadence. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            {["GitHub", "Twitter", "Discord"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-xs transition-colors duration-200 hover:brightness-150"
                style={{ color: "var(--color-text-muted)" }}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
