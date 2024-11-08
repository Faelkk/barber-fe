import Link from "next/link";

export default function TitleSign() {
  return (
    <header className="flex justify-center md:justify-start w-[90%]">
      <Link href="/">
        <h1 className=" font-merriweather text-cold-gray-950 text-2xl font-bold">
          barberagender
        </h1>
      </Link>
    </header>
  );
}
