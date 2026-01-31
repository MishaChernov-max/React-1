import { useState } from "react";
import FilterForm from "./components/FilterForm/FilterForm";
import UserList from "./components/UserList/UserList";

function App() {
  const [minAge, setMinAge] = useState(0);
  return (
    <div>
      <h1>Пользователи</h1>
      <FilterForm minAge={minAge} setMinAge={setMinAge} />
      <UserList minAge={minAge} />
    </div>
  );
}

export default App;
