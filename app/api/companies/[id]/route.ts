import { NextResponse } from "next/server";

const DATA_SOURCE_URL = `${process.env.APP_URL}/companies`;

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const res = await fetch(`${DATA_SOURCE_URL}/${params.id}`);

  const company: Company = await res.json();

  if (!company.company_id)
    return NextResponse.json({ message: "company not found" });

  return NextResponse.json(company);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { company_id, company }: Partial<Company> = await request.json();

  if (!company_id || !company)
    return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(`${DATA_SOURCE_URL}/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      company_id,
      company,
    }),
  });

  const updatedCompany: Company = await res.json();

  return NextResponse.json(updatedCompany);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  if (!params.id)
    return NextResponse.json({ message: "Company company_id required" });

  await fetch(`${DATA_SOURCE_URL}/${params.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return NextResponse.json({ message: `Company ${params.id} deleted` });
}
