import styles from "./NavBar.module.scss";
import Navigation from "@/components/Navigation/Navigation";

const Navbar = () => {
  return (
    <nav>
      <ul className={`standard-container ${styles.nav__list}`}>
        <Navigation />
      </ul>
    </nav>
  );
};

export default Navbar;
