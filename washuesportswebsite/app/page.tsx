import Image from 'next/image'

export default function Home() {
  return (
    <body>
      
      <div className="relative">
        <div className="object-cover top-16 w-full h-2/3">
        <Image
          src="/schoolbgblurred.png"
          alt="WashU Campus Blurred"
          fill={true}
        />
        </div>
      </div>
      
      <div className="absolute flex justify-center bottom-1/2">
        <h1 className="text-3xl font-bold text-white">
          WashU Esports
        </h1>
      </div>
    </body>
  )
}