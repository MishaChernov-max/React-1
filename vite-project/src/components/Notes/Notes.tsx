import { useId, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Note } from "../Note/Note";

export type NoteType = {
  id: string;
  text: string;
};

export function Notes() {
  const textId = useId();
  const [value, setValue] = useState("");
  const [notes, setNotes] = useState<NoteType[]>([]);
  const addTask = () => {
    if (value.trim() === "") return;
    setNotes((prev) => [...prev, { id: uuidv4(), text: value }]);
    setValue("");
  };
  const deleteTask = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };
  const onSave = (id: string, text: string) => {
    if (text.trim() === "") return;
    setNotes((prev) =>
      prev.map((note) => {
        if (note.id === id) {
          return { ...note, text: text };
        }
        return note;
      }),
    );
  };
  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <label
          style={{ display: "block", marginBottom: "20px" }}
          htmlFor={textId}
        >
          Введите текст:
        </label>
        <input
          type="text"
          id={textId}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          style={{
            padding: "15px",
            border: 0,
            display: "block",
            margin: "0 auto",
            marginTop: "20px",
            cursor: "pointer",
            borderRadius: "30px",
          }}
          type="submit"
        >
          Добавить
        </button>
      </form>
      <h1>Заметки</h1>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            onDelete={deleteTask}
            onSave={onSave}
          />
        ))}
      </ul>
    </div>
  );
}
