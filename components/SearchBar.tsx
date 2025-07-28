"use client";
import React, { useState } from "react";
import Image from "next/image";
import { manufacturers } from "@/constants";
import { useRouter } from "next/navigation";
import { CustomFilter } from "./index";

export const SearchBar = () => {
  const [dropDownData, setDropDownData] = useState<string[]>([]);
  const [makeValue, setMakeValue] = useState<string>("");
  const [modelValue, setModelValue] = useState<string>("");
  const [yearValue, setYearValue] = useState<string>("");

  const router = useRouter();
  const handleMakeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setMakeValue(e.target.value);
    setTimeout(() => {
      const filtered = manufacturers.filter((car) =>
        car.toLowerCase().includes(inputValue.toLowerCase())
      );
      // setFilteredCars(filtered);
      if (!inputValue.trim()) {
        setDropDownData([]);
        return;
      }
      setDropDownData(filtered);
    }, 400);
  };
  return (
    <div className="flex max-sm:flex-col w-full gap-12 max-sm:mt-0 mt-12 mb-16 max-sm:px-2 max-sm:gap-6 max-sm:overflow-x-hidden">
      <div className="flex w-[60%] max-sm:mt-12 max-sm:items-center max-sm:flex-col max-sm:w-full gap-3">
        <div className="w-[45%] max-sm:w-full">
          <div className="absolute p-2">
            <Image alt="car-logo" src="/car-logo.svg" width={22} height={22} />
          </div>
          <input
            type="text"
            placeholder="Volkswagon.."
            value={makeValue}
            onChange={(e) => handleMakeChange(e)}
            className="bg-gray-200 rounded pl-9 p-2 w-full outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition duration-200"
          />
          <div className="relative w-full">
            {dropDownData.length > 0 && (
              <ul className="absolute top-full mt-2 w-full max-h-60 overflow-y-auto bg-white rounded-lg shadow-lg border border-gray-300 z-50">
                {dropDownData.map((make: string, index: number) => (
                  <li
                    key={index}
                    onClick={() => {
                      setMakeValue(make);
                      setDropDownData([]);
                    }}
                    className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-150 rounded"
                  >
                    {make}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="w-[45%] max-sm:w-full">
          <div className="absolute p-2">
            <Image
              alt="model-icon"
              src="/model-icon.png"
              width={22}
              height={22}
            />
          </div>
          <input
            type="text"
            value={modelValue}
            onChange={(e) => setModelValue(e.target.value)}
            placeholder="Model.."
            className="bg-gray-200 w-full rounded pl-9 p-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition duration-200"
          />
        </div>
        <CustomFilter yearValue={yearValue} setYearValue={setYearValue} />

        <button
          className="cursor-pointer"
          onClick={() =>
            router.push(
              `/carListing/make?make=${makeValue}&model=${modelValue}&year_min=${yearValue}`
            )
          }
        >
          <Image
            alt="magnifying-glass"
            src="./magnifying-glass.svg"
            width={50}
            height={50}
          />
        </button>
      </div>
    </div>
  );
};
