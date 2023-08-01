import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={css.authLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.authLink}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
