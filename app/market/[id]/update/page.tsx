"use client";

import MarketForm from "@/components/MarketForm";
import { updateMarket } from "@/lib/marketApi";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: number } }) {
  const router = useRouter();
  const onSubmit = async (data: Market) => {
    await updateMarket({
      market_id: data.market_id,
      market: data.market,
    });
    router.push("/market");
  };
  return (
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 className="font-bold text-center text-2xl mb-5">市場編集</h1>
      <MarketForm
        market_id={params.id}
        onSubmit={onSubmit}
        onCreate={false}
      />
    </div>
  );
}
