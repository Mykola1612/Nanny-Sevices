import FormWrapper from '../../ModalWrapper/ModalWrapper';
import { useForm } from 'react-hook-form';
import { PasswordInput } from '../../PasswordInput/PasswordInput';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Context } from '../../../main';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const LogIn = ({
  modalTitle,
  modalLogInIsOpen,
  setModalLogInIsOpen,
  modalText,
}) => {
  const navigate = useNavigate();
  const { auth } = useContext(Context);
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { Email, Password } = data;
    console.log(Email);
    signInWithEmailAndPassword(auth, Email, Password)
      .then((data) => {
        console.log(data);
        console.log(data.user.accessToken);
        localStorage.setItem('token', data.user.accessToken);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate('/nannies');
    reset();
  };

  return (
    <FormWrapper
      isOpen={modalLogInIsOpen}
      isClose={() => {
        setModalLogInIsOpen(false);
        reset();
      }}
      modalTitle={modalTitle}
      modalText={modalText}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="form_ul_margin">
          <li className="item_position">
            <input
              type="email"
              {...register('Email', { required: 'This is required' })}
              placeholder="Email"
              className="input_form__text"
            />
          </li>
          <li className="item_position">
            <PasswordInput
              data={{
                ...register('Password', {
                  required: 'This is required',
                  minLength: {
                    value: 6,
                    message: 'Min length is 6',
                  },
                }),
              }}
            />
          </li>
        </ul>
        <button type="submit" className="submit_button">
          Log In
        </button>
      </form>
    </FormWrapper>
  );
};
