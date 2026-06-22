import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Hummingbird from "./Hummingbird";

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrollY, setScrollY] = useState(() => window.scrollY);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && scrollY <= 40;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent" : "glass border-b border-white/50 shadow-soft"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-2xl shadow-soft transition-colors ${
              transparent ? "bg-white/15" : "bg-forest"
            }`}
          >
            <Hummingbird color="#EFE6DA" className="h-6 w-6" />
          </div>
          <span
            className={`font-display text-xl font-semibold transition-colors ${
              transparent ? "text-cream" : "text-forest"
            }`}
          >
            Cezve
          </span>
        </NavLink>

        <nav className="flex items-center gap-1 sm:gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-xl px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? transparent
                    ? "bg-white/20 text-cream"
                    : "bg-forest/10 text-forest"
                  : transparent
                  ? "text-cream/80 hover:bg-white/10"
                  : "text-muted hover:bg-forest/5 hover:text-forest"
              }`
            }
          >
            Marka
          </NavLink>
          <NavLink
            to="/yonetim"
            className={({ isActive }) =>
              `rounded-xl px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? transparent
                    ? "bg-white/20 text-cream"
                    : "bg-forest/10 text-forest"
                  : transparent
                  ? "text-cream/80 hover:bg-white/10"
                  : "text-muted hover:bg-forest/5 hover:text-forest"
              }`
            }
          >
            Yönetim
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
