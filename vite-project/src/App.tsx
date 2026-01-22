import "./App.css";
import { AccessMessage } from "./components/AccessMessage/AccessMessage";
import { Greeting } from "./components/Greeting/Greeting";

function App() {
  return (
    <>
      <AccessMessage age={18} />
      <Greeting />
    </>
  );
}

export default App;
