import { z } from "zod";

export const marketCreateSchema = z.object({
  market_id: z
    .number({
      invalid_type_error: "正の整数を入力してください",
    })
    .positive("正の整数を入力してください"),
  market: z.string().nonempty("市場名を入力してください"),
});

export const marketUpdateSchema = z.object({
  market_id: z
    .number({
      invalid_type_error: "正の整数を入力してください",
    })
    .positive("正の整数を入力してください"),
  market: z.string().nonempty("市場名を入力してください"),
});
