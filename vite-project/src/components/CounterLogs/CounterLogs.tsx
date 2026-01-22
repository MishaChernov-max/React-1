import { useEffect, useState } from "react";

export function CounterLogs() {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  useEffect(() => {
    console.log(logs);
  }, [logs]);
  return (
    <button
      style={{ margin: "0 auto", display: "block" }}
      onClick={() => {
        const nextCount = count + 1;
        setCount(nextCount);
        setLogs((prev) => [...prev, `Новое значение:${nextCount}`]);
      }}
    >
      Массив: {count}
    </button>
  );
}
