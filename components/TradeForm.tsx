import { getAllCompanies } from "@/lib/companyApi";
import { getAllStocks } from "@/lib/stockApi";
import { getTrade } from "@/lib/tradeApi";
import { tradeSchema } from "@/lib/validationSchema/tradeSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function TradeForm(props: TradeProps) {
  const { id, onSubmit, onCreate } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Trade>({
    mode: "onChange",
    resolver: zodResolver(tradeSchema),
    defaultValues: onCreate ? {} : async () => await getTrade(id!),
  });
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  useEffect(() => {
    const fetchStocks = async () => {
      const data: Stock[] = await getAllStocks();
      setStocks(data);
    };
    fetchStocks();
  }, []);
  useEffect(() => {
    const fetchCompanies = async () => {
      const data: Company[] = await getAllCompanies();
      setCompanies(data);
    };
    fetchCompanies();
  }, []);
  return (
    <div className="w-4/5 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="w-full px-2">
            <label className="font-semibold text-sm text-gray-600 block w-full pb-2">
              銘柄
            </label>
            <select
              className="border rounded-lg px-3 py-2 text-sm w-full mb-2"
              id="code"
              {...register("code", { valueAsNumber: true })}
            >
              <option>選択して下さい</option>
              {stocks.map((stock) => (
                <option key={stock.code} value={stock.code}>
                  {stock.code}:{stock.stockname}
                </option>
              ))}
            </select>
            <p className="text-red-500 text-sm block w-full">
              {errors.code?.message}
            </p>
          </div>
          <div className="w-full px-2">
            <label className="font-semibold text-sm text-gray-600 block w-full pb-2">
              証券会社
            </label>
            <select
              className="border rounded-lg px-3 py-2 text-sm w-full mb-2"
              id="company_id"
              {...register("company_id", { valueAsNumber: true })}
            >
              <option>選択して下さい</option>
              {companies.map((company) => (
                <option key={company.company_id} value={company.company_id}>
                  {company.company_id}:{company.company}
                </option>
              ))}
            </select>
            <p className="text-red-500 text-sm pb-2 w-full">
              {errors.company_id?.message}
            </p>
          </div>
          <div className="w-full px-2">
            <label className="font-semibold text-sm text-gray-600 block w-full pb-2">
              売買
            </label>
            <select
              className="border rounded-lg px-3 py-2 text-sm w-full mb-2"
              id="buy_sell"
              {...register("buy_sell")}
            >
              <option>選択して下さい</option>
              <option value="買">買</option>
              <option value="売">売</option>
            </select>
            <p className="text-red-500 text-sm pb-2 w-full">
              {errors.buy_sell?.message}
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-full px-2">
            <label className="font-semibold text-sm text-gray-600 block w-full pb-2">
              取引日
            </label>
            <input
              type="date"
              id="trading_date"
              {...register("trading_date")}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <p className="text-red-500 text-sm pb-2">
              {errors.trading_date?.message}
            </p>
          </div>
          <div className="w-full px-2">
            <label className="font-semibold text-sm text-gray-600 block w-full pb-2">
              株数
            </label>
            <input
              type="number"
              id="shares"
              min={1}
              step={1}
              {...register("shares", { valueAsNumber: true })}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <p className="text-red-500 text-sm pb-2">
              {errors.shares?.message}
            </p>
          </div>
          <div className="w-full px-2">
            <label className="font-semibold text-sm text-gray-600 block w-full pb-2">
              株価
            </label>
            <input
              type="number"
              id="price"
              min={0.1}
              step={0.1}
              {...register("price", { valueAsNumber: true })}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <p className="text-red-500 text-sm pb-2">{errors.price?.message}</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-full px-2">
            <label className="font-semibold text-sm text-gray-600 block w-full pb-2">
              信用倍率
            </label>
            <input
              type="number"
              id="credit_ratio"
              step={0.01}
              {...register("credit_ratio", { valueAsNumber: true })}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <p className="text-red-500 text-sm pb-2">
              {errors.credit_ratio?.message}
            </p>
          </div>
          <div className="w-full px-2">
            <label className="font-semibold text-sm text-gray-600 block w-full pb-2">
              貸借倍率
            </label>
            <input
              type="number"
              id="lender_ratio"
              step={0.01}
              {...register("lender_ratio", { valueAsNumber: true })}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <p className="text-red-500 text-sm pb-2">
              {errors.lender_ratio?.message}
            </p>
          </div>
          <div className="w-full px-2">
            <label className="font-semibold text-sm text-gray-600 block w-full pb-2">
              PER
            </label>
            <input
              type="number"
              id="per"
              step={0.01}
              {...register("per", { valueAsNumber: true })}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <p className="text-red-500 text-sm pb-2">{errors.per?.message}</p>
          </div>
          <div className="w-full px-2">
            <label className="font-semibold text-sm text-gray-600 block w-full pb-2">
              PBR
            </label>
            <input
              type="number"
              id="pbr"
              step={0.01}
              {...register("pbr", { valueAsNumber: true })}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <p className="text-red-500 text-sm pb-2">{errors.pbr?.message}</p>
          </div>
        </div>
        <div className="w-full px-2">
          <label className="font-semibold text-sm text-gray-600 block w-full pb-2">
            チャート
          </label>
          <input
            type="text"
            id="chart_img"
            {...register("chart_img")}
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <p className="text-red-500 text-sm pb-2">
            {errors.chart_img?.message}
          </p>
          <label className="font-semibold text-sm text-gray-600 block w-full pb-2">
            メモ
          </label>
          <textarea
            id="memo"
            {...register("memo")}
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <p className="text-red-500 text-sm pb-2">{errors.memo?.message}</p>
        </div>
        <div className="w-full px-2">
          <button
            type="submit"
            className="mt-8 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            登録
          </button>
        </div>
      </form>
    </div>
  );
}
