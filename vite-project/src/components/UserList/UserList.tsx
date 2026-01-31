interface Props {
  minAge: number;
}
const users = [
  { id: 1, name: "Алексей", age: 25 },
  { id: 2, name: "Мария", age: 19 },
  { id: 3, name: "Иван", age: 32 },
];

function UserList({ minAge }: Props) {
  const filteredUsers = users.filter((user) => user.age >= minAge);
  if (filteredUsers.length === 0) {
    return <p>Пользователей с таким возрастом {minAge} не существует</p>;
  }
  return (
    <ul>
      {filteredUsers.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age})
        </li>
      ))}
    </ul>
  );
}

export default UserList;
