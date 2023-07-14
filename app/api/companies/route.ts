import { NextResponse } from "next/server";

const DATA_SOURCE_URL = `${process.env.APP_URL}/companies`;

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  const companies: Company[] = await res.json();

  return NextResponse.json(companies);
}

export async function POST(request: Request) {
  const { company_id, company }: Partial<Company> = await request.json();

  if (!company_id || !company) return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
		body: JSON.stringify({
			company_id,
      company,
    }),
  });

  const newCompany: Company = await res.json();

  return NextResponse.json(newCompany);
}
