import React, { FC } from 'react';

import ServicesItem from '@/components/Services/ServicesItem';
import Headline from '@/components/ui/Headline';
import ServicesType from '@/types/services';

import styles from './Services.module.scss';

interface Props {
  services: {
    col1: ServicesType[];
    col2: ServicesType[];
  }
}

const Services: FC<Props> = ({ services }) => {
  return (
      <div className={styles['services']}>
        <div className={styles['services__title']}>
          <Headline title="Our Services" color="#D1FF80" lineWidth={195} fontSize="sm" />
        </div>

        <div className={styles['services__content']}>
          <div className={styles['services__col']}>
            {services.col1.map((service) => {
              return (
                  <div key={service.title} className={styles['services__item']}>
                    <ServicesItem item={service} />
                  </div>
              )
            })}
          </div>
          <div className={styles['services__col']}>
            {services.col2.map((service) => {
              return (
                  <div key={service.title} className={styles['services__item']}>
                    <ServicesItem item={service} />
                  </div>
              )
            })}
          </div>
        </div>
      </div>
  );
};

export default Services
