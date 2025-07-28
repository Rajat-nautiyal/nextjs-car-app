'use client';
import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl pt-28 mx-auto py-12 px-6 text-gray-800">
      <h1 className="max-sm:text-3xl text-4xl font-bold mb-6">About Us</h1>
      
      <p className="text-lg mb-4">
        We’re passionate about helping people find the perfect car. Whether you’re looking for a sleek sedan or a family SUV, our platform is built to deliver the best experience.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">What do we do?</h2>
          <p>
            We connect car buyers with a wide range of vehicles from trusted sellers. We make the process transparent and user-friendly, offering tools for filtering, comparing, and reviewing cars.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Why choose us?</h2>
          <p>
            Our team combines industry knowledge with cutting-edge tech to simplify your car search. From verified listings to AI-based recommendations — we’ve got you covered.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">How does it work?</h2>
          <p>
            Browse our listings, use filters like make, model, and year, then get in touch with sellers directly. You can also save cars and track prices.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Who are we?</h2>
          <p>
            A team of car enthusiasts, engineers, and designers who love building intuitive tools to help people make smarter car decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
