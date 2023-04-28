import NavLink from "@/components/NavLink/NavLink";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <NavLink href={"/hotels"} text={"Все гостиницы"} />
        <NavLink href={"/search_room"} text={"Поиск номера"} />
        <NavLink href={"/hotels/add"} text={"Добавить гостиницу"} />
      </ul>
    </nav>
  );
};

export default Navbar;
