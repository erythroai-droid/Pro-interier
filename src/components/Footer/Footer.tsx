import Link from "next/link";

export default function Footer() {
  const columns = [
    [
      { title: "Matte & Glossy PVC", slug: "matovye-i-glyancivye-pvh" },
      { title: "Fabric Ceilings", slug: "tkanevye-potolki" },
      { title: "Multi-level Ceilings", slug: "mnogourovnevye-potolki" },
      { title: "Photo Printed Ceilings", slug: "fotopechat-na-potolke" },
      { title: "Sky with Clouds", slug: "nebo-s-oblakami" },
      { title: "Stained Glass Ceilings", slug: "vitrazh-na-potolok" },
    ],
    [
      { title: "Floating Ceilings", slug: "paryashie-potolki" },
      { title: "Shadow Ceilings", slug: "tenevye-potolki" },
      { title: "Luminous LED Ceilings", slug: "svetovye-led-potolki" },
      { title: "Light Lines", slug: "svetovye-linii" },
      { title: "With LED Backlight", slug: "s-podsvetkoy-led" },
      { title: "3D Ceilings", slug: "3d-potolki" },
    ],
    [
      { title: "In Apartment", slug: "v-kvartire" },
      { title: "In Country House", slug: "v-zagorodnem-dome" },
      { title: "In Swimming Pool", slug: "v-basseine" },
      { title: "In Kids Room", slug: "v-detskoy-komnate" },
      { title: "In Kitchen", slug: "v-kuhne" },
      { title: "In Bathroom", slug: "v-vanne" },
    ],
    [
      { title: "Hidden Curtain Niche", slug: "nisha-dlya-shtor-skrytaya" },
      { title: "Ceiling Soundproofing", slug: "shumoizolyaciya-potolka" },
      { title: "Ceiling Spotlights", slug: "svetilniki-dlya-potolka" },
      { title: "Our Portfolio", slug: "foto-nashih-rabot" },
      { title: "Installation Prices", slug: "ceny-na-montazh-potolkov" },
      { title: "Discounts & Offers", slug: "skidki-i-akcii" },
    ],
  ];

  return (
    <footer className="block_06">
      {/* Cashback badge */}
      <div className="cashback">
        <h5>
          <span>CASHBACK ON CARD UP TO 10%</span> <br />
          <a className="tel" href="tel:+74955067244">8(495) 506-7244</a>,{" "}
          <a className="tel" href="tel:+79163532070">8(916) 353-2070</a>
        </h5>
      </div>

      <div className="container">
        <div className="container2">
          {/* Studio info */}
          <ul>
            <li className="bottom_15">
              <img src="/img/Logo7.svg" alt="Pro Interier Logo" width="60%" />
            </li>
            <li>© Studio Ceiling PRO Interior 2007-2021.</li>
            <li>Stretch ceilings Moscow and Moscow Region. Design. Installation.</li>
            <li>
              Phone:{" "}
              <a className="tel" href="tel:+84955067244">8(495) 506-7244</a>,{" "}
              <a className="tel" href="tel:+89163532070">8(916) 353-2070</a>
            </li>
            <li>
              E-mail: <a href="mailto:studia-inter@mail.ru">studia-inter@mail.ru</a>
            </li>
            <li>Working hours: 9:00 AM to 11:00 PM Mon-Sun</li>
            <li>Copyright for the website and content is protected.</li>
          </ul>

          {/* Categories Columns */}
          {columns.map((col, index) => (
            <ul key={index}>
              {col.map((item) => (
                <li key={item.slug}>
                  <Link href={`/ceilings/${item.slug}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Payment and Social links */}
        <div className="payment-social">
          <div className="payment">
            <img src="/img/sber.svg" alt="Sberbank" />
            <img src="/img/la_cc-visa.svg" alt="Visa" />
            <img src="/img/icons8_mastercard.svg" alt="Mastercard" />
          </div>
          <div className="social">
            <a href="#" className="fb" aria-label="Facebook" />
            <a href="#" className="twit" aria-label="Twitter" />
            <a href="#" className="vk" aria-label="VK" />
            <a href="#" className="ok" aria-label="Odnoklassniki" />
            <a href="#" className="in" aria-label="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}
