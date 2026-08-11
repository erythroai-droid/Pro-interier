import { Metadata } from "next";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Installation Prices | Ceiling Pro_interier Studio",
  description: "Transparent stretch ceiling installation prices in Moscow and Moscow Region.",
};

const priceList = [
  { service: "Matte / Glossy / Satin PVC ceiling (white)", unit: "m²", price: "from $280" },
  { service: "Descor Fabric Stretch Ceiling (Germany)", unit: "m²", price: "from $960" },
  { service: "Clipso Fabric Stretch Ceiling (France)", unit: "m²", price: "from $1,200" },
  { service: "Multi-level transition structure", unit: "lin. m", price: "from $1,850" },
  { service: "EuroKraab shadow profile gap", unit: "lin. m", price: "from $680" },
  { service: "Floating ceiling profile with diffuser", unit: "lin. m", price: "from $950" },
  { service: "Light line profile installation", unit: "lin. m", price: "from $1,950" },
  { service: "Hidden curtain niche (PK-5 / timber)", unit: "lin. m", price: "from $1,100" },
  { service: "Spotlight installation platform + wiring", unit: "pcs.", price: "from $400" },
  { service: "Chandelier mounting platform", unit: "pcs.", price: "from $600" },
  { service: "Ceiling soundproofing layer", unit: "m²", price: "from $1,400" },
];

export default function PricesPage() {
  return (
    <main>
      <div className="block_07">
        <img
          src="/img/e0b0a3f5291c6d76f2e48e99bb5d0495.jpg"
          alt="Prices Ceiling PRO Interior Studio"
        />
      </div>

      <section className="block_01">
        <div className="container">
          <div className="bradcrumbs">
            Home » Prices
          </div>

          <div className="bottom_30">
            <h3 className="inner_header">Stretch Ceiling Prices</h3>
          </div>

          <div className="inner_content">
            <Sidebar />

            <div className="page_content">
              <p className="bottom_30" style={{ textAlign: "justify" }}>
                We believe in transparent pricing with no hidden costs. Our estimator provides a full breakdown during the free on-site measurement.
              </p>

              <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "30px" }}>
                <thead>
                  <tr style={{ background: "#222", color: "#fff", textAlign: "left" }}>
                    <th style={{ padding: "12px 16px" }}>Service / Material</th>
                    <th style={{ padding: "12px 16px", width: "120px" }}>Unit</th>
                    <th style={{ padding: "12px 16px", width: "160px" }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {priceList.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: "1px solid #ddd", background: idx % 2 === 0 ? "#fafafa" : "#fff" }}>
                      <td style={{ padding: "12px 16px" }}>{item.service}</td>
                      <td style={{ padding: "12px 16px" }}>{item.unit}</td>
                      <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#e74c3c" }}>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
