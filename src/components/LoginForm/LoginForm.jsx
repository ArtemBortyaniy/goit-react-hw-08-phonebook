import css from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <form className={css.form} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
