'use client';

import React, { useEffect, useState } from 'react';
import { fetchProducts, Product } from './api';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8">Yükleniyor...</div>;

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="p-8 flex-1">
      <h1 className="text-3xl font-bold mb-6">Ürünler</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <p className="text-gray-500 text-sm">Stock: {product.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  <Footer />
  </div>
  );
};

export default ProductsPage;
