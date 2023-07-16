import { getCompany } from "@/lib/companyApi";
import { companySchema } from "@/lib/validationSchema/companySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function CompanyForm(props: CompanyProps) {
  const { company_id, onSubmit, onCreate } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Company>({
    mode: "onChange",
    resolver: zodResolver(companySchema),
    defaultValues: onCreate
      ? { company_id: 1, company: "" }
      : async () => getCompany(company_id!),
  });
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={onCreate ? "" : "hidden"}>
          <label className="font-semibold text-sm text-gray-600 pb-1 block">
            ID
          </label>
          <input
            type="number"
            id="company_id"
            min={1}
            {...register("company_id", { valueAsNumber: true })}
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <p className="text-red-500 text-sm pb-2">
            {errors.company_id?.message}
          </p>
        </div>
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          証券会社名
        </label>
        <input
          type="text"
          id="company"
          {...register("company")}
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
        <p className="text-red-500 text-sm pb-2">{errors.company?.message}</p>
        <button
          type="submit"
          className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        >
          登録
        </button>
      </form>
    </div>
  );
}
