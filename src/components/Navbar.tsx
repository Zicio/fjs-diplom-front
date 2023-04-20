import NavLink from "@/components/NavLink";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 rounded-md">
      <ul className="list-['▸'] p-3">
        <NavLink href={"/hotels"} text={"Все гостиницы"} />
        <NavLink href={"/search_room"} text={"Поиск номера"} />
        <NavLink href={"/hotels/add"} text={"Добавить гостиницу"} />
      </ul>
    </nav>
  );
};

export default Navbar;
