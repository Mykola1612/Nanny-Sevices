import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

const SharedLayout = ({
  setModalLogInIsOpen,
  setModalRegistrationIsOpen,
  setModalTitle,
  setmodalText,
}) => {
  return (
    <>
      <Header
        setModalRegistrationIsOpen={setModalRegistrationIsOpen}
        setModalLogInIsOpen={setModalLogInIsOpen}
        setModalTitle={setModalTitle}
        setmodalText={setmodalText}
      />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default SharedLayout;
