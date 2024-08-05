'use client'
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './carousel-button'
import './embla.css'
import { GrPrevious, GrNext } from "react-icons/gr";
type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="embla mt-2 lg:mt-4 relative flex items-center md:block select-none ">
      <div onClick={() => onThumbClick(selectedIndex - 1)} className='ms-1 bg-gray-300 bg-opacity-50 rounded-full w-10 h-10 z-50 absolute left-0 md:top-[35%] flex items-center justify-center pe-1 lg:cursor-pointer hover:bg-white hover:bg-opacity-50'>
        <GrPrevious className='w-4 h-4 text-[#333]' />
      </div>
      <div onClick={() => onThumbClick(selectedIndex + 1)} className='me-1 bg-gray-300 bg-opacity-50 rounded-full w-10 h-10 z-50 absolute right-0 md:top-[35%] flex items-center justify-center ps-1 lg:cursor-pointer hover:bg-white hover:bg-opacity-50'>
        <GrNext className='w-4 h-4 text-[#333' />
      </div>
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((img, index) => (
            <div className="embla__slide w-full" key={index}>
              <div className="embla__slide__number ">
                {/* // eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt='' className='w-full h-full' />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block w-full mt-3">
        <div className="w-full" ref={emblaThumbsRef}>
          <div className="space-x-2 w-full flex justify-center">
            {slides.map((img, index) => (
              <Thumb
                img={img}
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
