import { UserProfile, type User } from "../UserProfile/UserProfile";

interface Props {
  users: User[];
}

export function UserProfileList({ users }: Props) {
  return (
    <>
      <h2>Users List</h2>
      <ul>
        {users.map((user, index) => (
          <UserProfile user={user} key={index} />
        ))}
      </ul>
    </>
  );
}
