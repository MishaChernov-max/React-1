import { useMemo, useState } from "react";
import "./App.css";
import { UserList, type User } from "./components/UserList/UserList";
import { allUsers } from "./constants";
import { AuthForm } from "./components/AuthForm/AuthForm";

interface UserWithAge extends User {
  age?: number;
}

const sortOptions = [
  { label: "По имени", value: "name" },
  { label: "По профессии", value: "profession" },
  { label: "По возрасту", value: "age" },
];

function App() {
  const [users, setUsers] = useState<UserWithAge[]>(allUsers);
  const [filter, setFilter] = useState<string>("default");

  const [selectedSort, setSelectedSort] = useState<string>("name");

  const professions = useMemo(() => {
    const uniqueProfessions = Array.from(
      new Set(users.map((u) => u.profession)),
    ).sort();
    return uniqueProfessions;
  }, [users]);

  const filteredUsers = useMemo(() => {
    if (filter === "default") return users;
    return users.filter(
      (user) => user.profession.toLowerCase() === filter.toLowerCase(),
    );
  }, [filter, users]);

  const handleSort = () => {
    const sorted = [...users].sort((a, b) => {
      const fieldA = a[selectedSort as keyof UserWithAge];
      const fieldB = b[selectedSort as keyof UserWithAge];

      if (fieldA === undefined) return 1;
      if (fieldB === undefined) return -1;

      if (typeof fieldA === "number" && typeof fieldB === "number") {
        return fieldA - fieldB;
      }

      return String(fieldA).localeCompare(String(fieldB));
    });

    setUsers(sorted);
  };

  const addUser = (name: string, profession: string) => {
    setUsers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        profession,
        age: Math.floor(Math.random() * 40) + 20,
      },
    ]);
  };

  return (
    <>
      <div className="user-bar">
        <AuthForm addUser={addUser} />
      </div>

      <div className="container">
        <div className="flex-container">
          <div className="filter-block">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="filter-select"
            >
              <option value="default">Все профессии</option>
              {professions.map((prof) => (
                <option key={prof} value={prof}>
                  {prof}
                </option>
              ))}
            </select>
            {filter !== "default" && (
              <button onClick={() => setFilter("default")}>
                Сбросить фильтр
              </button>
            )}
          </div>
          <div
            className="sort-block"
            style={{ marginLeft: "20px", display: "flex", gap: "10px" }}
          >
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <button onClick={handleSort}>Сортировать</button>
          </div>
        </div>

        {filteredUsers.length > 0 ? (
          <UserList users={filteredUsers} />
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Пользователи не найдены
          </p>
        )}
      </div>
    </>
  );
}

export default App;
