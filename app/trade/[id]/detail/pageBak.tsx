import { getTrade } from "@/lib/tradeApi";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
  const trade: Trade = await getTrade(params.id);

  return (
    <div className="flex overflow-hidden rounded-lg mx-12 mt-16 border">
      <div className="w-1/2">
        {/* 証券コード 銘柄名	市場 */}
        <dl className="flex border-b pt-4 bg-gray-50">
          <div className="w-1/3">
            <dt className="text-gray-900 pb-4 pl-4">証券コード</dt>
            <dd className="bg-white text-gray-600 pl-4 py-4">
              {trade.code.code}
            </dd>
          </div>
          <div className="w-1/3">
            <dt className="text-gray-900 pb-4">銘柄名</dt>
            <dd className="bg-white text-gray-600 py-4">
              {trade.code.stockname}
            </dd>
          </div>
          <div className="w-1/3">
            <dt className="text-gray-900 pb-4">市場</dt>
            <dd className="bg-white text-gray-600 py-4">
              {trade.code.market.market}
            </dd>
          </div>
        </dl>
        {/* 株数 株価 売買額 */}
        <dl className="flex border-b pt-4 bg-gray-50">
          <div className="w-1/3">
            <dt className="text-gray-900 pb-4 pl-4">証券会社</dt>
            <dd className="bg-white mr-6 text-gray-600 pl-4 py-4">
              {trade.company_id.company}
            </dd>
          </div>
          <div className="w-1/3">
            <dt className="text-gray-900 pb-4">売買</dt>
            <dd className="bg-white text-gray-600 py-4">{trade.buy_sell}</dd>
          </div>
          <div className="w-1/3">
            <dt className="text-gray-900 pb-4">取引日</dt>
            <dd className="bg-white text-gray-600 py-4">
              {trade.trading_date}
            </dd>
          </div>
        </dl>
        <dl className="pt-4 bg-gray-50">
          <dt className="text-gray-900 pb-4 pl-4">メモ</dt>
          <dd className="bg-white text-gray-600 p-4">{trade.memo}</dd>
        </dl>
      </div>
      <div className="w-1/2">
        {/* 信用倍率 貸借倍率 PBR	PER */}
        <dl className="flex border-b pt-4 bg-gray-50">
          <div className="w-1/4">
            <dt className="text-gray-900 pb-4 pl-4">信用倍率</dt>
            <dd className="bg-white text-gray-600 py-4 pl-4">
              {trade.credit_ratio}倍
            </dd>
          </div>
          <div className="w-1/4">
            <dt className="text-gray-900 pb-4">貸借倍率</dt>
            <dd className="bg-white text-gray-600 py-4">
              {trade.lender_ratio}倍
            </dd>
          </div>
          <div className="w-1/4">
            <dt className="text-gray-900 pb-4">PER</dt>
            <dd className="bg-white text-gray-600 py-4">{trade.per}</dd>
          </div>
          <div className="w-1/4">
            <dt className="text-gray-900 pb-4">PBR</dt>
            <dd className="bg-white text-gray-600 py-4">{trade.pbr}</dd>
          </div>
        </dl>
        {/* 証券会社 売買 取引日 */}
        <dl className="flex border-b pt-4 bg-gray-50">
          <div className="w-1/3">
            <dt className="text-gray-900 pb-4 pl-4">株数</dt>
            <dd className="bg-white text-gray-600 pl-4 py-4">
              {trade.shares}株
            </dd>
          </div>

          <div className="w-1/3">
            <dt className="text-gray-900 pb-4">株価</dt>
            <dd className="bg-white  text-gray-600 py-4">{trade.price}円</dd>
          </div>
          <div className="w-1/3">
            <dt className="text-gray-900 pb-4">売買額</dt>
            <dd className="bg-white text-gray-600 py-4">
              {trade.shares * trade.price}円
            </dd>
          </div>
        </dl>
        <dl className="border-b pt-4 bg-gray-50">
          <dt className="text-gray-900 pb-4 pl-4">チャート</dt>
          <dd className="bg-white text-gray-600">
            <Image
              src={trade.chart_img}
              width={1000}
              height={1000}
              alt="Picture of the author"
            />
          </dd>
        </dl>
      </div>
    </div>
  );
}
