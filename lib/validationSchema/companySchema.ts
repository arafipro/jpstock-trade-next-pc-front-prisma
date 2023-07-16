import { z } from "zod";

export const companySchema = z.object({
  company_id: z
    .number({
      invalid_type_error: "正の整数を入力してください",
    })
    .positive("正の整数を入力してください"),
  company: z.string().nonempty("証券会社名を入力してください"),
});
