import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import SecondPage from 'pages/SecondPage/SecondPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import HomePage from 'pages/HomePage/HomePage';

const test = import.meta.env.VITE_API_TEST;

const App = () => {
  const [modalLogInIsOpen, setModalLogInIsOpen] = useState(false);
  const [modalRegistrationIsOpen, setModalRegistrationIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setmodalText] = useState('');

  useEffect(() => {
    const db = firebase.database();
    console.log(db);
  }, []);

  console.log(test);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SharedLayout
            setModalRegistrationIsOpen={setModalRegistrationIsOpen}
            setModalLogInIsOpen={setModalLogInIsOpen}
            setModalTitle={setModalTitle}
            setmodalText={setmodalText}
          />
        }
      >
        <Route
          path="/home"
          element={
            <HomePage
              modalLogInIsOpen={modalLogInIsOpen}
              modalRegistrationIsOpen={modalRegistrationIsOpen}
              modalTitle={modalTitle}
              modalText={modalText}
              setModalLogInIsOpen={setModalLogInIsOpen}
              setModalRegistrationIsOpen={setModalRegistrationIsOpen}
            />
          }
        />
        <Route path="/nannies" element={<SecondPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default App;
