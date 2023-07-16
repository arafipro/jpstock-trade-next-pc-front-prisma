"use client";

import { delTrade, getAllTrades } from "@/lib/tradeApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiDetail, BiEditAlt, BiTrash } from "react-icons/bi";

export default function Page() {
  const router = useRouter();
  const [trades, setMarkets] = useState<Trade[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const trades: Trade[] = await getAllTrades();
      setMarkets(trades);
    };
    fetchData();
  }, []);
  const handleDeleteTrade = async (id: number) => {
    await delTrade(id);
    router.push("/");
  };
  return (
    <main className="py-8 px-8">
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-gray-500">
          <thead className="bg-gray-50 text-sm">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                ID
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                証券コード
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                銘柄名
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                市場
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                証券会社
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                売買
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                株数
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                株価
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                売買額
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                取引日時
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                信用倍率
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                貸借倍率
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                メモ
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                チャート
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                PBR
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                PER
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100 text-sm">
            {trades.map((trade) => (
              <tr key={trade.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{trade.id}</td>
                <td className="px-6 py-4">{trade.code.code}</td>
                <td className="px-6 py-4">{trade.code.stockname}</td>
                <td className="px-6 py-4">{trade.code.market.market}</td>
                <td className="px-6 py-4">{trade.company_id.company}</td>
                <td className="px-6 py-4">{trade.buy_sell}</td>
                <td className="px-6 py-4">{trade.shares}株</td>
                <td className="px-6 py-4">{trade.price}円</td>
                <td className="px-6 py-4">{trade.shares * trade.price}円</td>
                <td className="px-6 py-4">{trade.trading_date}</td>
                <td className="px-6 py-4">{trade.credit_ratio}</td>
                <td className="px-6 py-4">{trade.lender_ratio}</td>
                <td className="px-6 py-4">{trade.memo}</td>
                <td className="px-6 py-4">{trade.chart_img}</td>
                <td className="px-6 py-4">{trade.per}</td>
                <td className="px-6 py-4">{trade.pbr}</td>
                <td className="px-6 py-4 flex gap-2">
                  <BiDetail size={24} color="blue" className="cursor-pointer" />
                  <BiEditAlt
                    size={24}
                    color="blue"
                    className="cursor-pointer"
                  />
                  <BiTrash
                    size={24}
                    color="red"
                    className="cursor-pointer"
                    onClick={() => handleDeleteTrade(trade.id)}
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
