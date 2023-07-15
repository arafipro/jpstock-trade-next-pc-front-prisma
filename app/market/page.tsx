"use client";

import { delMarket, getAllMarkets } from "@/lib/marketApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiDetail, BiEditAlt, BiTrash } from "react-icons/bi";

export default function Page() {
  const router = useRouter();
  const [markets, setMarkets] = useState<Market[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const markets: Market[] = await getAllMarkets();
      setMarkets(markets);
    };
    fetchData();
  }, []);
  const handleDeleteMarket = async (id: number) => {
    await delMarket(id);
    router.push("/");
  };
  return (
    <main className="py-8 px-8">
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                ID
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                市場
              </th>
              <th>
                <Link href={"/market/create"}>市場登録</Link>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {markets.map((market) => (
              <tr key={market.market_id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{market.market_id}</td>
                <td className="px-6 py-4">{market.market}</td>
                <td className="px-6 py-4 flex gap-2">
                  <BiDetail size={24} color="blue" className="cursor-pointer" />
                  <BiEditAlt
                    size={24}
                    color="blue"
                    className="cursor-pointer"
                    onClick={async () =>
                      await router.push(`/market/${market.market_id!}/update`)
                    }
                  />
                  <BiTrash
                    size={24}
                    color="red"
                    className="cursor-pointer"
                    onClick={() => handleDeleteMarket(market.market_id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
