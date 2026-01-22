interface Props {
  age: number;
}

export function AccessMessage({ age }: Props) {
  return (
    <div style={{ textAlign: "center" }}>
      {age < 18 ? (
        <h4 style={{ color: "red" }}>Доступ запрещен</h4>
      ) : (
        <h4 style={{ color: "green" }}>Добро пожаловать</h4>
      )}
    </div>
  );
}
