import NavLink from "@/components/NavLink/NavLink";
import styles from "./NavBar.module.css";
import getRole, { Roles } from "@/utils/getRole";

interface INavItem {
  href: string;
  text: string;
}

const CommonNavItems: INavItem[] = [
  { href: "/hotels", text: "Все гостиницы" },
  { href: "/search_room", text: "Поиск номера" },
  { href: "/hotels/add", text: "Добавить гостиницу" },
];

const EmployeeNavItems: INavItem[] = [
  ...CommonNavItems,
  { href: "/admin/user", text: "Контакты" },
];

const Navbar = () => {
  const role: Roles | undefined = getRole();
  console.log(role);
  return (
    <nav>
      <ul className={`standard-container ${styles.nav__list}`}>
        {role !== "client"
          ? EmployeeNavItems.map((item) => (
              <NavLink key={item.href} href={item.href} text={item.text} />
            ))
          : CommonNavItems.map((item) => (
              <NavLink key={item.href} href={item.href} text={item.text} />
            ))}
      </ul>
    </nav>
  );
};

export default Navbar;
