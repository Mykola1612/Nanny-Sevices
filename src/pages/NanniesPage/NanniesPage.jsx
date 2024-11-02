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
  let limitToFirst = 3;

  const oon = () => {
    fetch(
      `https://nanny-sevices-default-rtdb.europe-west1.firebasedatabase.app/teachers.json?orderBy="$key"&limitToFirst=${limitToFirst}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        return response.json(); // если ожидаем JSON-ответ
      })
      .then((data) => {
        console.log(data); // данные с сервера
      })
      .catch((error) => {
        console.error('Ошибка запроса:', error);
      });
  };
  oon();

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
      <ul>
        <li></li>
      </ul>
      <button>more</button>
    </>
  );
};

export default SecondPage;
