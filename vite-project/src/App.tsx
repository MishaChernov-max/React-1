import { v4 as uuidv4 } from "uuid";
import { useMemo, useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Field } from "./components/Field/Field";
import type { TodoData } from "./components/Todo/Todo";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState<TodoData[]>([]);
  const addTask = () => {
    if (value.trim() === "") return;
    setTasks((prev) => [...prev, { id: uuidv4(), done: false, text: value }]);
    setValue("");
  };
  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  const toggleStatus = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: true } : task)),
    );
  };
  const revertClick = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: false } : task)),
    );
  };
  const saveTask = (id: string, value: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text: value } : task)),
    );
  };
  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.done === true);
  }, [tasks]);
  const activeTasks = useMemo(() => {
    return tasks.filter((task) => task.done === false);
  }, [tasks]);
  return (
    <>
      <div style={{ margin: "0 auto", width: "200px" }}>
        <h1 style={{ textAlign: "center" }}>Todo List</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <Field value={value} onChange={setValue} />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTask();
            }}
          >
            <Button
              children="add"
              styles={{
                background: "green",
                color: "white",
                cursor: "pointer",
                border: 0,
              }}
              type="submit"
            />
          </form>
        </div>
        <TodoList
          todo={activeTasks}
          onDelete={removeTask}
          onDone={toggleStatus}
          onRevertClick={revertClick}
          onSaveClick={saveTask}
        />
        <h2>Completed Tasks</h2>
        <TodoList
          todo={completedTasks}
          onDelete={removeTask}
          onDone={toggleStatus}
          onRevertClick={revertClick}
          onSaveClick={saveTask}
        />
      </div>
    </>
  );
}

export default App;
