import { NavLink } from "react-router-dom";

// styles && images
import styles from "./Sidebar.module.css";
import Dashboard from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar-content"]}>
        <div className={styles.user}>
          {/* avatar & username here later */}
          <p>Hi user</p>
        </div>
        <nav className={styles.links}>
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={Dashboard} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
