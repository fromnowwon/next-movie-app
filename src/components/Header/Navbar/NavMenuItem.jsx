import Link from "next/link";

export default function NavMenuItem({ title, address }) {
  return <Link href={address}>{title}</Link>;
}
