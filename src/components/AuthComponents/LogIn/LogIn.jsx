import FormWrapper from '../../ModalWrapper/ModalWrapper';
import { useForm } from 'react-hook-form';
import { PasswordInput } from '../../PasswordInput/PasswordInput';
import { useNavigate } from 'react-router-dom';
import { signInThunk } from '../../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';

export const LogIn = ({
  modalTitle,
  modalLogInIsOpen,
  setModalLogInIsOpen,
  modalText,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (formData) => {
    dispatch(signInThunk(formData));
    navigate('/nannies');
    document.body.classList.remove('overflow-hidden');
    setModalLogInIsOpen(false);
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
