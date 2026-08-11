import { Metadata } from "next";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Client Reviews | Ceiling Pro_interier Studio",
  description: "Read reviews from our satisfied clients about stretch ceiling installation in Moscow and Moscow Region.",
};

const fullReviews = [
  {
    name: "Kai Metov",
    role: "Pop Singer & Composer",
    image: "/img/testimonials/Kai.png",
    text: "Thank you to the Ceiling Pro_interier studio for the excellent work! The installation in the studio apartment was completed in 3 hours. Everything is neat, clean, and looks fantastic. Highly recommended!",
  },
  {
    name: "Andrey Konchalovsky & Yulia Vysotskaya",
    role: "Film Director & Actress",
    image: "/img/testimonials/Konchlovsky.png",
    text: "It turned out cozy and bright! Thank you very much for your great craftsmanship and attention to detail. We are delighted with the result!",
  },
  {
    name: "Valery Nikolaev",
    role: "Actor & Director",
    image: "/img/testimonials/Nikolaev.png",
    text: "Thank you for the high-quality work, liked everything! The light lines and shadow gap look incredible. True professionals in their field.",
  },
];

export default function ReviewsPage() {
  return (
    <main>
      <div className="block_07">
        <img
          src="/img/e0b0a3f5291c6d76f2e48e99bb5d0495.jpg"
          alt="Reviews Ceiling PRO Interior Studio"
        />
      </div>

      <section className="block_01">
        <div className="container">
          <div className="bradcrumbs">
            Home » Client Reviews
          </div>

          <div className="bottom_30">
            <h3 className="inner_header">Client Reviews & Testimonials</h3>
          </div>

          <div className="inner_content">
            <Sidebar />

            <div className="page_content">
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {fullReviews.map((r, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "20px",
                      background: "#fafafa",
                      padding: "20px",
                      borderRadius: "8px",
                      border: "1px solid #e9e9e9",
                      alignItems: "flex-start",
                    }}
                  >
                    <img
                      src={r.image}
                      alt={r.name}
                      style={{ width: "90px", height: "90px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                    />
                    <div>
                      <h4 style={{ margin: "0 0 4px", fontSize: "18px" }}>{r.name}</h4>
                      <div style={{ fontSize: "13px", color: "#888", marginBottom: "12px" }}>{r.role}</div>
                      <p style={{ margin: 0, color: "#444", lineHeight: "1.6" }}>{r.text}</p>
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
