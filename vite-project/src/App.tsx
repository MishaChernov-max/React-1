import "./App.css";
import { List } from "./components/List/List";
import { type User } from "./components/UserProfile/UserProfile";
import { UserProfileList } from "./components/UserProfileList/UserProfileList";

const userProfiles: User[] = [
  {
    avatarUrl: "/vite.svg",
    bio: "Info",
    email: "misha.chernov.06@bk.ru",
    name: "Misha",
  },
  {
    avatarUrl: "/vite.svg",
    bio: "Info",
    email: "grisha.chernov.06@bk.ru",
    name: "Grisha",
  },
  {
    avatarUrl: "/vite.svg",
    bio: "Info",
    email: "andrew.chernov.06@bk.ru",
    name: "Andrew",
  },
];

function App() {
  return (
    <>
      <List />
      <UserProfileList users={userProfiles} />
    </>
  );
}

export default App;
