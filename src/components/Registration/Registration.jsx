import FormWrapper from '../ModalWrapper/ModalWrapper';
import { useForm } from 'react-hook-form';
import { PasswordInput } from '../PasswordInput/PasswordInput';

export const Registration = ({
  modalTitle,
  modalRegistrationIsOpen,
  setModalRegistrationIsOpen,
  modalText,
}) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  return (
    <FormWrapper
      isOpen={modalRegistrationIsOpen}
      isClose={() => {
        setModalRegistrationIsOpen(false);
      }}
      modalTitle={modalTitle}
      modalText={modalText}
    >
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <ul className="form_ul_margin">
          <li>
            <input
              type="text"
              {...register('Name', { required: 'This is required' })}
              placeholder="Name"
              className="input_form__text"
            />
            <p>{errors.Name?.message}</p>
          </li>
          <li>
            {' '}
            <input
              type="email"
              {...register('Email', { required: 'This is required' })}
              placeholder="Email"
              className="input_form__text"
            />
            <p>{errors.Email?.message}</p>
          </li>
          <li>
            <PasswordInput
              data={{
                ...register('Password', {
                  required: 'This is required',
                  minLength: {
                    value: 6,
                    message: ' Min length is 6',
                  },
                }),
              }}
            />
            <p>{errors.Password?.message}</p>
          </li>
        </ul>

        <button type="submit" className="submit_button">
          Sign Up
        </button>
      </form>
    </FormWrapper>
  );
};
