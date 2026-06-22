import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-cream" />
        <div className="absolute -left-24 -top-32 h-96 w-96 rounded-full bg-forest/20 blur-3xl" />
        <div className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-orange/25 blur-3xl" />
      </div>

      <Navbar />
      <Outlet />
      <Toaster
        position="top-right"
        toastOptions={{ style: { borderRadius: "12px", background: "#2C4A3B", color: "#fff" } }}
      />
    </div>
  );
}
