import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
