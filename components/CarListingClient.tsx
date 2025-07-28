"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CarCard, CustomButton } from "./index";
import { dataContext } from "@/context/dataContext";
import { fetchDataProps } from "@/types";

export const CarListingClient = () => {
  const router = useRouter();
  const records = useContext(dataContext);
  const [showCard, setShowCard] = useState<fetchDataProps | null>(null);

  const handleRoute = () => {
    router.push("/carListing");
  };

  return (
    <div className=" px-6 max-sm:px-2 min-h-screen">
      <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800 mb-8 text-center">
        Featured Cars
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {records?.slice(0, 4).map((car, index) => (
          <div
            key={index}
            className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            onClick={() => setShowCard(car)}
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

      {/* Show More Button */}
      {records && records.length > 4 && (
        <div className="mt-10 flex justify-center">
          <CustomButton
            title="Show More"
            containerStyle="p-3 px-6 cursor-pointer rounded-full bg-blue-600 hover:bg-blue-700 transition-all shadow-md"
            fontStyle="text-white text-base font-semibold"
            handleClick={handleRoute}
          />
        </div>
      )}
      {showCard && <CarCard car={showCard} setShowCard={setShowCard} />}
    </div>
  );
};
