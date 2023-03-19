import React, { FC } from 'react';

import cx from 'classnames';

import styles from './Headline.module.scss';

interface Props {
  title: string;
  color?: string;
  classes?: string;
  align?: string;
  lineWidth?: number;
  fontSize?: string;
  [key: string]: any;
}

const Headline: FC<Props> = (
    {
      title,
      color = '#B791F1',
      tag: Tag = 'h2',
      classes,
      align,
      lineWidth = 320,
      fontSize,
    }) => {
  const classNames = cx(styles['headline'], styles[`align-${align}`], { [styles[`is-fz-${fontSize}`]]: fontSize }, classes)
  return (
      <Tag className={classNames}>
        {title}
        <hr style={{ backgroundColor: color, width: `${lineWidth}px` }} />
      </Tag>
  );
};

export default Headline;
