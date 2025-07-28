"use client";
import { useState, useEffect } from "react";
import { fetchDataProps } from "@/types";
import Image from "next/image";
import { CarCard } from "@/components/index";
type recordsProp = fetchDataProps[];

const Make = () => {
  const [carsData, setCarsData] = useState<recordsProp>([]);
  const [showCard, setShowCard] = useState<fetchDataProps | null>(null);

  const fetchCars = async () => {
    try {
      const searchString = window.location.search;
      const params = searchString.slice(1).split("&");
      // Convert to an object
      const paramObject = params.reduce<Record<string, string>>((acc, pair) => {
        const [key, value] = pair.split("=");
        acc[key] = value || "";
        return acc;
      }, {});
      const make: string = paramObject.make;
      const model: string = paramObject.model;
      const year: string = paramObject.year_min;
      const response = await fetch(
        `/api/getCars?make=${make}&model=${model}&year_min=${year}`
      );
      const data = await response.json();
      setCarsData(data.records);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="pt-28 px-6 pb-10 max-sm:pb-1 max-sm:px-2 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Car Listings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {carsData && carsData.map((car, index) => (
          <div
            key={index}
            onClick={()=>setShowCard(car)}
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
            {showCard && <CarCard car={showCard} setShowCard={setShowCard} />}      
      
    </div>
  );
};

export default Make;
