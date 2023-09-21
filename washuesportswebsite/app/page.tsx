import Image from 'next/image'
import { sourceSansProBoldIt, sourceSansProBold, sourceSansProLight } from './fonts'
import Link from "next/link"

export default function Home() {
  return (
    <>
      
      {/* top image w/words */}
      <div className="relative pt-14 w-full h-[65rem]">
        <Image
          src="/washufront.jpg"
          alt="WashU Campus Blurred"
          layout="fill"  // Use layout="fill" to make the image cover the container
          objectFit="cover" // Set objectFit to "cover" to maintain aspect ratio and fill the container
          style={{ filter: 'brightness(70%)' }} // Adjust the brightness value as needed
        />
        <div className={`${sourceSansProBold.className} absolute top-1/2 left-1/2 text-8xl text-[#eeeeee] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_35px_65px_rgba(0,0,0,0.35)] text-center`}>
          <span style={{
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Apply background shadow
            padding: '10px', // Add padding to the background
            borderRadius: '4px', // Add rounded corners
          }}>
            Your home for Esports at WashU.
          </span>
        </div>
      </div>
      {/* upcoming events */}
      <div className="text-[#3d3d3d] flex items-center justify-center mt-20 text-4xl">

        Upcoming Events
      </div>
      {/* text + image about club  */}
      <div className="flex items-center justify-center mt-20">
        <div className={`${sourceSansProBold.className} text-[#3d3d3d] text-5xl max-w-[50%]`}>
          Embracing a diverse gaming community, inclusive of competitive gamers, casual gamers, and everyone in between.
        </div>
        <div className="w-fit lg:flex">
          <Image
            src="/2guysfistbumpinglan.jpg"
            alt="2 guys fist bumping at a LAN"
            width={300}
            height={300}
          />
          <Image
            src="/2guysinmediaroom.jpg"
            alt="2 guys in the media room chillin"
            width={300}
            height={300}
          />
        </div>
        
      </div>
      {/* footer */}
      
     </> 
    
  )
}