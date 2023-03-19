import React, { FC } from 'react';

import Image from 'next/image';

import ProcessItem from '@/components/Process/ProcessItem';
import Headline from '@/components/ui/Headline';
import ProcessType from '@/types/processes';

import styles from './Process.module.scss';

import logo from '@/images/logo-black.svg';

interface Props {
  processes: ProcessType[];
}

const Process: FC<Props> = ({ processes }) => {
  return (
      <div className={styles['process']}>
        <div className={styles['process__left']}>
          <div className={styles['process__title']}>
            <Headline title="Our Process" color="#D1FF80" lineWidth={195} fontSize="sm" align="mobile-center" />
          </div>
          <div className={styles['process__subtitle']}>
            <Image
                src={logo.src}
                alt="Layer 3"
                height={26}
                width={30}
            />
            <span className={styles['process__subtitle-text']}>Simple Steps</span>
          </div>
        </div>

        <div className={styles['process__content']}>
          {processes.map((process, index) => (<ProcessItem key={process.title} item={process} index={index + 1} />))}
        </div>
      </div>
  );
};

export default Process
