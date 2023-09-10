import Image from 'next/image'
import { sourceSansProBold, sourceSansProBoldIt, sourceSansProLight, sourceSansProRegular, sourceSansProExtraLight } from '../fonts'

export default function Page() {
    return (
      <>
      <div className={`pt-20 flex justify-center`}>
      <div className ={`text-4xl`}>
        About
      </div>
      </div>
      <div className ={`${sourceSansProLight.className} text-2xl text-center lg:zpx-40 sm:px-20 mt-10 w-full`}>
      The Washington University in St. Louis esports club fosters a vibrant gaming community on campus for students passionate about competitive video gaming. The club fields teams that compete in major esports titles like League of Legends, Overwatch, Valorant, and more. The club is a chapter of the National Esports Collegiate Conference (NECC) and competes in NECC tournaments as well as larger collegiate leagues. Beyond competition, the esports club holds LAN parties, watch parties for major esports events, and community game nights open to all WashU students. Members can connect over shared interests in gaming, build camaraderie and teamwork skills through practice and tournaments, and bond over epic victories and defeats. With esports continuing its explosive growth, the WashU esports club provides unique opportunities for students to engage with this exciting industry.
      </div>
      <div className ={`pt-14`}>
        <Image
          src = "/2022-23exec.jpg"
          alt="2022-23 exec"
          height={1000}
          width={600}
          className="mx-auto"
        />
      </div>
      <div className={`pt-10 text-center text-3xl`}>
        2022-23 Exec Board
      </div>
      </>
    );
  }