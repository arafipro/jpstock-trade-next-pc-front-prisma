// Stock
type Stock = {
  code: number;
  stockname: string;
	market_id: number;
  market?: {
    market_id: number;
    market: string;
  };
};

type StockProps = {
  code?: number;
  onSubmit: (data: Stock) => void;
  onCreate?: boolean;
};
