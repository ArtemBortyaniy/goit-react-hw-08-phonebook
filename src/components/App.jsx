import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Contacts from 'pages/Contacts/Contacts';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

// const Layout = lazy(() => import('./Layout/Layout'));
// const Home = lazy(() => import('../pages/Home/Home'));
// const Register = lazy(() => import('../pages/Register/Register'));
// const Login = lazy(() => import('../pages/Login/Login'));
// const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo={'/contacts'}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<Login />} redirectTo={'/contacts'} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo={'/login'} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
