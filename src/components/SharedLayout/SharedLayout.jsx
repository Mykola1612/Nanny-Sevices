import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

const SharedLayout = ({ setModalInfoIsOpen, setModalTitle, setmodalText }) => {
  return (
    <>
      <Header
        setModalInfoIsOpen={setModalInfoIsOpen}
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
