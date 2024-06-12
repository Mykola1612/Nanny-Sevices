import sprite from '../../assets/sprite.svg';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';
import FormWrapper from '../../components/FormWrapper/FormWrapper';

const HomePage = ({
  modalTitle,
  modalText,
  modalInfoIsOpen,
  setModalInfoIsOpen,
}) => {
  console.log('modalInfoIsOpen: ', modalInfoIsOpen);
  return (
    <div className={styles.box}>
      <div className={styles.box_blue}>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>
            Make Life Easier for the Family:
          </h1>
          <p className={styles.hero_text}>
            Find Babysitters Online for All Occasions
          </p>
          <NavLink to="/nannies" className={styles.hero_started__button}>
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
      <FormWrapper
        isOpen={modalInfoIsOpen}
        isClose={() => {
          setModalInfoIsOpen(false);
        }}
        modalTitle={modalTitle}
        modalText={modalText}
      >
        <form>
          <input type="text" placeholder="ghfhddsfzsrsdtrstr" color="red" />
        </form>
      </FormWrapper>
    </div>
  );
};

export default HomePage;
