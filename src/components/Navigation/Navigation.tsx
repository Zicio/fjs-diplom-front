import getCurrentUserId from "@/utils/getCurrentUserId";
import getCurrentUserRole, { Roles } from "@/utils/getCurrentUserRole";
import NavLink from "@/components/NavLink/NavLink";

interface INavItem {
  href: string;
  text: string;
}

const CommonNavItems: INavItem[] = [
  { href: "/hotels/rooms", text: "Поиск номера" },
];

const ClientNavItems: INavItem[] = [
  { href: `/client/${getCurrentUserId()}`, text: "Мои брони" },
];

const AdminNavItems: INavItem[] = [
  ...ClientNavItems,
  { href: "/admin/hotels/", text: "Все гостиницы" },
  { href: "/admin/hotels/new", text: "Добавить гостиницу" },
  { href: "/admin/users/", text: "Все пользователи" },
  { href: "/admin/users/new", text: "Добавить пользователя" },
];

const ManagerNavItems: INavItem[] = [
  ...ClientNavItems,
  { href: "/manager/users", text: "Все пользователи" },
];

const accordance = {
  [Roles.client]: ClientNavItems,
  [Roles.manager]: ManagerNavItems,
  [Roles.admin]: AdminNavItems,
};

const Navigation = () => {
  const role: Roles | undefined = getCurrentUserRole();
  if (role) {
    return (
      <>
        {accordance[role].map((item) => (
          <NavLink key={item.href} href={item.href} text={item.text} />
        ))}
      </>
    );
  }
  return (
    <>
      {CommonNavItems.map((item) => (
        <NavLink key={item.href} href={item.href} text={item.text} />
      ))}
    </>
  );
};

export default Navigation;
