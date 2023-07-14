import { NextResponse } from "next/server";

const DATA_SOURCE_URL = `${process.env.APP_URL}/markets`;

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  const markets: Market[] = await res.json();

  return NextResponse.json(markets);
}

export async function POST(request: Request) {
  const { market_id, market }: Partial<Market> = await request.json();

  if (!market_id || !market) return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
		body: JSON.stringify({
			market_id,
      market,
    }),
  });

  const newMarket: Market = await res.json();

  return NextResponse.json(newMarket);
}
