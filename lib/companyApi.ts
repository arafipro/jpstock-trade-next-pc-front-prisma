const BaseUrl = "http://localhost:3000/api/companies";

export async function getAllCompanies() {
  const res = await fetch(`${BaseUrl}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}
