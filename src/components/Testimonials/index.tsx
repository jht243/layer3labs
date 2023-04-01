import React, { FC, useCallback, useEffect } from 'react'

import useEmblaCarousel from 'embla-carousel-react'

import TestimonialItem from '@/components/Testimonials/TestimonialItem'
import Headline from '@/components/ui/Headline'
import TestimonialsType from '@/types/testimonials'

import styles from './Testimonials.module.scss'

interface Props {
  testimonials: TestimonialsType[]
}

const Testimonials: FC<Props> = ({ testimonials }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
    // breakpoints: {
    //   '(max-width: 768px)': { align: 'center' },
    // },
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
  }, [emblaApi])

  return (
    <div className={styles['testimonials']}>
      <div className={styles['testimonials__title']}>
        <Headline
          title="CUSTOMER TESTIMONIALS"
          color="#E87B5D"
          align="center"
          lineWidth={516}
        />
      </div>
      <div className={styles['testimonials__slider']} ref={emblaRef}>
        <div className={styles['testimonials__container']}>
          {testimonials.map((item, index) => {
            return (
              <div
                key={index.toString()}
                className={styles['testimonials__slide']}
              >
                <div className={styles['testimonials__slide-inner']}>
                  <TestimonialItem testimonial={item} />
                </div>
              </div>
            )
          })}
        </div>

        {testimonials && testimonials.length > 3 ? (
          <>
            <button
              type="button"
              className={styles['testimonials__prev']}
              onClick={scrollPrev}
            >
              <svg
                width="13"
                height="16"
                viewBox="0 0 13 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-3.93402e-07 8L12.75 0.205772L12.75 15.7942L-3.93402e-07 8Z"
                  fill="#2B2E34"
                />
              </svg>
            </button>
            <button
              type="button"
              className={styles['testimonials__next']}
              onClick={scrollNext}
            >
              <svg
                width="13"
                height="16"
                viewBox="0 0 13 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 8L0.25 15.7942L0.25 0.205772L13 8Z"
                  fill="#2B2E34"
                />
              </svg>
            </button>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Testimonials
