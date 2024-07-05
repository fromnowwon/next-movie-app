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
    <nav className="flex flex-col max-w-[980px] mx-auto">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1>NEXT MOVIE</h1>
        </Link>
        <DarkModeSwitch />
      </div>
      <div className="flex gap-4">
        {navMenuData.map((menu) => (
          <NavMenuItem
            key={menu.id}
            title={menu.title}
            address={menu.address}
          />
        ))}
      </div>
    </nav>
  );
}
