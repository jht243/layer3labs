import React, { FC } from 'react'

import cx from 'classnames'
import Image from 'next/image'

import Headline from '@/components/ui/Headline'

import styles from './Investors.module.scss'

import avalancheLogo from '@/images/avalanche.png'
import dcgLogo from '@/images/dcg-gray.png'
import horizenLogo from '@/images/horizen-gray.png'
import horizenLabsLogo from '@/images/horizen-labs-gray.png'
import nearLogo from '@/images/near.png'
import polygonLogo from '@/images/polygon-gray.svg'

interface Props {}

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

        <div className={cx(styles['investors__item'], styles['is-desktop'])}>
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
            src={avalancheLogo.src}
            alt="Avalanche"
            width={207}
            height={43}
            objectFit="contain"
          />
        </div>

        <div className={styles['investors__item']}>
          <Image
            src={nearLogo.src}
            alt="Near"
            width={157}
            height={44}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Investors
