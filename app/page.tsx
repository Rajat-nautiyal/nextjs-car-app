import Image from "next/image";
import {Intro, Navbar,CarCatalogue,Footer} from "@/components/index";

export default function Home() {
  return (
    <div className="max-sm:w-full max-sm:min-h-screen overflow-x-hidden max-sm:flex max-sm:flex-col">      
      <Intro/>
      <CarCatalogue/>
    </div>
  );
}
