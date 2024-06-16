import { NavLink, useLocation } from 'react-router-dom';
// import sprite from 'assets/sprite.svg';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';

export const Header = ({
  setModalLogInIsOpen,
  setModalRegistrationIsOpen,
  setModalTitle,
  setmodalText,
}) => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);

  const root = document.documentElement;
  if (!isHome) {
    root.style.setProperty('--padding_home', '0');
  } else {
    root.style.setProperty('--padding_home', 'clamp(12px, 2.22vw, 32px)');
  }

  useEffect(() => {
    setIsHome(location.pathname === '/home');
  }, [location.pathname]);

  return (
    <header>
      <div
        className={
          isHome ? styles.header__bg_color : styles.header__bg_color___blue
        }
      >
        <div className={isHome ? styles.header_home : styles.header}>
          <div
            className={
              isHome ? styles.header_container_home : styles.header_container
            }
          >
            <nav
              className={isHome ? styles.header_nav__home : styles.header_nav}
            >
              <NavLink
                to="/home"
                className={isHome ? styles.nav_logo__home : styles.nav_logo}
              >
                Nanny.Services
              </NavLink>
              <div className={styles.container_nav}>
                <div className={styles.nav_page}>
                  <NavLink to="/home" className={styles.nav_page__link}>
                    Home
                  </NavLink>
                  <NavLink to="/nannies" className={styles.nav_page__link}>
                    Nannies
                  </NavLink>
                </div>
                <div
                  className={
                    isHome
                      ? styles.button_user__register___home
                      : styles.button_user__register
                  }
                >
                  <button
                    type="button"
                    className={styles.login}
                    onClick={() => {
                      setModalTitle('Log In');
                      setmodalText(
                        'Welcome back! Please enter your credentials to access your account and continue your babysitter search.'
                      );
                      document.body.classList.add('overflow-hidden');
                      setModalLogInIsOpen(true);
                    }}
                  >
                    Log In
                  </button>
                  <button
                    type="button"
                    className={styles.register}
                    onClick={() => {
                      setModalTitle('Registration');
                      setmodalText(
                        'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.'
                      );
                      document.body.classList.add('overflow-hidden');
                      setModalRegistrationIsOpen(true);
                    }}
                  >
                    Registration
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
