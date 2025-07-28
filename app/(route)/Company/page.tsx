'use client';
import React from 'react';

export default function Company() {
  return (
    <div className="max-w-4xl pt-28 mx-auto max-sm:pt-25 py-12 px-6 text-gray-800">
      <h1 className="text-4xl max-sm:text-3xl max-sm:mb-4 font-bold mb-6">Our Company</h1>

      <p className="text-lg mb-6">
        We're more than just a car marketplace, we're a team driven by innovation, transparency, and customer satisfaction.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p>
            To empower car buyers and sellers with a seamless, secure, and smart platform that simplifies every step of the journey.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p>
            To be the leading digital platform for automotive commerce by setting new standards for experience and trust.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Customer-first approach</li>
            <li>Innovation and agility</li>
            <li>Transparency and trust</li>
            <li>Sustainability and impact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Meet the Team</h2>
          <p>
            We're a diverse group of developers, designers, marketers, and car lovers building a product we believe in.
          </p>
        </div>
      </div>
    </div>
  );
}
