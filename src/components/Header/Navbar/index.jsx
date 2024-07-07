import Link from "next/link";
import NavMenuItem from "./NavMenuItem";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchBox from "../SearchBox";

const navMenuData = [
  {
    id: 1,
    title: "영화",
    address: "/movies",
  },
  {
    id: 2,
    title: "예매",
    address: "/ticket",
  },
];

export default function Navbar() {
  return (
    <nav className="flex flex-col w-full">
      <div className="flex justify-between items-center container mx-auto">
        <Link href="/">
          <h1 className="text-primary dark:text-primary-dark font-bold text-4xl">
            NEXT MOVIE
          </h1>
        </Link>
        <DarkModeSwitch />
      </div>
      <div className="w-full border-b-2 border-b-primary border-t-2 border-t-slate-100 mt-4">
        <div className="flex justify-between items-center container mx-auto">
          <div className="flex gap-4 py-3">
            {navMenuData.map((menu) => (
              <NavMenuItem
                key={menu.id}
                title={menu.title}
                address={menu.address}
              />
            ))}
          </div>
          <div>
            <SearchBox />
          </div>
        </div>
      </div>
    </nav>
  );
}
