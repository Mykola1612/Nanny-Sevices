import FormWrapper from '../../ModalWrapper/ModalWrapper';
import { useForm } from 'react-hook-form';
import { PasswordInput } from '../../PasswordInput/PasswordInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpThunk } from '../../../redux/auth/authOperations';

export const Registration = ({
  modalTitle,
  modalRegistrationIsOpen,
  setModalRegistrationIsOpen,
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

  const onSubmit = (data) => {
    const { Email, Password } = data;
    const userData = {
      Email,
      Password,
    };
    console.log(Email);
    dispatch(signUpThunk(userData));
    navigate('/nannies');
    document.body.classList.remove('overflow-hidden');
    setModalRegistrationIsOpen(false);
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
