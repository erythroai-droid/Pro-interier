import { Metadata } from "next";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Discounts & Special Offers | Ceiling Pro_interier Studio",
  description: "Exclusive promotions, cashback, and special discounts on stretch ceilings in Moscow and Moscow Region.",
};

const offers = [
  {
    title: "Hidden Curtain Niche as a Gift",
    desc: "When ordering stretch ceilings for your entire apartment, receive a hidden curtain niche installation completely free!",
    badge: "PROMO",
  },
  {
    title: "10% Cashback on Card",
    desc: "Sign a contract on the day of measurement and get up to 10% cashback credited to your card.",
    badge: "HOT",
  },
  {
    title: "Free Lighting Layout & Consultation",
    desc: "Our design team will help calculate exact luminaire wattage and optimal light distribution at zero charge.",
    badge: "FREE",
  },
  {
    title: "New Homeowner & Senior Discount",
    desc: "Additional 5% discount for new apartment owners and seniors on all ceiling types and materials.",
    badge: "SPECIAL",
  },
];

export default function DiscountsPage() {
  return (
    <main>
      <div className="block_07">
        <img
          src="/img/e0b0a3f5291c6d76f2e48e99bb5d0495.webp"
          alt="Discounts Ceiling PRO Interior Studio"
          width={1920}
          height={270}
          loading="eager"
          decoding="async"
        />
      </div>

      <section className="block_01">
        <div className="container">
          <div className="bradcrumbs">
            Home » Discounts & Offers
          </div>

          <div className="bottom_30">
            <h3 className="inner_header">Current Promotions & Discounts</h3>
          </div>

          <div className="inner_content">
            <Sidebar />

            <div className="page_content">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                {offers.map((offer, idx) => (
                  <div
                    key={idx}
                    style={{
                      border: "1px solid #e0e0e0",
                      borderRadius: "8px",
                      padding: "24px",
                      background: "#fafafa",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        background: "#e74c3c",
                        color: "#fff",
                        padding: "4px 8px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        borderRadius: "4px",
                      }}
                    >
                      {offer.badge}
                    </span>
                    <h4 style={{ margin: "0 0 12px", fontSize: "18px", color: "#222" }}>{offer.title}</h4>
                    <p style={{ margin: 0, color: "#555", lineHeight: "1.6" }}>{offer.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
