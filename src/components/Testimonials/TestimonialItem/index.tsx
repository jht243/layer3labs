import React, { FC } from 'react'

import Image from 'next/image'

import TestimonialsType from '@/types/testimonials'

import styles from './TestimonialItem.module.scss'

interface Props {
  testimonial: TestimonialsType
}

const TestimonialItem: FC<Props> = ({ testimonial }) => {
  const { logo, text, name, photo, company, width, height } = testimonial
  return (
    <div className={styles['testimonial-item']}>
      <div className={styles['testimonial-item__logo']}>
        <Image
          src={logo.src}
          alt={company}
          width={width}
          height={height}
          objectFit="contain"
        />
      </div>
      <p className={styles['testimonial-item__text']}>{text}</p>

      <div className={styles['testimonial-item__meta']}>
        {photo ? (
          <div className={styles['testimonial-item__photo']}>
            <Image
              src={photo.src}
              alt={name}
              width={65}
              height={65}
              objectFit="contain"
            />
          </div>
        ) : null}
        <div className={styles['testimonial-item__name']}>{name}</div>
      </div>
    </div>
  )
}

export default TestimonialItem
