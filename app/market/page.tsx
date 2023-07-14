"use client";

import { getAllMarkets } from "@/lib/marketApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [markets, setMarkets] = useState<Market[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const markets: Market[] = await getAllMarkets();
      setMarkets(markets);
    };
    fetchData();
  }, []);
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
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {markets.map((market) => (
              <tr key={market.market_id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{market.market_id}</td>
                <td className="px-6 py-4">{market.market}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
