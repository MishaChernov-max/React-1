import { useState } from "react";

interface Props {
  id: string;
  text: string;
  onDelete: (id: string) => void;
  onSave: (id: string, text: string) => void;
}
export function Note({ id, text, onDelete, onSave }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(text);
  const [checked, setChecked] = useState(false);
  return (
    <li
      style={{
        marginTop: "20px",
        background: "gray",
        borderRadius: "10px",
        minWidth: "200px",
        padding: "15px",
      }}
    >
      {isEdit ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();

            onSave(id, value);
            setIsEdit(false);
          }}
        >
          <input
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            style={{ visibility: isEdit ? "visible" : "hidden" }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setIsEdit(false);
              }
            }}
          />
        </form>
      ) : (
        <span>{text}</span>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "15px",
          marginTop: "15px",
        }}
      >
        <span style={{ textDecoration: checked ? "line-through" : "none " }}>
          Done:
        </span>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "5px",
        }}
      >
        <button onClick={() => onDelete(id)}>Удалить</button>
        {isEdit ? (
          <button
            onClick={() => {
              onSave(id, value);
              setIsEdit(false);
            }}
          >
            Ok
          </button>
        ) : (
          <button onClick={() => setIsEdit(true)}>Редактировать</button>
        )}
      </div>
    </li>
  );
}
