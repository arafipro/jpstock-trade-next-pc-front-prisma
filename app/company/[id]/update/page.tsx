"use client";

import CompanyForm from "@/components/CompanyForm";
import { updateCompany } from "@/lib/companyApi";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: number } }) {
  const router = useRouter();
  const onSubmit = async (data: Company) => {
    await updateCompany({
      company_id: data.company_id,
      company: data.company,
    });
    router.push("/company");
  };
  return (
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 className="font-bold text-center text-2xl mb-5">証券会社編集</h1>
      <CompanyForm
        company_id={params.id}
        onSubmit={onSubmit}
        onCreate={false}
      />
    </div>
  );
}
