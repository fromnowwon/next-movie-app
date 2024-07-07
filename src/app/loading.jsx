import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src="/spinner.svg" alt="Loading..." width={100} height={100} />
    </div>
  );
}
