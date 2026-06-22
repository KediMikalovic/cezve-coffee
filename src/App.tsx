import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BrandPage from "./pages/BrandPage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BrandPage />} />
        <Route path="yonetim" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}
