import { LogIn } from '../../components/AuthComponents/LogIn/LogIn';
import { Registration } from '../../components/AuthComponents/Registration/Registration';

const SecondPage = ({
  modalTitle,
  modalText,
  modalRegistrationIsOpen,
  setModalRegistrationIsOpen,
  setModalLogInIsOpen,
  modalLogInIsOpen,
}) => {
  return (
    <>
      <LogIn
        modalLogInIsOpen={modalLogInIsOpen}
        setModalLogInIsOpen={setModalLogInIsOpen}
        modalText={modalText}
        modalTitle={modalTitle}
      />

      <Registration
        modalRegistrationIsOpen={modalRegistrationIsOpen}
        setModalRegistrationIsOpen={setModalRegistrationIsOpen}
        modalText={modalText}
        modalTitle={modalTitle}
      />
    </>
  );
};

export default SecondPage;
