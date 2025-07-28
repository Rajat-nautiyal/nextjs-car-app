"use client";
import Image from "next/image";
import { footerLinks } from "@/constants";
import { footerLinkProps, optionProps } from "@/types";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();
  return (
    <footer className="border border-gray-100 px-10 max-sm:px-3 pb-10 mt-10 max-sm:mt-4">
      <div className="mt-8 flex justify-between max-sm:pb-4 max-sm:flex-col pb-20">
        <div className="text-gray-600 max-sm:text-[1rem] max-sm:font-light font-extralight">
          <Image
            src="/logo.svg"
            width={118}
            height={18}
            className="max-sm:w-[100px]"
            alt="logo"
          />
          <div className="mt-5 max-sm:mt-3">Carhub 2023</div>
          <div>All Rights Reserved ©</div>
        </div>

        <div className="flex gap-22 max-sm:gap-0 max-sm:justify-between mr-30 max-sm:pt-2 max-sm:mt-3 max-sm:mr-0">
          {footerLinks.map((data: footerLinkProps, index: number) => (
            <div key={index} className="">
              <h4
                className="text-lg max-sm:text-[1rem] font-semibold hover:underline cursor-default"
                onClick={() => router.push(`/${data.title}`)}
              >
                {data.title}
              </h4>
              <ul>
                {data.links.map((link: optionProps, i: number) => (
                  <li
                    key={i}
                    className=" text-lg max-sm:text-sm text-gray-500 max-sm:text-black mt-4 max-sm:mt-2 font-extralight"
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="py-9 flex flex-col max-sm:font-light max-sm:flex-col max-sm:w-full font-extralight max-sm:text-sm text-base gap-4 max-sm:gap-2 max-sm:items-start items-center max-sm:py-2 justify-between max-sm:px-2 px-10">
        <span>@2025 CarHub. All rights reserved</span>
        <div className="flex gap-7 max-sm:gap-2 max-sm:flex-col max-sm:items-start items-center">
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
      </div>
    </footer>
  );
};
