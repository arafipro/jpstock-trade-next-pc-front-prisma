// Stock
type Stock = {
  code: number;
  stockname: string;
  market_id: number;
  market: {
    market_id: number;
    market: string;
  };
};

// Trade
type Trade = {
  id: number;
  code: {
    code: number;
    stockname: string;
    market: {
      market_id: number;
      market: string;
    };
  };
  buy_sell: string;
  shares: number;
  price: number;
  trading_date: string;
  credit_ratio: number;
  lender_ratio: number;
  memo: string;
  company_id: {
    company_id: number;
    company: string;
  };
  chart_img: string;
  per: number;
  pbr: number;
};
