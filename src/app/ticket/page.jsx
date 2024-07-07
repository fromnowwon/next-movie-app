import Image from "next/image";

export default function ticketPage() {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl pb-5 border-b-2 border-b-black dark:border-b-white">
        예매하기
      </h2>
      <Image
        src="/dummy_ticket-page.png"
        width={1000}
        height={500}
        alt="ticket"
        className="mt-6 pb-10"
      />
    </div>
  );
}
