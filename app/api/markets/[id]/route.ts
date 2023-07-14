import { NextResponse } from "next/server";

const DATA_SOURCE_URL = `${process.env.APP_URL}/markets`;

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const res = await fetch(`${DATA_SOURCE_URL}/${params.id}`);

  const market: Market = await res.json();

  if (!market.market_id)
    return NextResponse.json({ message: "market not found" });

  return NextResponse.json(market);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { market_id, market }: Partial<Market> = await request.json();

  if (!market_id || !market)
    return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(`${DATA_SOURCE_URL}/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      market_id,
      market,
    }),
  });

  const updatedMarket: Market = await res.json();

  return NextResponse.json(updatedMarket);
}

export async function DELETE(request: Request, params: { id: number }) {
  if (!params.id)
    return NextResponse.json({ message: "Market market_id required" });

  await fetch(`${DATA_SOURCE_URL}/${params.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return NextResponse.json({ message: `Market ${params.id} deleted` });
}
