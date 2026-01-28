interface Props {
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

export function Field({ label, value, onChange, ...props }: Props) {
  return (
    <div className="mb-4">
      <label>
        <span>{label}</span>
        <input
          value={value}
          {...props}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
