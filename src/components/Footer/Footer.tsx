import Link from "next/link";

export default function Footer() {
  const columns = [
    [
      { title: "Матовые и глянцевые пвх", slug: "matovye-i-glyancivye-pvh" },
      { title: "Тканевые потолки", slug: "tkanevye-potolki" },
      { title: "Многоуровневые потолки", slug: "mnogourovnevye-potolki" },
      { title: "Фотопечать на потолке", slug: "fotopechat-na-potolke" },
      { title: "Небо с облаками", slug: "nebo-s-oblakami" },
      { title: "Витраж на потолок", slug: "vitrazh-na-potolok" },
    ],
    [
      { title: "Парящие потолки", slug: "paryashie-potolki" },
      { title: "Теневые потолки", slug: "tenevye-potolki" },
      { title: "Световые Led потолки", slug: "svetovye-led-potolki" },
      { title: "Световые линии", slug: "svetovye-linii" },
      { title: "С подсветкой Led", slug: "s-podsvetkoy-led" },
      { title: "3D потолки", slug: "3d-potolki" },
    ],
    [
      { title: "В квартире", slug: "v-kvartire" },
      { title: "В загороднем доме", slug: "v-zagorodnem-dome" },
      { title: "В басcеине", slug: "v-basseine" },
      { title: "В детской комнате", slug: "v-detskoy-komnate" },
      { title: "В кухне", slug: "v-kuhne" },
      { title: "В ванне", slug: "v-vanne" },
    ],
    [
      { title: "Ниша для штор скрытая", slug: "nisha-dlya-shtor-skrytaya" },
      { title: "Шумоизоляция потолка", slug: "shumoizolyaciya-potolka" },
      { title: "Светильники для потолка", slug: "svetilniki-dlya-potolka" },
      { title: "Фото наших работ", slug: "foto-nashih-rabot" },
      { title: "Цены на монтаж потолков", slug: "ceny-na-montazh-potolkov" },
      { title: "Скидки и акции", slug: "skidki-i-akcii" },
    ],
  ];

  return (
    <footer className="block_06">
      {/* Кэшбэк плашка */}
      <div className="cashback">
        <h5>
          КЭШБЭК НА КАРТУ ДО 10% <br />
          <a className="tel" href="tel:+74955067244">8(495) 506-7244</a>,{" "}
          <a className="tel" href="tel:+79163532070">8(916) 353-2070</a>
        </h5>
      </div>

      <div className="container">
        <div className="container2">
          {/* Инфо Студии */}
          <ul>
            <li className="bottom_15">
              <img src="/img/Logo7.svg" alt="Pro Interier Logo" width="60%" />
            </li>
            <li>© Студия Потолочный PRO Интерьер 2007-2021г.</li>
            <li>Натяжные потолки Москва и МО. Дизайн. Монтаж.</li>
            <li>
              Телефон:{" "}
              <a className="tel" href="tel:+84955067244">8(495) 506-7244</a>,{" "}
              <a className="tel" href="tel:+89163532070">8(916) 353-2070</a>
            </li>
            <li>
              E-mail: <a href="mailto:studia-inter@mail.ru">studia-inter@mail.ru</a>
            </li>
            <li>Время работы: с 9.00 до 23.00 пн-вс</li>
            <li>Авторские права на сайт и контент защищены.</li>
          </ul>

          {/* Колонки категорий */}
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

        {/* Оплата и Соцсети */}
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
