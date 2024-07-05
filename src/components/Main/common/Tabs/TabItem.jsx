import Link from "next/link";

export default function TabItem({ title, param }) {
  return (
    <div>
      <Link href={`?genre=${param}`}>{title}</Link>
    </div>
  );
}
