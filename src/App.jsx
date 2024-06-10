import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import SecondPage from 'pages/SecondPage/SecondPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import HomePage from 'pages/HomePage/HomePage';

const test = import.meta.env.VITE_API_TEST;

const App = () => {
  const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setmodalText] =useState("")
  console.log(modalInfoIsOpen);

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
            setModalInfoIsOpen={setModalInfoIsOpen}
            setModalTitle={setModalTitle}
            setmodalText={setmodalText}
          />
        }
      >
        <Route
          path="/home"
          element={
            <HomePage
              modalInfoIsOpen={modalInfoIsOpen}
              modalTitle={modalTitle}
              modalText={modalText}
              setModalInfoIsOpen={setModalInfoIsOpen}
            />
          }
        />
        <Route path="/nannies" element={<SecondPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
export default App;
