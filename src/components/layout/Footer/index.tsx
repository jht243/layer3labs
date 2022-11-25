import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import styles from './Footer.module.scss'

const Footer: FC = () => {
  const router = useRouter()

  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__col']}>
        <a href="https://www.linkedin.com/company/layer3labs/mycompany/?viewAsMember=true" target="_blank" rel="noopener nofollow">
          LINKEDIN
        </a>
        <a href="mailto:partners@layer3labs.io?subject=Web3 Development Inquiry">Contact Us</a>
        {/* <a href="#." target="_blank" rel="noopener nofollow">
          INSTAGRAM
        </a> */}
      </div>
      <div className={styles['footer__logo']}>
        <Image
          src="/logo.svg"
          alt="Layer 3"
          height={30}
          width={30}
          onClick={() => {
            console.log('gfhsbvjsbjkv')
            router.push('/')
          }}
        />
      </div>
      <div className={styles['footer__col']}>
        <a href="mailto:PARTNERS@LAYER3LABS.IO">PARTNERS@LAYER3LABS.IO</a>
        <div>ALL RIGHTS RESERVED</div>
      </div>
    </footer>
  )
}

export default Footer
