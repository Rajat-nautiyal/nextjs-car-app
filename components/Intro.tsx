"use client";
import React from "react";
import { CustomButton } from "./index";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Intro = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/carListing");
  };

  return (
    
    <div className=" flex h-screen w-full max-sm:flex-col max-sm:h-full max-sm:px-2 justify-between mt-14 px-10">
      <div className="w-[40%] max-sm:w-full max-sm:min-h-full mt-9 max-sm:mt-5">
        <div  className="text-[3.8rem] max-sm:pt-8 max-sm:text-[2.8rem] font-bold pt-5">
          Find, book, rent a car—quick and super easy!
        </div>
        <div style={{ wordSpacing: '5px'}} className="text-[1.7rem] font-extralight pt-5 max-sm:pt-7 max-sm:text-[1.6rem]">
          Streamline your car rental experience with our effortless booking
          process.
        </div>
        <CustomButton
          title="Explore Cars"
          fontStyle="text-lg text-white"
          containerStyle="bg-blue-600 max-sm:mt-16 p-3 px-6 rounded-full cursor-pointer hover:bg-blue-700 transition-all mt-6"
          handleClick={handleRoute}
        />
      </div>
      <div className="relative w-[60%] max-sm:h-[400px] max-sm:mt-16 max-sm:w-full">
        <Image
          className="object-contain z-10"
          alt="hero"
          src="/Hero.png"
          fill
        />
        <div
          className="absolute max-sm:relative h-[610px] -right-19 max-sm:top-0 -top-34 max-sm:-right-10 max-sm:z-0 -z-10 w-full max-sm:h-[330px] overflow-hidden"
          style={{
            backgroundImage: "url(/hero-bg.png)",
            backgroundRepeat: "round",
          }}
        ></div>
      </div>
    </div>
  );
};
