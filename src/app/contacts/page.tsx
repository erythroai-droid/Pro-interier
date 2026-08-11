import { Metadata } from "next";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Contacts | Ceiling Pro_interier Studio",
  description: "Contact information for Ceiling Pro_interier Studio: phones, email, working hours in Moscow and Moscow Region.",
};

export default function ContactsPage() {
  return (
    <main>
      <div className="block_07">
        <img
          src="/img/e0b0a3f5291c6d76f2e48e99bb5d0495.webp"
          alt="Contacts Ceiling PRO Interior Studio"
          width={1920}
          height={270}
          loading="eager"
          decoding="async"
        />
      </div>

      <section className="block_01">
        <div className="container">
          <div className="bradcrumbs">
            Home » Contacts
          </div>

          <div className="bottom_30">
            <h3 className="inner_header">Contact Information</h3>
          </div>

          <div className="inner_content">
            <Sidebar />

            <div className="page_content">
              <div style={{ lineHeight: "2", fontSize: "16px" }}>
                <p><strong>Studio:</strong> Ceiling PRO Interior</p>
                <p><strong>Operating Area:</strong> Moscow and Moscow Region</p>
                <p>
                  <strong>Phones:</strong>{" "}
                  <a href="tel:+74955067244" style={{ color: "#e74c3c" }}>8(495) 506-7244</a>,{" "}
                  <a href="tel:+79163532070" style={{ color: "#e74c3c" }}>8(916) 353-2070</a>
                </p>
                <p>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:studia-inter@mail.ru" style={{ color: "#e74c3c" }}>studia-inter@mail.ru</a>
                </p>
                <p><strong>Working Hours:</strong> Daily 9:00 AM – 11:00 PM</p>
                <p><strong>Engineer Visits:</strong> Free measurement throughout Moscow and within 50 km from MKAD</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
