import { NextResponse } from "next/server";

const DATA_SOURCE_URL = `${process.env.APP_URL}/stocks`;

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const res = await fetch(`${DATA_SOURCE_URL}/${params.id}`);

  const stock: Stock = await res.json();

  if (!stock.code) return NextResponse.json({ message: "stock not found" });

  return NextResponse.json(stock);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { code, stockname, market_id }: Partial<Stock> = await request.json();

  if (!code || !stockname || !market_id)
    return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(`${DATA_SOURCE_URL}/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      stockname,
      market_id,
    }),
  });

  const updatedStock: Stock = await res.json();

  return NextResponse.json(updatedStock);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  if (!params.id)
    return NextResponse.json({ message: "Stock market_id required" });

  await fetch(`${DATA_SOURCE_URL}/${params.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return NextResponse.json({ message: `Stock ${params.id} deleted` });
}
