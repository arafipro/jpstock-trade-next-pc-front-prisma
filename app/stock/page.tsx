"use client";

import { getAllStocks } from "@/lib/stockApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const stocks: Stock[] = await getAllStocks();
      setStocks(stocks);
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
                証券コード
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                銘柄名
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                市場
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {stocks.map((stock) => (
              <tr key={stock.code} className="hover:bg-gray-50">
                <td className="px-6 py-4">{stock.code}</td>
                <td className="px-6 py-4">{stock.stockname}</td>
                <td className="px-6 py-4">{stock.market!.market}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
