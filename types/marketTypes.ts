type Market = {
  market_id: number;
  market: string;
};

type MarketProps = {
  market_id?: number;
  onSubmit: (data: Market) => void;
  onCreate?: boolean;
};
