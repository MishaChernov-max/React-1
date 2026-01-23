import { useState } from "react";

export function NameForm() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value.trim() !== "") {
            setShow(true);
            setMessage(value);
          }
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {show && (
          <label
            style={{
              display: "block",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Привет,{message}
          </label>
        )}
        <button
          style={{ display: "block", margin: "0 auto", marginTop: "20px" }}
          type="submit"
        >
          Отправить
        </button>
      </form>
      <p>Имя:{value}</p>
    </>
  );
}
