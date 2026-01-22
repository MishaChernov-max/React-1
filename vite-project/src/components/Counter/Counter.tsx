import { useState } from "react";

export function Counter() {
  const [value, setValue] = useState(0);
  const [loading, setIsLoading] = useState(false);
  return (
    <button
      style={{ margin: "0 auto", display: "block", marginTop: "20px" }}
      onClick={() => {
        setIsLoading(true);
        setTimeout(() => {
          setValue((prev) => prev + 1);
          setIsLoading(false);
        }, 3000);
      }}
      disabled={loading}
    >
      {value}
    </button>
  );
}
