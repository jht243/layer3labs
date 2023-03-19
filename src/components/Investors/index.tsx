import React, { FC } from 'react';

import Image from 'next/image';

import Headline from '@/components/ui/Headline';

import styles from './Investors.module.scss';

import dcgLogo from '@/images/dcg-gray.png';
import horizenLogo from '@/images/horizen-gray.png';
import horizenLabsLogo from '@/images/horizen-labs-gray.png';
import polygonLogo from '@/images/polygon-gray.svg';
import polygonStudiosLogo from '@/images/polygon-studios-gray.png';

interface Props {

}

const Investors: FC<Props> = ({}) => {
  return (
      <div className={styles['investors']}>
        <div className={styles['investors__title']}>
          <Headline title="Our investors" align="center" />
        </div>
        <h3 className={styles['investors__subtitle']}>
          EMPOWERING PROGRESSIVE BRANDS TO
          <br />
          BRIDGE THE GAP INTO WEB3
        </h3>
        <div className={styles['investors__list']}>
          <div className={styles['investors__item']}>
            <Image
                src={horizenLabsLogo.src}
                alt="Horizen Labs"
                width={183}
                height={72}
                objectFit="contain"
            />
          </div>

          <div className={styles['investors__item']}>
            <Image
                src={dcgLogo.src}
                alt="Digital Currency Group"
                width={121}
                height={85}
                objectFit="contain"
            />
          </div>

          <div className={styles['investors__item']}>
            <Image
                src={polygonLogo.src}
                alt="Polygon"
                width={149}
                height={32}
                objectFit="contain"
            />
          </div>

          <div className={styles['investors__item']}>
            <Image
                src={horizenLogo.src}
                alt="Horizen"
                width={135}
                height={96}
                objectFit="contain"
            />
          </div>

          <div className={styles['investors__item']}>
            <Image
                src={polygonStudiosLogo.src}
                alt="Polygon Studios"
                width={159}
                height={67}
                objectFit="contain"
            />
          </div>
        </div>
      </div>
  );
};

export default Investors
