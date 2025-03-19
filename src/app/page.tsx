import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>care-log</h1>
      <p>初めてのTOPページです！</p>
      <Image
        src="/images/care-log.png"
        alt="care-log"
        width={200}
        height={200}
      />
    </div>
  );
}
