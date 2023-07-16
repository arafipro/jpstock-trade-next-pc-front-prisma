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

export async function getMarket(id: number) {
  const res = await fetch(`${BaseUrl}/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export async function addMarket(market: Market): Promise<Market> {
  if (window.confirm("Are you sure to create this record?")) {
    const res = await fetch(`${BaseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        market_id: market.market_id,
        market: market.market,
      }),
    });
    const newMarket: Market = await res.json();
    return newMarket;
  } else {
    return Promise.reject("User canceled the operation.");
  }
}

export async function updateMarket(market: Market): Promise<Market> {
  if (window.confirm("Are you sure to update this record?")) {
    const res = await fetch(`${BaseUrl}/${market.market_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        market_id: market.market_id,
        market: market.market,
      }),
    });
    const updateMarket = await res.json();
    return updateMarket;
  } else {
    return Promise.reject("User canceled the operation.");
  }
}

export async function delMarket(id: number): Promise<void> {
  if (window.confirm("Are you sure to delete this record?")) {
    const res = await fetch(`${BaseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletedMarket = await res.json();
    return deletedMarket;
  } else {
    return Promise.reject("User canceled the operation.");
  }
}
