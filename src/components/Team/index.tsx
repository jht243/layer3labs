import React, { FC, useState } from 'react';

import useMediaQuery from '@/app/hooks/useMediaQuery';
import TeamCard from '@/components/Team/TeamCard';
import Headline from '@/components/ui/Headline';
import { Team } from '@/types/team';

import styles from './Team.module.scss';

interface Props {
  team: Team[],
}

const Team: FC<Props> = ({ team }) => {
  const isMobile = useMediaQuery(768)
  const [isCollapsed, setIsCollapsed] = useState(true)
  return (
      <div className={styles['team']}>
        <div className={styles['team__title']}>
          <Headline title="OUR TEAM" align="center" />
        </div>
        <div className={styles['team__list']}>
          {team.map((member, index) => {
            if (index >= 3 && isMobile && isCollapsed) return null
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

        {isMobile && team.length > 3 && isCollapsed
            ? <div className={styles['team__more-wrap']}>
                <button type="button" className={styles['team__more']} onClick={() => setIsCollapsed(false)}>
                  SEE ALL
                </button>
              </div>
            : null
        }
      </div>
  );
};

export default Team
