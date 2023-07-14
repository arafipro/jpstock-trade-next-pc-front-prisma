const BaseUrl = "http://localhost:3000/api/trades";

export async function getAllTrades() {
  const res = await fetch(`${BaseUrl}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}
