"use client";

import TradeForm from "@/components/TradeForm";
import { updateTrade } from "@/lib/tradeApi";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: number } }) {
  const router = useRouter();
  const onSubmit = async (data: Trade) => {
    console.log(data);
    await updateTrade({
      id: params.id,
      code: data.code,
      buy_sell: data.buy_sell,
      shares: data.shares,
      price: data.price,
      trading_date: data.trading_date,
      credit_ratio: data.credit_ratio,
      lender_ratio: data.lender_ratio,
      memo: data.memo,
      company_id: data.company_id,
      chart_img: data.chart_img,
      per: data.per,
      pbr: data.pbr,
    });
    router.push("/trade");
  };
  return (
    <div className="px-8 py-16 max-w-screen-lg xs:p-0 mx-auto">
      <h1 className="font-bold text-center text-2xl mb-5">取引編集</h1>
      <TradeForm id={params.id} onSubmit={onSubmit} onCreate={false} />
    </div>
  );
}
