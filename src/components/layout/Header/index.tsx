import React, { FC, useEffect, useState } from 'react';

import cx from 'classnames';
import { useRouter } from 'next/router';

import styles from './Header.module.scss';

interface Props {

}

const Header: FC<Props> = ({}) => {
  const router = useRouter()
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (menuOpened) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpened]);

  useEffect(() => {
    setMenuOpened(false);
    document.body.style.overflow = 'unset';
  }, [router.pathname]);

  const moveTo = (e: any) => {
    e.preventDefault();
    history.replaceState({}, '', e.target.href);
    const popStateEvent = new PopStateEvent('popstate');
    dispatchEvent(popStateEvent);
    setMenuOpened(false);
  }

  return (
      <header className={styles['header']}>
        <a
            href="https://www.linkedin.com/company/layer3labs/mycompany/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={styles['header__social']}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1248 9.32685C12.4241 8.98987 12.6694 8.65019 12.9767 8.36172C13.9203 7.47208 15.0364 7.02456 16.3412 7.03535C17.0583 7.04074 17.7646 7.09196 18.4548 7.29146C20.0346 7.74706 20.9512 8.8362 21.3906 10.3783C21.7195 11.5348 21.7788 12.7237 21.7815 13.9153C21.7869 16.4278 21.7734 18.9431 21.7815 21.4557C21.7815 21.6902 21.7168 21.7522 21.485 21.7522C20.1909 21.7414 18.8942 21.7414 17.6002 21.7522C17.371 21.7522 17.3225 21.6848 17.3225 21.4692C17.3306 19.0779 17.3306 16.6866 17.3225 14.2927C17.3225 13.6942 17.2821 13.093 17.1149 12.5107C16.8049 11.4377 16.0366 10.8905 14.9124 10.9498C13.3757 11.0307 12.5777 11.7909 12.3836 13.3518C12.3378 13.7239 12.3135 14.0986 12.3162 14.4733C12.3162 16.7999 12.3162 19.1264 12.3216 21.453C12.3216 21.6848 12.265 21.7522 12.0278 21.7522C10.723 21.7414 9.41815 21.7414 8.11334 21.7522C7.90306 21.7522 7.84375 21.6983 7.84375 21.4853C7.84914 16.8807 7.84914 12.2735 7.84375 7.66888C7.84375 7.43973 7.91924 7.38851 8.13491 7.38851C9.37232 7.3966 10.6124 7.39929 11.8498 7.38851C12.079 7.38851 12.1356 7.4613 12.1329 7.67697C12.1194 8.22693 12.1275 8.77689 12.1275 9.32955L12.1248 9.32685Z" fill="#FDFDFD"/>
            <path d="M5.02912 14.5921C5.02912 16.8701 5.02643 19.1482 5.03452 21.4262C5.03452 21.6796 4.97251 21.7551 4.71101 21.7524C3.41698 21.7389 2.12295 21.7416 0.82623 21.7524C0.618646 21.7524 0.556641 21.7012 0.556641 21.4882C0.562032 16.8755 0.562032 12.2628 0.556641 7.64748C0.556641 7.45607 0.60247 7.38867 0.804662 7.38867C2.11756 7.39676 3.43046 7.39946 4.74336 7.38867C4.99677 7.38867 5.02912 7.48303 5.02912 7.7014C5.02373 9.9983 5.02643 12.2952 5.02643 14.5921H5.02912Z" fill="#FDFDFD"/>
            <path d="M5.38828 2.81676C5.38828 4.24828 4.22904 5.41291 2.80022 5.41291C1.39027 5.41291 0.220254 4.24828 0.214862 2.83833C0.209471 1.4149 1.37949 0.242188 2.80561 0.242188C4.22096 0.242188 5.38558 1.40412 5.38828 2.81407V2.81676Z" fill="#FDFDFD"/>
          </svg>
        </a>

        <nav className={cx(styles['header__nav'], { [styles['is-active']]: menuOpened })}>
          <ul>
            <li>
              <a href="#about" onClick={moveTo}>ABOUT US</a>
            </li>
            <li>
              <a href="#services" onClick={moveTo}>OUR SERVICES</a>
            </li>
            <li>
              <a href="#clients" onClick={moveTo}>OUR CLIENTS</a>
            </li>
          </ul>
        </nav>


        <button
            type="button"
            className={styles['header__burger']}
            onClick={() => setMenuOpened(!menuOpened)}
        >
          <div className={cx(styles['burger'], { [styles['is-active']]: menuOpened })}>
            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.8242 7.49971L0.000165939 -1.39107e-06L0.000165754 4.24736L31.8242 11.7471L31.8242 7.49971Z" fill="black"/>
              <path d="M3.49503e-06 19.3463L3.67793e-06 15.1621C3.58153 15.1621 5.25386 14.5044 7.19 13.743C9.22794 12.9414 11.5375 12.0332 15.9121 12.0332C20.2867 12.0332 22.5963 12.9414 24.6342 13.743C26.5704 14.5044 28.2429 15.1621 31.8242 15.1621L31.8242 19.3463C27.4496 19.3463 25.14 18.4383 23.1021 17.6364C21.1661 16.8749 19.4936 16.217 15.9121 16.217C12.3306 16.217 10.6581 16.8749 8.72211 17.6364C6.68401 18.4381 4.37445 19.3463 3.49503e-06 19.3463Z" fill="black"/>
              <path d="M31.8242 27.5959L31.8242 23.415L-1.90735e-06 23.415L-2.0901e-06 27.5959L31.8242 27.5959Z" fill="black"/>
            </svg>
          </div>
        </button>
      </header>
  );
};

export default Header
