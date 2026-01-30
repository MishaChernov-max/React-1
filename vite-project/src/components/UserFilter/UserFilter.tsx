import { useState } from "react";

const initialUsers = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

export default function UserFilter() {
  const [query, setQuery] = useState("");
  const filteredUsers = initialUsers.filter((user) => user.includes(query));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div>
      <input value={query} onChange={handleChange} placeholder="Фильтр" />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
