import "./UserList.css";
export interface User {
  id: number;
  name: string;
  profession: string;
}

interface Props {
  users: User[];
}

export function UserList({ users }: Props) {
  return (
    <ul>
      {users.map((user) => (
        <li className="user" key={user.id}>
          <div>name:{user.name}</div>
          <div>profession:{user.profession}</div>
        </li>
      ))}
    </ul>
  );
}
