import React, { FC } from 'react';

import TeamCard from '@/components/Team/TeamCard';
import Headline from '@/components/ui/Headline';
import { Team } from '@/types/team';

import styles from './Team.module.scss';

interface Props {
  team: Team[],
}

const Team: FC<Props> = ({ team }) => {
  return (
      <div className={styles['team']}>
        <div className={styles['team__title']}>
          <Headline title="OUR TEAM" align="center" />
        </div>
        <div className={styles['team__list']}>
          {team.map((member) => {
            const { name, image, position, text, linkedin } = member;
            return (
                <div key={name} className={styles['team__member']}>
                  <TeamCard
                      image={image}
                      name={name}
                      position={position}
                      text={text}
                      linkedin={linkedin}
                  />
                </div>
            )
          })}
        </div>
      </div>
  );
};

export default Team
