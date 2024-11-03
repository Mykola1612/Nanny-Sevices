import { NavLink, useLocation } from 'react-router-dom';
// import sprite from 'assets/sprite.svg';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import {
  selectAuthIsLoggedIn,
  selectAuthUser,
} from '../../redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { signOutThunk } from '../../redux/auth/authOperations';
// import { OpenModalButton } from '../OpenModalButton/OpenModalButton';
import sprite from '../../assets/sprite.svg';

export const Header = ({
  setModalLogInIsOpen,
  setModalRegistrationIsOpen,
  setModalTitle,
  setmodalText,
}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser);

  console.log(user);

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
              <div className={isHome ? styles.nav_page__home : styles.nav_page}>
                <NavLink to="/home" className={styles.nav_page__link}>
                  Home
                </NavLink>
                <NavLink to="/nannies" className={styles.nav_page__link}>
                  Nannies
                </NavLink>
                {isLoggedIn && (
                  <NavLink to="/favorites" className={styles.nav_page__link}>
                    Favorites
                  </NavLink>
                )}
              </div>
              <div className={styles.container_nav}>
                {!isLoggedIn ? (
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
                      className={`${styles.register_base} ${
                        isHome ? styles.register_home : styles.register
                      }`}
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
                    {/* <OpenModalButton
                      setmodalText={setmodalText}
                      setModalTitle={setModalTitle}
                      buttonText={'Registration'}
                      className={`${styles.register_base} ${
                        isHome ? styles.register_home : styles.register
                      }`}
                      modalText={
                        'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.'
                      }
                      modalTitle={'Registration'}
                      setModalIsOpen={setModalRegistrationIsOpen}
                    /> */}
                  </div>
                ) : (
                  <div className={styles.container_nav__authorizations___user}>
                    <div className={styles.container_nav__user}>
                      <svg className={styles.container_nav__user___svg}>
                        <use href={`${sprite}#icon-image `} />
                      </svg>
                      <p className={styles.container_nav__user___name}>
                        {user.name}
                      </p>
                    </div>
                    <button
                      type="button"
                      className={styles.login}
                      onClick={() => dispatch(signOutThunk())}
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
