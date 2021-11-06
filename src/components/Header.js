import Button from "./Button";

const Header = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item strong">
          <a href="/">Top10Movies</a>
        </li>
        <li className="nav-item">
          <Button classList="nav-btn" text="Watchlist" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
