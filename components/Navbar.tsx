"use client";
import Image from "next/image";
import { SignUp, SignIn } from "./index";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";

export const Navbar = () => {
  const [userId, setUserId] = useState<string|null>(null);
  const router = useRouter();
  const verifyToken = async()=>{
    const token = await fetch('/api/auth/verify-token');
    if(!token){
      return;
    }
    const data = await token.json();
    if(data.userId){
      setUserId(data.userId);
    }
    return;
  }
  useEffect(()=>{
    verifyToken()
  },[])
  return (
    <header className="w-full max-sm:z-0 z-30 max-sm:pt-5 max-sm:px-2 pt-6 px-10 absolute">
      <nav className="w-full mx-auto flex justify-between items-center bg-transparent">
        <Image
          src="/logo.svg"
          alt="hero"
          width={120}
          height={120}
          className="object-contain cursor-pointer"
          onClick={() => router.push("/")}
        />
        <div className="gap-2 flex">
          <SignUp />
          {!userId && <SignIn />}
        </div>
      </nav>
    </header>
  );
};
