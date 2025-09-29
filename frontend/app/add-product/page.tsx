'use client';

import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AddProductPage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState(''); 
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const product = {
      name,
      price: parseFloat(price),
      stock: parseInt(stock),
      image,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!res.ok) throw new Error('Ürün eklenemedi');

      setMessage('Ürün başarıyla eklendi!');
      setName('');
      setPrice('');
      setStock('');
      setImage(''); // ✅ Alan temizleniyor
    } catch (err) {
      setMessage('Bir hata oluştu.');
      console.error(err);
    }
  };

  return (
<div className="min-h-screen flex flex-col">
  <Navbar />
  <div className="p-6 max-w-lg mx-auto">
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Ürün Ekle
      </h1>
      {message && (
        <p
          className={`mb-4 text-center font-medium ${
            message.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
        >
          + Ekle
        </button>
      </form>
    </div>
  </div>
  <Footer />
</div>
);
};



export default AddProductPage;
