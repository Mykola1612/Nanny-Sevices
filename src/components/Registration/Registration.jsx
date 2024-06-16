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
          <li className="item_position">
            <input
              type="text"
              {...register('Name', { required: 'This is required' })}
              placeholder="Name"
              className="input_form__text"
            />
            {/* <p >{errors.Name?.message}</p> */}
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
                    message: ' Min length is 6',
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
