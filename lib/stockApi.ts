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

export async function getStock(id: number) {
  const res = await fetch(`${BaseUrl}/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export async function addStock(stock: Stock): Promise<Stock> {
  if (window.confirm("Are you sure to create this record?")) {
    const res = await fetch(`${BaseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: stock.code,
        stockname: stock.stockname,
        market_id: stock.market_id,
      }),
    });
    const newStock: Stock = await res.json();
    return newStock;
  } else {
    return Promise.reject("User canceled the operation.");
  }
}

export async function updateStock(stock: Stock): Promise<Stock> {
  if (window.confirm("Are you sure to update this record?")) {
    const res = await fetch(`${BaseUrl}/${stock.code}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: stock.code,
        stockname: stock.stockname,
        market_id: stock.market_id,
      }),
    });
    const updateStock = await res.json();
    return updateStock;
  } else {
    return Promise.reject("User canceled the operation.");
  }
}

export async function delStock(id: number): Promise<void> {
  if (window.confirm("Are you sure to delete this record?")) {
    const res = await fetch(`${BaseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletedStock = await res.json();
    return deletedStock;
  } else {
    return Promise.reject("User canceled the operation.");
  }
}
