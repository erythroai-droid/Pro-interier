import { Metadata } from "next";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ceilingsData } from "@/data/ceilings";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Генерация статических параметров для пререндеринга всех страниц при сборке
export async function generateStaticParams() {
  return Object.keys(ceilingsData).map((slug) => ({
    slug,
  }));
}

// Динамические SEO-метаданные для каждой категории потолков
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = ceilingsData[slug];

  if (!data) {
    return {
      title: "Страница не найдена | Потолочный Pro_interier",
    };
  }

  return {
    title: `${data.title} под ключ в Москве и МО | Студия Pro_interier`,
    description: `Закажите профессиональный монтаж по направлению: ${data.title}. Выезд замерщика бесплатно, официальная гарантия, работаем в Москве и Московской области.`,
    keywords: `${data.breadcrumb.toLowerCase()}, натяжные потолки, Pro-interier, дизайн потолка, монтаж потолков`,
  };
}

export default async function CeilingPage({ params }: PageProps) {
  const { slug } = await params;
  const data = ceilingsData[slug];

  // Если slug не найден в нашей базе данных
  if (!data) {
    notFound();
  }

  return (
    <main>
      {/* Баннер страницы */}
      <div className="block_07">
        <img 
          src="/img/e0b0a3f5291c6d76f2e48e99bb5d0495.jpg" 
          alt="Баннер Студия Потолочный PRO Интерьер" 
        />
      </div>

      {/* Основной контент */}
      <section className="block_01">
        <div className="container">
          {/* Хлебные крошки */}
          <div className="bradcrumbs">
            Натяжные потолки » {data.breadcrumb}
          </div>

          <div className="bottom_30">
            <h3 className="inner_header">{data.title}</h3>
          </div>

          {/* Сетка: Сайдбар + Контент */}
          <div className="inner_content">
            <Sidebar />

            <div className="page_content">
              <img 
                className="right_30 left bottom_15" 
                src={data.image} 
                alt={data.title} 
                style={{ maxWidth: "320px", width: "100%", height: "auto", float: "left", borderRadius: "4px" }}
              />
              <p style={{ textAlign: "justify" }}>
                {data.content}
                <br /><br />
                Студия натяжных потолков «Потолочный PRO Интерьер» гарантирует качественное выполнение всех этапов работ: от бесплатного профессионального замера до монтажа полотна любой сложности. В работе мы используем только сертифицированные полотна от проверенных европейских и отечественных производителей, современные профильные системы и взрывобезопасное композитное оборудование. 
                <br /><br />
                Установка натяжных потолков проходит быстро, чисто и в согласованные сроки. Мы дорожим своей репутацией, поэтому предоставляем официальную гарантию на все виды материалов и монтажные работы. Свяжитесь с нами прямо сейчас, чтобы получить точный расчет стоимости вашего потолка и заказать бесплатный выезд инженера-замерщика.
              </p>
              <div style={{ clear: "both" }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
