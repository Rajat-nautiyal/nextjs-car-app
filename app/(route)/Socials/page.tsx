// app/socials/page.tsx
'use client';

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="max-w-3xl pt-28 mx-auto max-sm:pt-25 py-12 px-6 text-gray-800">
      <h1 className="text-4xl max-sm:text-3xl font-bold max-sm:mb-4 mb-6">Connect With Us</h1>

      <p className="text-lg mb-6">
        Follow us on your favorite social media platforms and stay updated with the latest car deals, blog posts, events, and more.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-sm:gap-9 text-center mt-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 hover:text-blue-600 transition">
          <FaFacebook size={40} />
          <p className="mt-2 text-sm">Facebook</p>
        </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 hover:text-blue-400 transition">
          <FaTwitter size={40} />
          <p className="mt-2 text-sm">Twitter</p>
        </a>

        <a href="https://www.linkedin.com/in/rajat-nautiyal-4kb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 hover:text-blue-700 transition">
          <FaLinkedin size={40} />
          <p className="mt-2 text-sm">LinkedIn</p>
        </a>

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 hover:text-pink-500 transition">
          <FaInstagram size={40} />
          <p className="mt-2 text-sm">Instagram</p>
        </a>
      </div>
    </div>
  );
}
