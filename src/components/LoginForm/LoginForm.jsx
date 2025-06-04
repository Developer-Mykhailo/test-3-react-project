import s from "./LoginForm.module.css";

const LoginForm = ({ onLogin }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;
    console.log(login.value, password.value);

    // Викликаємо пропс onLogin
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <div>
      <h3>Login form</h3>
      <form className={s.form} onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <input type="password" name="password" />
        <button type="submit" name="loginBtn">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
