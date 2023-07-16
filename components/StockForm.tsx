import { getAllMarkets } from "@/lib/marketApi";
import { getStock } from "@/lib/stockApi";
import { stockSchema } from "@/lib/validationSchema/stockSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function StockForm(props: StockProps) {
  const { code, onSubmit, onCreate } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Stock>({
    mode: "onChange",
    resolver: zodResolver(stockSchema),
    defaultValues: onCreate
      ? { stockname: "" }
      : async () => await getStock(code!),
  });
  const [markets, setMarkets] = useState<Market[]>([]);
  useEffect(() => {
    const fetchMarkets = async () => {
      const data: Market[] = await getAllMarkets();
      setMarkets(data);
    };
    fetchMarkets();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          証券コード
        </label>
        <input
          type="number"
          id="code"
          {...register("code", { valueAsNumber: true })}
          min={1301}
          max={9997}
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
        <p className="text-red-500 text-sm pb-2">{errors.code?.message}</p>
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          銘柄名
        </label>
        <input
          type="text"
          id="stockname"
          {...register("stockname")}
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
        <p className="text-red-500 text-sm pb-2">{errors.stockname?.message}</p>
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          市場
        </label>
        <select
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          id="market_id"
          {...register("market_id", { valueAsNumber: true })}
        >
          <option>選択して下さい</option>
          {markets.map((market) => (
            <option key={market.market_id} value={market.market_id}>
              {market.market_id}:{market.market}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        >
          登録
        </button>
      </form>
    </div>
  );
}
