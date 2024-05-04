'use client'
import { useState } from 'react'
import Image from 'next/image'
import { latamAmbassadors } from '~/menu'

export function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    { src: latamAmbassadors[0], alt: 'Image 1' },
    { src: latamAmbassadors[1], alt: 'Image 2' },
    { src: latamAmbassadors[2], alt: 'Image 3' },
  ]

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentImage((next) => (next === images.length - 1 ? 0 : next + 1))
  }

  return (
    <div className="relative overflow-hidden">
      <Image
        src={images[currentImage].src}
        alt={images[currentImage].alt}
        layout="fill"
        className="transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${-currentImage * 100}%)` }}
      />

      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-md bg-white p-2 shadow-md hover:bg-gray-100"
        onClick={handlePrev}
      >
        Prev
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-md bg-white p-2 shadow-md hover:bg-gray-100"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  )
}
