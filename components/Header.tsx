import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b fixed w-full h-12 top-0 left-0 text-xl flex items-center bg-white">
      <nav className="mx-auto">
        <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
          <li className="inline-block py-2 px-4 lg:-ml-2 text-gray-500 hover:text-black">
            <Link href={"/"}>TOP</Link>
          </li>
          <li className="inline-block py-2 px-4 lg:-ml-2 text-gray-500 hover:text-black">
            <Link href={"/market"}>市場一覧</Link>
          </li>
          <li className="inline-block py-2 px-4 lg:-ml-2 text-gray-500 hover:text-black">
            <Link href={"/company"}>証券会社一覧</Link>
          </li>
          <li className="inline-block py-2 px-4 lg:-ml-2 text-gray-500 hover:text-black">
            <Link href={"/stock"}>銘柄一覧</Link>
          </li>
          <li className="inline-block py-2 px-4 lg:-ml-2 text-gray-500 hover:text-black">
            <Link href={"/trade"}>取引一覧</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
