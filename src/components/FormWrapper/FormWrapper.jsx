import sprite from '../../assets/sprite.svg';
import styles from './FormWrapper.module.css';

const FormWrapper = ({ isOpen, isClose, modalTitle, modalText, children }) => {
  return (
    <>
      {isOpen === true && (
        <div className={styles.modal_wrapper}>
          <div className={styles.modal}>
            <button className={styles.close_button} onClick={() => isClose()}>
              <svg className={styles.close}>
                <use href={`${sprite}#icon-cross`} />
              </svg>
            </button>
            <h2 className={styles.modal_title}>{modalTitle}</h2>
            <p className={styles.modal_text}>{modalText}</p>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default FormWrapper;
