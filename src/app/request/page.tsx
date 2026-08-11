import { Metadata } from "next";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Leave Request | Ceiling Pro_interier Studio",
  description: "Book a free measurement engineer visit in Moscow and Moscow Region.",
};

export default function RequestPage() {
  return (
    <main>
      <div className="block_07">
        <img
          src="/img/e0b0a3f5291c6d76f2e48e99bb5d0495.jpg"
          alt="Leave Request Ceiling PRO Interior Studio"
        />
      </div>

      <section className="block_01">
        <div className="container">
          <div className="bradcrumbs">
            Home » Leave Request
          </div>

          <div className="bottom_30">
            <h3 className="inner_header">Book a Free Measurement</h3>
          </div>

          <div className="inner_content">
            <Sidebar />

            <div className="page_content">
              <p style={{ textAlign: "justify" }}>
                To book a free on-site measurement engineer visit, click &quot;Leave Request&quot; in the header or call us directly:
                <br /><br />
                <strong>Phone:</strong> <a href="tel:+74955067244">8(495) 506-7244</a>, <a href="tel:+79163532070">8(916) 353-2070</a>
                <br />
                <strong>Email:</strong> <a href="mailto:studia-inter@mail.ru">studia-inter@mail.ru</a>
                <br /><br />
                We work 7 days a week from 9:00 AM to 11:00 PM.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
