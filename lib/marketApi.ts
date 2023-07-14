const BaseUrl = "http://localhost:3000/api/markets";

export async function getAllMarkets() {
  const res = await fetch(`${BaseUrl}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}
