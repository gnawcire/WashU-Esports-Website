'use client'
import React from "react"
import Link from "next/link"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { sourceSansProBoldIt, sourceSansProBold, sourceSansProLight } from '../../fonts'

const footer=() =>{
    return (
        <div className={`bg-[#a51417] flex justify-center mt-[30px] pt-[80px] pb-[80px]`}>
            <div className="ml-16">
                <a href="https://discord.gg/yUFu5w3vvm" target="_blank">
                <Image
                    src = "/discord.png"
                    alt = "discord logo"
                    height = {60}
                    width = {60}
                />
                </a>
            </div>
            <div className="ml-16 mr-8">
                <a href="https://twitter.com/wustlesports?lang=en" target="_blank">
                <Image
                    src = "/x.png"
                    alt = "x logo"
                    height = {60}
                    width = {60}
                />
                </a>
            </div>
            <div className="mr-16 ml-8">
                <a href="https://www.instagram.com/washu_esports/?hl=en" target="_blank">
                <Image
                    src = "/instagram.png"
                    alt = "instagram logo"
                    height = {60}
                    width = {60}
                />
                </a>
            </div>
            <div className="mr-16">
                <a href="https://www.twitch.tv/washuesports" target="_blank">
                <Image
                    src = "/twitch.png"
                    alt = "twitch logo"
                    height = {60}
                    width = {60}
                />
                </a>
            </div>
        </div>
    );
};
export default footer;