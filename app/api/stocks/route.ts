import { NextResponse } from "next/server";

const DATA_SOURCE_URL = `${process.env.APP_URL}/stocks`;

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  const stocks: Stock[] = await res.json();

  return NextResponse.json(stocks);
}

export async function POST(request: Request) {
  const { code, stockname, market_id }: Partial<Stock> = await request.json();

  if (!code || !stockname || !market_id)
    return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      stockname,
      market_id,
    }),
  });

  const newStock: Stock = await res.json();

  return NextResponse.json(newStock);
}
