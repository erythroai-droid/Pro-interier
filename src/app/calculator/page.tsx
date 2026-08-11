import { Metadata } from "next";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Ceiling Calculator | Ceiling Pro_interier Studio",
  description: "Calculate approximate cost of stretch ceilings online.",
};

export default function CalculatorPage() {
  return (
    <main>
      <div className="block_07">
        <img
          src="/img/e0b0a3f5291c6d76f2e48e99bb5d0495.webp"
          alt="Calculator Ceiling PRO Interior Studio"
          width={1920}
          height={270}
          loading="eager"
          decoding="async"
        />
      </div>

      <section className="block_01">
        <div className="container">
          <div className="bradcrumbs">
            Home » Calculator
          </div>

          <div className="bottom_30">
            <h3 className="inner_header">Stretch Ceiling Calculator</h3>
          </div>

          <div className="inner_content">
            <Sidebar />

            <div className="page_content">
              <p style={{ textAlign: "justify" }}>
                Use our interactive popup calculator in the top navigation bar or quick floating menu to calculate estimated pricing in 3 easy steps (room area, shadow gap, and light fixtures).
                <br /><br />
                For the exact estimation, our measurement engineer visits your premises free of charge with full material samples and lighting catalogs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
