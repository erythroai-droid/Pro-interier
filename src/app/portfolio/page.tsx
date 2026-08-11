import { Metadata } from "next";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Our Works Portfolio | Ceiling Pro_interier Studio",
  description: "Photo gallery of completed stretch ceiling installation projects in Moscow and Moscow Region.",
};

const works = [
  { img: "/img/1-натяжной-потолок-в-квартиру.webp", title: "Living room with matte PVC and light lines" },
  { img: "/img/2-кухня.webp", title: "Kitchen glossy stretch ceiling with spotlights" },
  { img: "/img/3-спальня.webp", title: "Bedroom fabric Descor ceiling with contour lighting" },
  { img: "/img/4-ванна.webp", title: "Bathroom moisture-proof stretch ceiling" },
  { img: "/img/Многоуровневые-потолки.webp", title: "Multi-level ceiling with LED illumination" },
  { img: "/img/световые линии 3.webp", title: "Modern geometric light lines" },
];

export default function PortfolioPage() {
  return (
    <main>
      <div className="block_07">
        <img
          src="/img/e0b0a3f5291c6d76f2e48e99bb5d0495.webp"
          alt="Portfolio Ceiling PRO Interior Studio"
          width={1920}
          height={270}
          loading="eager"
          decoding="async"
        />
      </div>

      <section className="block_01">
        <div className="container">
          <div className="bradcrumbs">
            Home » Our Works
          </div>

          <div className="bottom_30">
            <h3 className="inner_header">Our Completed Works</h3>
          </div>

          <div className="inner_content">
            <Sidebar />

            <div className="page_content">
              <p className="bottom_30" style={{ textAlign: "justify" }}>
                Explore photos of our completed stretch ceiling projects. Every project is carried out with precision, clean mounting, and premium materials.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                {works.map((item, idx) => (
                  <div key={idx} style={{ background: "#f8f8f8", borderRadius: "6px", overflow: "hidden", border: "1px solid #eee" }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      width={380}
                      height={200}
                      loading="lazy"
                      decoding="async"
                      style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                    />
                    <div style={{ padding: "12px 16px", fontSize: "14px", fontWeight: "bold", color: "#333" }}>
                      {item.title}
                    </div>
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
