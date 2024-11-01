import FormWrapper from '../../ModalWrapper/ModalWrapper';
import { useForm } from 'react-hook-form';
import { PasswordInput } from '../../PasswordInput/PasswordInput';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Context } from '../../../main';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Registration = ({
  modalTitle,
  modalRegistrationIsOpen,
  setModalRegistrationIsOpen,
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
    // теперь функция принимает данные формы
    const { Email, Password } = data;
    console.log(Email);
    createUserWithEmailAndPassword(auth, Email, Password)
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
      isOpen={modalRegistrationIsOpen}
      isClose={() => {
        setModalRegistrationIsOpen(false);
        reset();
      }}
      modalTitle={modalTitle}
      modalText={modalText}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="form_ul_margin">
          <li className="item_position">
            <input
              type="text"
              {...register('Name', { required: 'This is required' })}
              placeholder="Name"
              className="input_form__text"
            />
          </li>
          <li className="item_position">
            <input
              type="email"
              {...register('Email', { required: 'This is required' })}
              placeholder="Email"
              className="input_form__text"
            />
            {/* <p className="pkksadsadc"> {errors.Email?.message}</p> */}
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
            {/* <p className="pkksadsadc">{errors.Password?.message}</p> */}
          </li>
        </ul>
        <button type="submit" className="submit_button">
          Sign Up
        </button>
      </form>
    </FormWrapper>
  );
};
