// app/page.tsx
"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";
import HeroBanner from "./components/HeroBanner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="p-8">
        <HeroBanner />
        {/* Ürünleri göster */}
        <ProductsList />
      </main>
       <Footer />
    </div>
  );
}
