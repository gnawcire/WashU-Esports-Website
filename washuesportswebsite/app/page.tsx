import Image from 'next/image'
import { sourceSansProBoldIt, sourceSansProBold, sourceSansProLight } from './fonts'
export default function Home() {
  return (
    <body>
      {/* nav bar */}
      
      <div className="w-full bg-[#a51417] pt-1 border-[12px] border-[#a51417] relative z-10 flex justify-around items-center">
        <div className={`${sourceSansProLight.className} text-lg text-[#eeeeee]`}>
          Home
        </div>
        <div className={`${sourceSansProLight.className} text-lg text-[#eeeeee]`}>
          Teams
        </div>
        <div className="flex justify-center">
          <Image
              src="/logo.svg"
              alt="washu esports logo"
              height={120}
              width={120}
              className="absolute"
          />
        </div>
        
        
        <div className={`${sourceSansProLight.className} text-lg text-[#eeeeee]`}>
          Schedule
        </div>
        <div className={`${sourceSansProLight.className} text-lg text-[#eeeeee]`}>
          About
        </div>
      </div>
      
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
            Your home for esports at WashU.
          </span>
        </div>
      </div>
      {/* text + image  */}
      <div className="flex items-center justify-center mt-20">
        <div className={`${sourceSansProBold.className} text-[#3d3d3d] text-5xl ml-40 max-w-[50%]`}>
          Embracing a diverse gaming community, inclusive of competitive gamers, casual gamers, and everyone in between.
        </div>
        <div className="mr-40 flex">
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

      
      
    </body>
  )
}