"use client";

import MarketForm from "@/components/MarketForm";
import { addMarket } from "@/lib/marketApi";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const onSubmit = async (data: Market) => {
    await addMarket({
      market_id: data.market_id,
      market: data.market,
    });
    router.push("/market");
  };
  return (
    <div className="px-8 py-16 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 className="font-bold text-center text-2xl mb-5">市場登録</h1>
      <MarketForm onSubmit={onSubmit} onCreate={true} />
    </div>
  );
}
