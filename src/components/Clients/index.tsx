import React, { FC } from 'react';

import Image from 'next/image';

import Headline from '@/components/ui/Headline';
import ClientsType from '@/types/clients';

import styles from './Clients.module.scss';

interface Props {
  clients: ClientsType[];
}

const Clients: FC<Props> = ({ clients }) => {
  return (
      <div className={styles['clients']}>
        <div className={styles['clients__title']}>
          <Headline title="Our Clients" color="#E87B5D" align="center" />
        </div>
        <div className={styles['clients__list']}>
          {clients.map((client) => {
            const { image, name, text, width, height } = client;
            return (
                <div key={text} className={styles['clients__item']}>
                  <div className={styles['clients__item-image']}>
                    <Image
                        src={image.src}
                        alt={name}
                        width={width}
                        height={height}
                        objectFit="contain"
                    />
                  </div>
                  <div className={styles['clients__item-text']}>
                    {text}
                  </div>
                </div>
            )
          })}
        </div>
      </div>
  );
};

export default Clients
