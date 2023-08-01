import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <main className={css.mainContaoner}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <ToastContainer />
      </main>
    </div>
  );
};

export default Layout;
