import sprite from '../../assets/sprite.svg';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';
import FormWrapper from '../../components/ModalWrapper/ModalWrapper';
import { animateScroll as scroll } from 'react-scroll';
import { Registration } from '../../components/Registration/Registration';

const HomePage = ({
  modalTitle,
  modalText,
  modalRegistrationIsOpen,
  setModalRegistrationIsOpen,
  setModalLogInIsOpen,
  modalLogInIsOpen,
}) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <section className={styles.box}>
        <div className={styles.box_blue}>
          <div className={styles.hero_content}>
            <h1 className={styles.hero_title}>
              Make Life Easier for the Family:
            </h1>
            <p className={styles.hero_text}>
              Find Babysitters Online for All Occasions
            </p>
            <NavLink
              to="/nannies"
              className={styles.hero_started__button}
              onClick={scrollToTop}
            >
              Get started
              <svg className={styles.arrow}>
                <use href={`${sprite}#icon-arrow`} />
              </svg>
            </NavLink>
          </div>
          <div className={styles.experienced_nannies}>
            <button className={styles.experienced_check__button}>
              <svg width="30px" height="30px">
                <use href={`${sprite}#icon-fe_check`} />
              </svg>
            </button>
            <div>
              <p className={styles.experienced_nannies__text}>
                Experienced nannies
              </p>
              <p className={styles.experienced_nannies__number}>15,000</p>
            </div>
          </div>
        </div>
        <div className={styles.photo}></div>
      </section>
      <FormWrapper
        isOpen={modalLogInIsOpen}
        isClose={() => {
          setModalLogInIsOpen(false);
        }}
        modalTitle={modalTitle}
        modalText={modalText}
      >
        <form>
          <ul className="form_ul_margin">
            <li>
              <input
                type="text"
                placeholder="Email"
                className="input_form__text"
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Password"
                className="input_form__text"
              />
            </li>
          </ul>

          <button type="submit" className="submit_button">
            Log In
          </button>
        </form>
      </FormWrapper>
      <Registration
        modalRegistrationIsOpen={modalRegistrationIsOpen}
        setModalRegistrationIsOpen={setModalRegistrationIsOpen}
        modalText={modalText}
        modalTitle={modalTitle}
      />
    </>
  );
};

export default HomePage;
