import { NextResponse } from "next/server";

const DATA_SOURCE_URL = `${process.env.APP_URL}/trades`;

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const res = await fetch(`${DATA_SOURCE_URL}/${params.id}`);

  const trade: Trade = await res.json();

  if (!trade.id) return NextResponse.json({ message: "trade not found" });

  return NextResponse.json(trade);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
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

  const res = await fetch(`${DATA_SOURCE_URL}/${params.id}`, {
    method: "PUT",
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

  const updatedTrade: Trade = await res.json();

  return NextResponse.json(updatedTrade);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  if (!params.id) return NextResponse.json({ message: "Trade id required" });

  await fetch(`${DATA_SOURCE_URL}/${params.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return NextResponse.json({ message: `Trade ${params.id} deleted` });
}
