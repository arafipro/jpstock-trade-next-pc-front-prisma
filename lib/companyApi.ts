const BaseUrl = "http://localhost:3000/api/companies";

export async function getAllCompanies() {
  const res = await fetch(`${BaseUrl}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export async function getCompany(id: number) {
  const res = await fetch(`${BaseUrl}/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export async function addCompany(company: Company): Promise<Company> {
  if (window.confirm("Are you sure to create this record?")) {
    const res = await fetch(`${BaseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company_id: company.company_id,
        company: company.company,
      }),
    });
    const newCompany: Company = await res.json();
    return newCompany;
  } else {
    return Promise.reject("User canceled the operation.");
  }
}

export async function updateCompany(company: Company): Promise<Company> {
  if (window.confirm("Are you sure to create this record?")) {
    const res = await fetch(`${BaseUrl}/${company.company_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company_id: company.company_id,
        company: company.company,
      }),
    });
    const updateCompany = await res.json();
    return updateCompany;
  } else {
    return Promise.reject("User canceled the operation.");
  }
}

export async function delCompany(id: number): Promise<void> {
  if (window.confirm("Are you sure to delete this record?")) {
    const res = await fetch(`${BaseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletedCompany = await res.json();
    return deletedCompany;
  } else {
    return Promise.reject("User canceled the operation.");
  }
}
