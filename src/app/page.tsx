import Link from "next/link";
import Slider from "@/components/Slider/Slider";
import Reviews from "@/components/Reviews/Reviews";
import TextAnimation from "@/components/TextAnimation/TextAnimation";

export default function Home() {
  const products = [
    {
      title: "Матовые, глянцевые потолки ПВХ",
      description: "Матовая/сатиновая, лаковая фактура, классика",
      price: "от 280 р.м²",
      slug: "matovye-i-glyancivye-pvh",
      itemClass: "item",
    },
    {
      title: "Тканевые потолки",
      description: "Дескор(Descor) ткань полиэстр с полиуретаном. Все цвета",
      price: "от 960 р.м²",
      slug: "tkanevye-potolki",
      itemClass: "item",
    },
    {
      title: "Многоуровневые потолки",
      description: "В два и более уровня. Разные цвета, фактуры",
      price: "от 1850 пог.м",
      slug: "mnogourovnevye-potolki",
      itemClass: "item",
    },
    {
      title: "Световой потолок",
      description: "Прозрачный потолок с подсветкой LED изнутри",
      price: "от 6800 р.м²",
      slug: "svetovye-led-potolki",
      itemClass: "item",
    },
    {
      title: "Парящий потолок",
      description: "Фигурный профиль с мягкой подсветкой LED по стенам",
      price: "от 950 пог.м",
      slug: "paryashie-potolki",
      itemClass: "item2",
    },
    {
      title: "Теневой потолок",
      description: "Стильное теневое примыкание потолка к стене, черный профиль",
      price: "от 680 пог.м",
      slug: "tenevye-potolki",
      itemClass: "item2",
    },
    {
      title: "Световые линии",
      description: "Линии, полосы с LED освещением в уровень потолка",
      price: "от 1950 пог.м",
      slug: "svetovye-linii",
      itemClass: "item3",
    },
    {
      title: "Потолки с подсветкой LED",
      description: "Варианты освещения лентами LED",
      price: "от 650 пог.м",
      slug: "s-podsvetkoy-led",
      itemClass: "item3",
    },
    {
      title: "Фотопечать на потолке",
      description: "Рисунки, изображения, картины на потолке",
      price: "от 1850 р.м²",
      slug: "fotopechat-na-potolke",
      itemClass: "item4",
    },
    {
      title: "3D натяжной потолок",
      description: "Потолок с 3D объемом, подсветкой LED, фотопечатью",
      price: "от 2200 р.м²",
      slug: "3d-potolki",
      itemClass: "item4",
    },
    {
      title: "Небо на потолке",
      description: "Натяжной потолок с фотопечатью Небо и облаков, варианты",
      price: "от 1850 р.м²",
      slug: "nebo-s-oblakami",
      itemClass: "item5",
    },
    {
      title: "Звукоизоляция под натяжной потолок",
      description: "Комплекс защиты от шумных соседей",
      price: "от 1400 р.м²",
      slug: "shumoizolyaciya-potolka",
      itemClass: "item5",
    },
  ];

  return (
    <main>
      {/* Главный Слайдер */}
      <Slider />

      {/* Блок 01 - Натяжные потолки */}
      <section className="block_01">
        <div className="container">
          <div className="number_header bottom_30">
            <span className="number">01</span>
            <h3>НАТЯЖНЫЕ ПОТОЛКИ</h3>
          </div>
          <div className="page_content">
            <img 
              className="page_image" 
              src="/img/room2.png" 
              alt="Натяжные потолки в интерьере" 
            />
            <p>
              Натяжные потолки пвх, матовые, глянцевые или тканевые, уверенно вошли в понятие современная отделка потолка. Купить или заказать монтаж натяжного потолка недорого можно у нас, официально, с гарантией.
              <br /><br />
              Конечно же, приходят мысли о покраске потолка, его выравнивании, гипсокартон, шпаклевка, грунтовка... Где взять время, силы, кого нанимать, будет ли потом трескаться, в общем, куча вопросов на Вашу голову!
              <br /><br />
              А вот с натяжными потолками у Вас не возникнет таких вопросов. Монтаж, установка натяжных потолков проходит быстро, без пыли и грязи. Натяжной потолок в комнату займет не более 2-3 часов установки. Стоимость натяжных потолков – это отдельный разговор, здесь стоит подчеркнуть, что цена не выходит за грани приличия. Если вы решили купить натяжные потолки, стоимость такой покупки будет зависеть от фактуры и размеров полотен. Например, матовый натяжной потолок ПВХ в комнату 15 м.кв. будет стоить всего 12000р. Очень доступно! Причем всем! Красота! Вы забудете о ремонте потолков на 10-15 лет минимум.
            </p>
          </div>
        </div>
      </section>

      {/* Блок Акции - Ниша для штор */}
      <section className="block_02">
        <div className="container">
          <div className="container_small left top_20">
            <h4>Ниша для штор</h4>
            <p className="free">бесплатно!</p>
            <Link href="/ceilings/nisha-dlya-shtor-skrytaya" className="underline left_180">
              подробнее
            </Link>
          </div>
          <div className="images">
            <div className="img">
              <img src="/img/1574075992_nisha-dlya-shtor.jpg" alt="Ниша для штор" />
            </div>
            <div className="img">
              <img src="/img/1574075928_shtory-nisha.png" alt="Шторы в нише" />
            </div>
            <div className="img hit">
              <img src="/img/1574076126_nishi-dlya-shtory.jpg" alt="Ниши для шторы хит" />
            </div>
          </div>
        </div>
      </section>

      {/* Блок 03 - Каталог потолков */}
      <section className="block_03">
        <div className="container">
          <div className="number_header">
            <span className="number">02</span>
            <h3>натяжные потолки со вкусом</h3>
          </div>

          <div className="products">
            {/* Рендерим сетку товаров */}
            {products.map((prod, index) => (
              <div key={prod.slug} className={prod.itemClass}>
                <div className="cloud">
                  <h5>{prod.title}</h5>
                  <div className="description">{prod.description}</div>
                  <div className="price">{prod.price}</div>
                  <Link href={`/ceilings/${prod.slug}`} className="more">
                    подробнее
                  </Link>
                </div>
              </div>
            ))}

            {/* Рекламный блок */}
            <div className="adv">
              <Link href="/discounts">
                <TextAnimation text="дизайн потолков бесплатно!" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Блок 04 - Наша студия */}
      <section className="block_04">
        <div className="container">
          <div className="number_header">
            <span className="number">03</span>
            <h3>наша студия</h3>
          </div>
          <div className="page_content">
            <p>
              Натяжные потолки уже достаточно давно вошли в нашу жизнь. Еще натяжные потолки называют французские натяжные потолки, ведь такой вид потолков родом из Франции. Хотите тканевые потолки, хотите пленочные, а может матовые натяжные потолки или глянцевые натяжные потолки?! Конечно, Вы выберите то, что захочется.
              <br /><br />
              Натяжные потолки в квартиру, деревянный дом долговечны, водонепроницаемы, имеют широкую гамму цветов, и наконец, они просто красивы. Новый тренд - теневой натяжной потолок с профилем Euro Kraab(Евро Краб). А если захотите отразить на потолках какую-либо фотографию или изображение, то художественный потолок с фотопечатью с этим справится на 5+. Особо презентабельно будут смотреться многоуровневые натяжные потолки, которые подчеркнут объем вашей комнаты. Современный тренд - световые линии на натяжной потолок и световые светящиеся потолки, как единый огромный и равномерный светильник на всю комнату. Пыль на таких потолках не оседает, а если и случайно и запачкали, то просто можно проводить влажную уборку натяжных потолков, слегка протерев губкой, смоченной мыльным раствором.
              <br /><br />
              Наша студия Потолочный PRO Интерьер давно и ответственно работает с натяжными потолками любого уровня сложности, мы разработаем для Вас бесплатно дизайн натяжных потолков, подскажем варианты правильного освещения, быстро и недорого произведем монтаж натяжных потолков в Москве и Подмосковье. И не забывайте что наши скидки и акции обязательно Вас порадуют. Французские натяжные потолки внесут свежесть и, безусловно, украсят Ваши помещения, а мы, студия Потолочный PRO Интерьер с удовольствием Вам в этом поможем!
            </p>
            <img 
              className="page_image" 
              src="/img/Diplom 1.jpg" 
              alt="Наши дипломы и сертификаты" 
            />
          </div>
        </div>
      </section>

      {/* Блок 05 - Отзывы клиентов */}
      <section className="block_05">
        <div className="container">
          <div className="number_header">
            <span className="number">04</span>
            <h3>отзывы наших клиентов</h3>
          </div>
          <Reviews />
        </div>
      </section>
    </main>
  );
}
