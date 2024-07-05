import Link from "next/link";
import NavMenuItem from "./NavMenuItem";
import DarkModeSwitch from "./DarkModeSwitch";

const navMenuData = [
  {
    id: 1,
    title: "영화",
    address: "/movies",
  },
  {
    id: 2,
    title: "극장",
    address: "/theaters",
  },
  {
    id: 3,
    title: "예매",
    address: "/ticket",
  },
  {
    id: 4,
    title: "스토어",
    address: "/store",
  },
  {
    id: 5,
    title: "이벤트",
    address: "/event",
  },
  {
    id: 6,
    title: "혜택",
    address: "/discount",
  },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex justify-between">
        <Link href="/">
          <h1>NEXT MOVIE</h1>
        </Link>
        <div className="flex">
          {navMenuData.map((menu) => (
            <NavMenuItem
              key={menu.id}
              title={menu.title}
              address={menu.address}
            />
          ))}
        </div>
      </div>
      <div>
        <DarkModeSwitch />
      </div>
    </nav>
  );
}
