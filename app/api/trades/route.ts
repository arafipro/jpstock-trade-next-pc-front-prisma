import { NextResponse } from "next/server";

const DATA_SOURCE_URL = `${process.env.APP_URL}/trades`;

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  const trades: Trade[] = await res.json();

  return NextResponse.json(trades);
}

export async function POST(request: Request) {
  const {
    code,
    buy_sell,
    shares,
    price,
    trading_date,
    credit_ratio,
    lender_ratio,
    memo,
    company_id,
    chart_img,
    per,
    pbr,
  }: Partial<Trade> = await request.json();

  if (
    !code ||
    !buy_sell ||
    !shares ||
    !price ||
    !trading_date ||
    !credit_ratio ||
    !lender_ratio ||
    !memo ||
    !company_id ||
    !chart_img ||
    !per ||
    !pbr
  )
    return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      buy_sell,
      shares,
      price,
      trading_date,
      credit_ratio,
      lender_ratio,
      memo,
      company_id,
      chart_img,
      per,
      pbr,
    }),
  });

  const newTrade: Trade = await res.json();

  return NextResponse.json(newTrade);
}
