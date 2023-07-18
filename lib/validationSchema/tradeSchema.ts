import { z } from "zod";

export const tradeSchema = z.object({
  code: z.number({
    invalid_type_error: "銘柄を選択してください",
  }),
  company_id: z.number({
    invalid_type_error: "証券会社を選択してください",
  }),
  buy_sell: z
    .string({
      invalid_type_error: "売買を選択してください",
    })
    .regex(/[買売]/, { message: "売買を選択してください" }),
  shares: z
    .number({ invalid_type_error: "株数を入力してください" })
    .int()
    .nonnegative({ message: "shares" }),
  price: z
    .number({ invalid_type_error: "株価を入力してください" })
    .nonnegative({ message: "shares" }),
  trading_date: z.coerce.string().nonempty({ message: "日付を指定して下さい" }),
  credit_ratio: z.number({ invalid_type_error: "信用倍率を入力してください" }),
  lender_ratio: z.number({ invalid_type_error: "貸借倍率を入力してください" }),
  memo: z.string().nonempty({ message: "メモを入力して下さい" }),
  chart_img: z.string().nonempty({ message: "チャートを入力して下さい" }),
  per: z.number({ invalid_type_error: "PERを入力してください" }),
  pbr: z.number({ invalid_type_error: "PERを入力してください" }),
});
