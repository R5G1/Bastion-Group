import { Link, NavLink } from 'react-router-dom';
import styles from '../Navbar/index.module.scss';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink className={styles.navbarLink} to="/">
        home
      </NavLink>
      <NavLink className={styles.navbarLink} to="/main">
        main
      </NavLink>
      <NavLink className={styles.navbarLink} to="/settings">
        settings
      </NavLink>
    </div>
  );
};

export default Navbar;
