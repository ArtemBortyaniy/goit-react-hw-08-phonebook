import { logOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <b>Welcome, {user.name}</b>
      <Button
        href="#"
        variant="outlined"
        sx={{ my: 1, mx: 1.5 }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
