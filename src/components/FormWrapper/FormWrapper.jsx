import sprite from '../../assets/sprite.svg';
import styles from './FormWrapper.module.css';

const FormWrapper = ({ isOpen, isClose, modalTitle, modalText, children }) => {
  return (
    <>
      {isOpen === true && (
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <div className={styles.modal_content}>
              <button
                className={styles.close_button}
                onClick={() => {
                  isClose();
                  document.body.classList.remove('overflow-hidden');
                }}
              >
                <svg className={styles.close_svg}>
                  <use href={`${sprite}#icon-cross`} />
                </svg>
              </button>
              <h2 className={styles.modal_title}>{modalTitle}</h2>
              <p className={styles.modal_text}>{modalText}</p>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormWrapper;
