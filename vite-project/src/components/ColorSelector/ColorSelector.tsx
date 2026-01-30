interface Props {
  value: string;
  setValue: (value: string) => void;
}

const options = ["Red", "Green", "Blue"];
export function ColorSelector({ value, setValue }: Props) {
  return (
    <select value={value} onChange={(e) => setValue(e.target.value)}>
      <option value="default" key="default" disabled hidden>
        Выбери цвет:
      </option>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
