import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />

      {/* <UserMenu /> */}
      <AuthNav />
    </header>
  );
};

export default AppBar;
