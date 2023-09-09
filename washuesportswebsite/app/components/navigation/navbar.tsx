'use client'
import React from "react"
import Link from "next/link"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { sourceSansProBoldIt, sourceSansProBold, sourceSansProLight } from '../../fonts'
const Navbar=() =>{
    const pathname = usePathname()
    return (
        <div className="w-full bg-[#a51417] pt-1 border-[12px] border-[#a51417] relative z-10 flex justify-around items-center">
        <div className={`${sourceSansProLight.className} text-lg text-[#eeeeee] ${pathname === "/" ? "underline" : ""}`}>
          <Link href="/">Home</Link>
        </div>
        <div className={`${sourceSansProLight.className} text-lg text-[#eeeeee]`}>
          Teams
        </div>
        <div className="flex justify-center -mt-5">
          <Image
              src="/logo.svg"
              alt="washu esports logo"
              height={150}
              width={150}
              className="absolute"
          />
        </div>
        
        
        <div className={`${sourceSansProLight.className} text-lg text-[#eeeeee] ${pathname === "/schedule" ? "underline" : ""}`}>
          <Link href="/schedule">Schedule</Link>
        </div>
        <div className={`${sourceSansProLight.className} text-lg text-[#eeeeee] ${pathname === "/about" ? "underline" : ""}`}>
          <Link href="/about">About</Link>
        </div>
      </div>
    );
};
export default Navbar;