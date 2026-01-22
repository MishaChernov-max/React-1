import "../../App.css";
import "./Header.css";
import moon from "../../assets/moon.svg";
export function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-bar">
          <h2>Where in the world?</h2>
          <div className="header-mode">
            <img src={moon} alt="moon" />
            <span>Dark Mode</span>
          </div>
        </div>
      </div>
    </header>
  );
}
