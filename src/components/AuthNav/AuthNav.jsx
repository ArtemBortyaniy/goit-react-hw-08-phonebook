import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" style={linkStyles}>
        Register
      </NavLink>
      <NavLink to="/login" style={linkStyles}>
        Log in
      </NavLink>
    </div>
  );
};

const linkStyles = {
  color: 'black',
  fontSize: '20px',
  textDecoration: 'none',
  marginRight: '30px',
};

export default AuthNav;
