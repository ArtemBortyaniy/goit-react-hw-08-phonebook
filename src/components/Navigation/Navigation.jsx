import { NavLink } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import AuthNav from 'components/AuthNav/AuthNav';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Phonebook
          </Typography>
          <nav>
            <NavLink to="/" style={linkStyles}>
              Home
            </NavLink>
            <NavLink to="/contacts" style={linkStyles}>
              Contacts
            </NavLink>
          </nav>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </>
  );
};

const linkStyles = {
  color: 'black',
  fontSize: '30px',
  textDecoration: 'none',
  marginRight: '30px',
};

export default Navigation;
