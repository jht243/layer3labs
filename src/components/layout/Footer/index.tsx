import React, { FC } from 'react'

import styles from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__col']}>
        <a href="#." target="_blank" rel="noopener nofollow">
          LINKEDIN
        </a>
        <a href="#." target="_blank" rel="noopener nofollow">
          INSTAGRAM
        </a>
      </div>
      <div className={styles['footer__col']}>
        <a href="mailto:PARTNERS@LAYER3LABS.IO">PARTNERS@LAYER3LABS.IO</a>
        <div>ALL RIGHTS RESERVED</div>
      </div>
    </footer>
  )
}

export default Footer
