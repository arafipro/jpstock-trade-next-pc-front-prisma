const BaseUrl = "http://localhost:3000/api/stocks";

export async function getAllStocks() {
  const res = await fetch(`${BaseUrl}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}
