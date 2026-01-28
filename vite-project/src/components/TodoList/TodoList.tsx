import { Todo, type TodoData } from "../Todo/Todo";

interface Props {
  todo: TodoData[];
  onDelete: (id: string) => void;
  onDone: (id: string) => void;
  onRevertClick?: (id: string) => void;
  onSaveClick: (id: string, value: string) => void;
}

export function TodoList({
  todo,
  onDelete,
  onDone,
  onRevertClick,
  onSaveClick,
}: Props) {
  return (
    <ul
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {todo.map((todo) => (
        <Todo
          {...todo}
          key={todo.id}
          onDelete={onDelete}
          onClick={onDone}
          onRevertClick={onRevertClick}
          onSaveClick={onSaveClick}
        />
      ))}
    </ul>
  );
}
