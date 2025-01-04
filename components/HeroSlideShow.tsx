/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image"

// interface ImageSlideshowProps {
//   images: string[]
//   currentImage: number
// }

export function ImageSlideshow({ images, currentImage }: any) {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img} alt='jass'
         
          className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${
            index === currentImage ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            zIndex: index === currentImage ? 10 : 0,
            transitionDelay: index === currentImage ? '0ms' : '500ms',
          }}
        />
      ))}
    </div>
  )
}