import { useState } from "react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-lg border-b"
      style={{
        backgroundColor: "rgba(10, 10, 15, 0.8)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            C
          </div>
          <span className="text-lg font-semibold" style={{ color: "var(--color-text-primary)" }}>
            Cadence
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "Pricing", "Docs", "Blog"].map((item) => (
            <a
              key={item}
              href={item === "Features" ? "#features" : "#"}
              className="text-sm font-medium transition-colors duration-200 hover:brightness-150"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200 hover:brightness-150"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Sign In
          </a>
          <a
            href="#"
            className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all duration-200 hover:brightness-110"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "var(--color-text-secondary)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t px-4 py-4 space-y-1" style={{ borderColor: "var(--color-border)" }}>
          {["Features", "Pricing", "Docs", "Blog"].map((item) => (
            <a
              key={item}
              href={item === "Features" ? "#features" : "#"}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{ color: "var(--color-text-secondary)" }}
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-3 border-t space-y-2" style={{ borderColor: "var(--color-border)" }}>
            <a
              href="#"
              className="block text-center px-3 py-2.5 rounded-lg text-sm font-medium"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Sign In
            </a>
            <a
              href="#"
              className="block text-center px-3 py-2.5 rounded-lg text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
