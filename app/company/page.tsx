"use client";

import { delCompany, getAllCompanies } from "@/lib/companyApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiDetail, BiEditAlt, BiTrash } from "react-icons/bi";

export default function Page() {
  const router = useRouter();
  const [companies, setCompanies] = useState<Company[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const companies: Company[] = await getAllCompanies();
      setCompanies(companies);
    };
    fetchData();
  }, []);
  const handleDeleteCompany = async (id: number) => {
    await delCompany(id);
    router.push("/");
  };
  return (
    <main className="py-8 px-8">
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                ID
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                証券会社名
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {companies.map((company) => (
              <tr key={company.company_id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{company.company_id}</td>
                <td className="px-6 py-4">{company.company}</td>
                <td className="px-6 py-4 flex gap-2">
                  <BiDetail size={24} color="blue" className="cursor-pointer" />
                  <BiEditAlt
                    size={24}
                    color="blue"
                    className="cursor-pointer"
                  />
                  <BiTrash
                    size={24}
                    color="red"
                    className="cursor-pointer"
                    onClick={() => handleDeleteCompany(company.company_id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
