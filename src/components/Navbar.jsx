import { Link, NavLink } from "react-router-dom";

// styles && images
import styles from "./Navbar.module.css";
import Temple from "../assets/temple.svg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.logo}>
          <img src={Temple} alt="dojo logo" />
          <span>The Dojo</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
}
