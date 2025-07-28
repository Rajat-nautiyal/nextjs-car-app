"use client";
import React, {
  createContext,
  useEffect,
  useContext,
  useState,
  ReactNode,
} from "react";
import { fetchDataProps } from "@/types";

type recordsProp = fetchDataProps[];

export const dataContext = createContext<recordsProp | undefined>(undefined);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [carsData, setCarsData] = useState<recordsProp | undefined>(undefined);
  const fetchCars = async () => {
    try {
      const response = await fetch(`/api/cars`);
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
    <dataContext.Provider value={ carsData }>
        {children}
    </dataContext.Provider>
  );
};
