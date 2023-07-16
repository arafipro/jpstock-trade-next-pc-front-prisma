"use client";

import StockForm from "@/components/StockForm";
import { updateStock } from "@/lib/stockApi";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: number } }) {
  const router = useRouter();
  const onSubmit = async (data: Stock) => {
    console.log(data);
    await updateStock({
      code: data.code,
      stockname: data.stockname,
      market_id: data.market_id,
    });
    router.push("/stock");
  };
  return (
    <div className="px-8 py-16 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 className="font-bold text-center text-2xl mb-5">銘柄編集</h1>
      <StockForm code={params.id} onSubmit={onSubmit} onCreate={false} />
    </div>
  );
}
