import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item strong">
          <Link to="/">Top10Movies</Link>
        </li>
        <li className="nav-item">
          <Link to="/watchlist">
            <Button classList="nav-btn" text="Watchlist" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
