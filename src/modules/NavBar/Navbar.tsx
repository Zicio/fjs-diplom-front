import NavLink from "@/components/NavLink/NavLink";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={`standard-container ${styles.nav__list}`}>
        <NavLink href={"/hotels"} text={"Все гостиницы"} />
        <NavLink href={"/search_room"} text={"Поиск номера"} />
        <NavLink href={"/hotels/add"} text={"Добавить гостиницу"} />
        {typeof window !== "undefined" && localStorage.role === "admin" && (
          <NavLink href={"/admin/user"} text={"Контакты"} />
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
