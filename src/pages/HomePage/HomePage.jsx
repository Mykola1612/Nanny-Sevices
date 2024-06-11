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
    <>
      <div className="home_container">
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
            <p>Experienced nannies</p>
            <p>15,000</p>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default HomePage;
