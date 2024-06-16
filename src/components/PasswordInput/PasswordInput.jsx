import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import styles from './PasswordInput.module.css';

export const PasswordInput = ({ data }) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <label className={styles.eys_off__label}>
      <button
        className={styles.eys_off__button}
        type="button"
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        <svg
          width="20px"
          height="20px"
          className={isHidden ? styles.eys_off__icon : styles.eys_on__icon}
        >
          <use href={`${sprite}#icon-eye-off`} />
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
