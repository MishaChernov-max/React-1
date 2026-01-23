import { useId, useState } from "react";

export function LoginForm() {
  const loginId = useId();
  const passwordId = useId();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (login.trim() !== "" && password.trim() !== "") {
          setMessage("Добро пожаловать," + login + "!");
          setLogin("");
          setPassword("");
        } else {
          setMessage("Пожалуйста, заполните все поля");
        }
      }}
    >
      <label htmlFor={loginId}>Логин:</label>
      <input
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <label htmlFor={passwordId}>Пароль:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Отправить</button>
      <p>{message}</p>
    </form>
  );
}
