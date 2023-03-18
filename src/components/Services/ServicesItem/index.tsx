import React, { FC } from 'react';

import Image from 'next/image';

import ServicesType from '@/types/services';

import styles from './ServicesItem.module.scss';

interface Props {
  item: ServicesType;
}

const ServicesItem: FC<Props> = ({ item }) => {
  const { text, title, icon } = item;
  return (
      <div className={styles['services-item']}>
        <div className={styles['services-item__icon']}>
          <span>
            <Image
                src={icon.src}
                alt={title}
                layout="fill"
            />
          </span>
        </div>

        <div className={styles['services-item__content']}>
          <div className={styles['services-item__title']}>
            {title}
          </div>
          <div className={styles['services-item__text']}>
            {text}
          </div>
        </div>
      </div>
  );
};

export default ServicesItem
