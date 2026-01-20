import "./userProfile.css";
export type User = {
  name: string;
  email: string;
  avatarUrl: string;
  bio: string;
};
interface Props {
  user: User;
}

export function UserProfile({ user }: Props) {
  return (
    <div className="user">
      <img src={user.avatarUrl} className="user-avatar" alt="user-avatar" />
      <h2>{user.name}</h2>
      <h4>{user.email}</h4>
    </div>
  );
}
