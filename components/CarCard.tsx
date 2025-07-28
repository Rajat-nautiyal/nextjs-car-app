'use client'
import React,{useState} from "react";
import Image from "next/image";
import { fetchDataProps } from "@/types";

interface CarCardProps {
  car: fetchDataProps;
  setShowCard: React.Dispatch<React.SetStateAction<fetchDataProps | null>>;
}
export const CarCard = ({ car, setShowCard }: CarCardProps) => {
  const [mainImage, setMainImage] = useState<string|undefined>(car.photoUrls?.[0]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={() => setShowCard(null)}
          className="absolute -top-1 right-2 text-3xl text-gray-500 hover:text-gray-800 transition"
        >
          x
        </button>

        {/* Car Image */}
    <div className="w-full max-w-xl mx-auto">
      {/* Top Main Image */}
      <div className="mb-4">
        <Image
          src={mainImage||"/logo"}
          alt={`${car.make} ${car.model}`}
          width={400}
          height={400}
          className="rounded-lg object-cover w-full h-64 sm:h-80"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-3">
        {car.photoUrls?.slice(1, 4).map((url, index) => (
          <Image
            key={index}
            src={url || "/hero.png"}
            alt={`${car.make} ${car.model} thumbnail ${index + 1}`}
            width={200}
            height={120}
            onClick={() => setMainImage(url)}
            className={`rounded-md object-cover w-full h-24 cursor-pointer border-2 transition-all ${
              mainImage === url ? "border-blue-500" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>

        {/* Car Info */}
        <div className="space-y-2">
          <h2 className="text-2xl pt-2 font-bold text-gray-800">
            {car.make} {car.model}
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 pt-2">
            <div>
              <span className="font-semibold">Body type:</span>{" "}
              {car.bodyType || "N/A"}
            </div>

            <div>
              <span className="font-semibold">Year:</span> {car.year || "N/A"}
            </div>
            <div>
              <span className="font-semibold">Mileage:</span>{" "}
              {car.mileage || "N/A"}
            </div>
            <div>
              <span className="font-semibold">Color:</span>{" "}
              {car.displayColor || "N/A"}
            </div>
            <div>
              <span className="font-semibold">Dealer:</span>{" "}
              {car.dealerName || "N/A"}
            </div>
            <div>
              <span className="font-semibold">Price:</span>{" "}
              <span className="text-blue-600 font-bold">
                {car.price || "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
