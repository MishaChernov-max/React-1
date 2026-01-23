import { useState } from "react";

export function FavoriteColorForm() {
  const [value, setValue] = useState("");
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "300px",
        margin: "0 auto",
        marginTop: "200px",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <select
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          <option value="default" disabled hidden>
            Выберите ваш любимый цвет
          </option>
          <option value="Красный">Красный</option>
          <option value="Синий">Синий</option>
          <option value="Зеленый">Зелёный</option>
        </select>
        <p>Ваш любимый цвет:{value}</p>
      </form>
    </div>
  );
}
