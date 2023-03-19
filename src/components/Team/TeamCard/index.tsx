import React, { FC } from 'react';

import Image from 'next/image';

import { Team } from '@/types/team';

import styles from './TeamCard.module.scss';

const TeamCard: FC<Team> = ({ image, name, position, text, linkedin }) => {
  return (
      <div className={styles['team-card']}>
        <div className={styles['team-card__content']}>
          <div className={styles['team-card__image']}>
            <Image
                src={image.src}
                alt="Horizen"
                width={114}
                height={114}
                objectFit="contain"
            />
          </div>
          <div className={styles['team-card__name']}>
            {name}
          </div>
          <div className={styles['team-card__position']}>
            {position}
          </div>
          <div className={styles['team-card__text']}>
            {text}
          </div>
        </div>
        <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={styles['team-card__linked']}
        >
          LINKEDIN <span>↗</span>
        </a>
      </div>
  );
};

export default TeamCard
