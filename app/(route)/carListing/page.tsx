"use client";

import { useContext, useState } from "react";
import { dataContext } from "@/context/dataContext";
import Image from "next/image";
import { fetchDataProps } from "@/types";
import { CarCard } from "@/components/index";

const CarListing = () => {
  const records = useContext(dataContext);
  const [showCard, setShowCard] = useState<fetchDataProps | null>(null);

  return (
    <div className="pt-[120px] pb-7 px-6 max-sm:px-3 max-sm:pb-1 max-sm:pt-[100px] bg-gray-100 min-h-screen">
      <h2 className="text-3xl max-sm:text-[1.7rem] font-bold text-gray-800 mb-6 text-center">
        Car Listings
      </h2>

      {records?.length === 0 ? (
        <p className="text-center text-gray-500">No cars available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {records?.map((car, index) => (
            <div
              key={index}
              onClick={() => setShowCard(car)}
              className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {car.photoUrls?.[0] && (
                <Image
                  src={car.photoUrls[0]}
                  alt={`${car.make} ${car.model}`}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              )}
              <div className="p-4 space-y-1">
                <h2 className="text-xl font-semibold text-gray-900">
                  {car.make} {car.model}
                </h2>
                <p className="text-sm text-gray-600">Body: {car.bodyType}</p>
                <p className="text-sm text-gray-600">Mileage: {car.mileage}</p>
                <p className="text-sm text-gray-600">Year: {car.year}</p>
                <p className="text-sm font-bold text-blue-600">
                  Price: {car.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {showCard && <CarCard car={showCard} setShowCard={setShowCard} />}
    </div>
  );
};

export default CarListing;
