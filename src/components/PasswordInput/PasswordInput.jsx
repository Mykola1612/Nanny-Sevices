import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import styles from './PasswordInput.module.css';

export const PasswordInput = ({ data }) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <label className={styles.eys_label}>
      <button
        className={styles.eys_button}
        type="button"
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        <svg width="20px" height="20px" className={styles.eys_icon}>
          <use
            href={isHidden ? `${sprite}#icon-eye` : `${sprite}#icon-eye-on`}
          />
        </svg>
      </button>

      <input
        type={isHidden ? 'password' : 'text'}
        {...data}
        placeholder="Password"
        className="input_form__text"
      />
    </label>
  );
};
