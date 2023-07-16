"use client";

import { delStock, getAllStocks } from "@/lib/stockApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiDetail, BiEditAlt, BiTrash } from "react-icons/bi";

export default function Page() {
  const router = useRouter();
  const [stocks, setStocks] = useState<Stock[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const stocks: Stock[] = await getAllStocks();
      setStocks(stocks);
    };
    fetchData();
  }, []);
  const handleDeleteStock = async (id: number) => {
    await delStock(id);
    router.push("/");
  };
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
              <th>
                <Link href={"/stock/create"}>銘柄登録</Link>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {stocks.map((stock) => (
              <tr key={stock.code} className="hover:bg-gray-50">
                <td className="px-6 py-4">{stock.code}</td>
                <td className="px-6 py-4">{stock.stockname}</td>
                <td className="px-6 py-4">{stock.market!.market}</td>
                <td className="px-6 py-4 flex gap-2">
                  <BiDetail size={24} color="blue" className="cursor-pointer" />
                  <BiEditAlt
                    size={24}
                    color="blue"
                    className="cursor-pointer"
                    onClick={async () =>
                      await router.push(`/stock/${stock.code!}/update`)
                    }
                  />
                  <BiTrash
                    size={24}
                    color="red"
                    className="cursor-pointer"
                    onClick={() => handleDeleteStock(stock.code)}
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
