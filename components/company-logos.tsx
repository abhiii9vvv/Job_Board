"use client"

const companies = [
  { name: "TCS", logo: "/images/logos/tcs.svg" },
  { name: "Infosys", logo: "/images/logos/infosys.svg" },
  { name: "Wipro", logo: "/images/logos/wipro.svg" },
  { name: "HCL", logo: "/images/logos/hcl.svg" },
  { name: "Tech Mahindra", logo: "/images/logos/tech-mahindra.svg" },
  { name: "Flipkart", logo: "/images/logos/flipkart.svg" },
  { name: "Zomato", logo: "/images/logos/zomato.svg" },
  { name: "Paytm", logo: "/images/logos/paytm.svg" },
]

export function CompanyLogos() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-600 text-sm font-medium mb-8">
          Trusted by leading companies across India
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center justify-center">
              <div className="w-24 h-12 relative opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-full h-full bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">{company.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
