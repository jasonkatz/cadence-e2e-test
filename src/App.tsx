import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import About from "./components/About";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { dark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
      <Navbar dark={dark} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Features />
        <Stats />
        <About />
      </main>
      <Footer />
    </div>
  );
}
