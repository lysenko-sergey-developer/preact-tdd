import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (event: h.JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value.trim();

    if(value !== username) {
      setUsername(value);
    }
  }

  const handleChangePassword = (event: h.JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value.trim();

    if(value !== password) {
      setPassword(value);
    }
  }

  return (
	  <div class={style.wrapper}>
	    <h1>Login</h1>
      <form class={style.form}>
        <label for="username">Username</label>
        <input
          class={style.input}
          data-test-id="username"
          id="username"
          value={username}
          onInput={handleChangeUsername} />
        <label for="username">Password</label>
        <input
          class={style.input}
          data-test-id="password"
          value={password}
          type="password"
          onInput={handleChangePassword} />
        <button class={style.submitButton} disabled={!username || !password}>Login</button>
      </form>
	  </div>
)};

export default Login;
