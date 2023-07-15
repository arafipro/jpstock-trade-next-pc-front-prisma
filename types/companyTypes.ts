type Company = {
  company_id: number;
  company: string;
};

type CompanyProps = {
  company_id?: number;
  onSubmit: (data: Company) => void;
  onCreate?: boolean;
};
