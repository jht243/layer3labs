import React, { FC } from 'react';

import { romanize } from '@/app/utils/helpers';
import ProcessType from '@/types/processes';

import styles from './ProcessItem.module.scss';

interface Props {
  item: ProcessType;
  index: number;
}

const ProcessItem: FC<Props> = ({ item, index }) => {
  const { text, title } = item;
  return (
      <div className={styles['process-item']}>
        <div className={styles['process-item__count']}>
          {romanize(index)}
        </div>
        <div className={styles['process-item__title']}>
          {title}
        </div>
        <div className={styles['process-item__text']}>
          {text}
        </div>
      </div>
  );
};

export default ProcessItem
