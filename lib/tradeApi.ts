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

export async function getTrade(id: number) {
  const res = await fetch(`${BaseUrl}/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export async function addTrade(trade: Trade): Promise<Trade> {
  if (window.confirm("Are you sure to create this record?")) {
    const res = await fetch(`${BaseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: trade.code,
        buy_sell: trade.buy_sell,
        shares: trade.shares,
        price: trade.price,
        trading_date: trade.trading_date,
        credit_ratio: trade.credit_ratio,
        lender_ratio: trade.lender_ratio,
        memo: trade.memo,
        company_id: trade.company_id,
        chart_img: trade.chart_img,
        per: trade.per,
        pbr: trade.pbr,
      }),
    });
    const newTrade: Trade = await res.json();
    return newTrade;
  } else {
    return Promise.reject("User canceled the operation.");
  }
}

export async function updateTrade(trade: Trade): Promise<Trade> {
  if (window.confirm("Are you sure to update this record?")) {
		const res = await fetch(`${BaseUrl}/${trade.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: trade.code,
        buy_sell: trade.buy_sell,
        shares: trade.shares,
        price: trade.price,
        trading_date: trade.trading_date,
        credit_ratio: trade.credit_ratio,
        lender_ratio: trade.lender_ratio,
        memo: trade.memo,
        company_id: trade.company_id,
        chart_img: trade.chart_img,
        per: trade.per,
        pbr: trade.pbr,
      }),
		});
    const updateTrade: Trade = await res.json();
    return updateTrade;
  } else {
    return Promise.reject("User canceled the operation.");
  }
}

export async function delTrade(id: number): Promise<void> {
  if (window.confirm("Are you sure to delete this record?")) {
    const res = await fetch(`${BaseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletedTrade = await res.json();
    return deletedTrade;
  } else {
    return Promise.reject("User canceled the operation.");
  }
}
