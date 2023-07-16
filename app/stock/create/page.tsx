"use client";

import StockForm from "@/components/StockForm";
import { addStock } from "@/lib/stockApi";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const onSubmit = async (data: Stock) => {
    console.log(data);
    await addStock({
      code: data.code,
      stockname: data.stockname,
      market_id: data.market_id,
    });
    router.push("/stock");
  };
  return (
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 className="font-bold text-center text-2xl mb-5">銘柄登録</h1>
      <StockForm onSubmit={onSubmit} onCreate={true} />
    </div>
  );
}
