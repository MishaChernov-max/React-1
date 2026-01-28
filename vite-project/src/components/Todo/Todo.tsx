import "./Todo.css";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";

export type TodoData = {
  id: string;
  text: string;
  done: boolean;
};

type TodoType = TodoData & {
  onClick: (id: string) => void;
  onDelete: (id: string) => void;
  onRevertClick?: (id: string) => void;
  onSaveClick: (id: string, value: string) => void;
};

export function Todo({
  id,
  text,
  done,
  onDelete,
  onClick,
  onRevertClick,
  onSaveClick,
}: TodoType) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState<string>(text);
  useEffect(() => {
    setValue(text);
  }, [text]);
  const renderActions = () => {
    if (isEdit) {
      return (
        <Button
          styles={{
            background: "blue",
            color: "white",
            border: 0,
            cursor: "pointer",
          }}
          onClick={() => {
            onSaveClick(id, value);
            setIsEdit(false);
          }}
        >
          Save
        </Button>
      );
    }
    if (!done) {
      return (
        <div>
          <Button
            styles={{
              background: "red",
              color: "white",
              border: 0,
              cursor: "pointer",
            }}
            onClick={() => onDelete(id)}
          >
            Delete
          </Button>
          <Button
            styles={{
              background: "blue",
              color: "white",
              border: 0,
              cursor: "pointer",
              marginLeft: "10px",
            }}
            onClick={() => onClick(id)}
          >
            Done
          </Button>
        </div>
      );
    }
    return (
      <Button
        styles={{
          background: "red",
          color: "white",
          border: 0,
          cursor: "pointer",
        }}
        onClick={() => onRevertClick?.(id)}
      >
        revert
      </Button>
    );
  };
  return (
    <div className="todo">
      <span
        className="todo-text"
        onContextMenu={(e) => {
          e.preventDefault();
          setIsEdit(true);
        }}
      >
        {isEdit ? (
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          text
        )}
      </span>
      <div className="button-container">{renderActions()}</div>
    </div>
  );
}
