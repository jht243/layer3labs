import React, { FC } from 'react';

import cx from 'classnames';

import styles from './Headline.module.scss';

interface Props {
  title: string;
  color?: string;
  classes?: string;
  align?: string;
  lineWidth?: number;
  [key: string]: any;
}

const Headline: FC<Props> = (
    {
      title,
      color = '#B791F1',
      tag: Tag = 'h2',
      classes,
      align,
      lineWidth = 320
    }) => {
  return (
      <Tag className={cx(styles['headline'], styles[`align-${align}`], classes)}>
        {title}
        <hr style={{ backgroundColor: color, width: `${lineWidth}px` }} />
      </Tag>
  );
};

export default Headline;
