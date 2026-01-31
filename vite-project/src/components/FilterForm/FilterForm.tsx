interface Props {
  minAge: number;
  setMinAge: (value: number) => void;
}

function FilterForm({ minAge, setMinAge }: Props) {
  return (
    <div>
      <label>
        Минимальный возраст:
        <input
          type="number"
          value={minAge}
          onChange={(e) => setMinAge(Number(e.target.value))}
        />
      </label>
    </div>
  );
}

export default FilterForm;
