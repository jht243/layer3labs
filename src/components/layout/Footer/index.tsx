import React, { FC } from 'react'

import Link from 'next/link'

import styles from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__col']}>
        <a
          href="https://www.linkedin.com/company/layer3labs/mycompany/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          LINKEDIN
        </a>
        <a href="mailto:partners@layer3labs.io?subject=Web3 Development Inquiry">
          CONTACT US
        </a>
        <Link href="/policy">PRIVACY POLICY</Link>
      </div>
      <div className={styles['footer__col']}>
        <a
          className={styles['footer__col--left']}
          href="mailto:PARTNERS@LAYER3LABS.IO"
        >
          PARTNERS@LAYER3LABS.IO
        </a>
        <div className={styles['footer__col--left']}>ALL RIGHTS RESERVED</div>
      </div>
    </footer>
  )
}

export default Footer
