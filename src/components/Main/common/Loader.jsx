import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-[306px]">
      <Image src="/spinner.svg" alt="Loading..." width={100} height={100} />
    </div>
  );
}
