import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import NanniesPage from 'pages/NanniesPage/NanniesPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import HomePage from 'pages/HomePage/HomePage';
import PrivateRoute from './routes/PrivateRoute';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';

const test = import.meta.env.VITE_API_TEST;

const App = () => {
  const [modalLogInIsOpen, setModalLogInIsOpen] = useState(false);
  const [modalRegistrationIsOpen, setModalRegistrationIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setmodalText] = useState('');

  useEffect(() => {
    const db = firebase.database();
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
        <Route
          path="/nannies"
          element={
            <NanniesPage
              modalLogInIsOpen={modalLogInIsOpen}
              modalRegistrationIsOpen={modalRegistrationIsOpen}
              modalTitle={modalTitle}
              modalText={modalText}
              setModalLogInIsOpen={setModalLogInIsOpen}
              setModalRegistrationIsOpen={setModalRegistrationIsOpen}
              setModalTitle={setModalTitle}
              setmodalText={setmodalText}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <FavoritesPage />{' '}
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/home" />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default App;
