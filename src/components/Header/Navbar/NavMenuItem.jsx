import Link from "next/link";

export default function NavMenuItem({ title, address }) {
  return (
    <Link
      href={address}
      className="py-1 min-w-[60px] font-bold hover:text-primary transition-colors"
    >
      {title}
    </Link>
  );
}
