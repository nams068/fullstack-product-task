'use client';

import React from 'react';

const footerLinks = [
  { name: 'Ana Sayfa', href: '#' },
  { name: 'Ürünler', href: '/products' },
  { name: 'Ürün Ekle', href: '/add-product' },
  { name: 'İletişim', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 sm:mb-0">
            <img
              src="https://www.kayraexport.com/trex/assets/img/genel/21374.jpg"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Linkler */}
          <div className="flex space-x-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Alt Footer */}
      <div className="bg-gray-900 text-gray-500 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Kayra Export. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
