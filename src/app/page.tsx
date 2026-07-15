import Link from "next/link";
import Slider from "@/components/Slider/Slider";
import Reviews from "@/components/Reviews/Reviews";
import TextAnimation from "@/components/TextAnimation/TextAnimation";

export default function Home() {
  const products = [
    {
      title: "Matte and Glossy PVC Ceilings",
      description: "Matte/satin, lacquer texture, classic",
      price: "from $280/m²",
      slug: "matovye-i-glyancivye-pvh",
      image: "/img/products/matovye-i-glyancivye.jpg",
    },
    {
      title: "Fabric Ceilings",
      description: "Descor polyester fabric with polyurethane. All colors",
      price: "from $960/m²",
      slug: "tkanevye-potolki",
      image: "/img/products/tkanivye.jpg",
    },
    {
      title: "Multi-level Ceilings",
      description: "Two or more levels. Various colors and textures",
      price: "from $1,850/lin.m",
      slug: "mnogourovnevye-potolki",
      image: "/img/products/mnogourovnivye.jpg",
    },
    {
      title: "Luminous Ceiling",
      description: "Translucent ceiling with internal LED backlight",
      price: "from $6,800/m²",
      slug: "svetovye-led-potolki",
      image: "/img/products/svetovoi.jpg",
    },
    {
      title: "Floating Ceiling",
      description: "Contour profile with soft LED wall lighting",
      price: "from $950/lin.m",
      slug: "paryashie-potolki",
      image: "/img/products/paryashie.jpg",
    },
    {
      title: "Shadow Ceiling",
      description: "Stylish shadow gap ceiling connection to wall, black profile",
      price: "from $680/lin.m",
      slug: "tenevye-potolki",
      image: "/img/products/tenevoi.jpg",
    },
    {
      title: "Light Lines",
      description: "Lines and strips with LED lighting flush with the ceiling",
      price: "from $1,950/lin.m",
      slug: "svetovye-linii",
      image: "/img/products/liniy.jpg",
    },
    {
      title: "LED Backlit Ceilings",
      description: "Lighting options with LED strips",
      price: "from $650/lin.m",
      slug: "s-podsvetkoy-led",
      image: "/img/products/podsvetka.jpg",
    },
    {
      title: "Photo Printed Ceilings",
      description: "Drawings, images, paintings on the ceiling",
      price: "from $1,850/m²",
      slug: "fotopechat-na-potolke",
      image: "/img/products/fotopechaty.jpg",
    },
    {
      title: "3D Stretch Ceiling",
      description: "Ceiling with 3D volume, LED backlight, photo printing",
      price: "from $2,200/m²",
      slug: "3d-potolki",
      image: "/img/products/3D.jpg",
    },
    {
      title: "Sky Ceiling",
      description: "Stretch ceiling with Sky & Clouds photo printing, options",
      price: "from $1,850/m²",
      slug: "nebo-s-oblakami",
      image: "/img/products/nebo.jpg",
    },
    {
      title: "Soundproofing Under Stretch Ceiling",
      description: "Comprehensive noise protection from upstairs neighbors",
      price: "from $1,400/m²",
      slug: "shumoizolyaciya-potolka",
      image: "/img/products/zvukoizolyazia.jpg",
    },
  ];

  return (
    <main>
      {/* Main Slider */}
      <Slider />

      {/* Block 01 - Stretch Ceilings */}
      <section className="block_01">
        <div className="container">
          <div className="number_header bottom_30">
            <span className="number">01</span>
            <h3>STRETCH CEILINGS</h3>
          </div>
          <div className="page_content">
            <img 
              className="page_image" 
              src="/img/room2.png" 
              alt="Stretch ceilings in the interior" 
            />
            <p>
              PVC stretch ceilings, in matte, glossy, or fabric textures, have firmly established themselves in the concept of modern ceiling finishes. You can buy or order stretch ceiling installation from us at an affordable price, officially, and with a warranty.
              <br /><br />
              Of course, you might think about painting the ceiling, leveling it, using drywall, plastering, priming... Where to get the time and strength, who to hire, will it crack later? A whole bunch of headaches!
              <br /><br />
              With stretch ceilings, you won't face these issues. The assembly and installation of stretch ceilings are fast, without dust and dirt. Installing a stretch ceiling in a room takes no more than 2-3 hours. The cost of stretch ceilings is a separate conversation, and it is worth emphasizing that the price is very reasonable. If you decide to buy stretch ceilings, the cost of such a purchase will depend on the texture and dimensions of the canvas. For example, a matte PVC stretch ceiling in a 15 sq.m. room will cost only $12,000. Very affordable for everyone! Beautiful! You will forget about ceiling repairs for at least 10-15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Promo Block - Curtain Niche */}
      <section className="block_02">
        <div className="container">
          <div className="container_small">
            <h4>Curtain Niche</h4>
            <p className="free">free!</p>
            <Link href="/ceilings/nisha-dlya-shtor-skrytaya" className="underline left_180">
              details
            </Link>
          </div>
          <div className="img">
            <img src="/img/1574075992_nisha-dlya-shtor.jpg" alt="Curtain Niche" />
          </div>
          <div className="img">
            <img src="/img/1574075928_shtory-nisha.png" alt="Curtains in niche" />
          </div>
          <div className="img hit">
            <img src="/img/1574076126_nishi-dlya-shtory.jpg" alt="Curtain Niche Best Choice" />
          </div>
        </div>
      </section>

      {/* Block 03 - Stretch Ceilings Catalog */}
      <section className="block_03">
        <div className="container">
          <div className="number_header">
            <span className="number">02</span>
            <h3>tasteful stretch ceilings</h3>
          </div>
        </div>

        <div className="products">
          {/* First row of cards (4 cards) */}
          {products.slice(0, 4).map((prod) => (
            <div 
              key={prod.slug} 
              className="productCard"
              style={{ backgroundImage: `url(${prod.image})` }}
            >
              <div className="cloud">
                <h5>{prod.title}</h5>
                <div className="description">{prod.description}</div>
                <div className="price">{prod.price}</div>
                <Link href={`/ceilings/${prod.slug}`} className="more">
                  details
                </Link>
              </div>
            </div>
          ))}

          {/* Promotional Banner */}
          <div className="adv">
            <Link href="/discounts">
              <TextAnimation text="free ceiling design!" />
            </Link>
          </div>

          {/* Remaining cards */}
          {products.slice(4).map((prod) => (
            <div 
              key={prod.slug} 
              className="productCard"
              style={{ backgroundImage: `url(${prod.image})` }}
            >
              <div className="cloud">
                <h5>{prod.title}</h5>
                <div className="description">{prod.description}</div>
                <div className="price">{prod.price}</div>
                <Link href={`/ceilings/${prod.slug}`} className="more">
                  details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Block 04 - Our Studio */}
      <section className="block_04">
        <div className="container">
          <div className="number_header">
            <span className="number">03</span>
            <h3>our studio</h3>
          </div>
          <div className="page_content">
            <p>
              Stretch ceilings entered our lives a long time ago. They are also called French stretch ceilings, because this type of ceiling originated in France. Whether you want fabric ceilings, film ceilings, or maybe matte or glossy stretch ceilings - you will certainly find what you want.
              <br /><br />
              Stretch ceilings in apartments or wooden houses are durable, waterproof, have a wide range of colors, and are simply beautiful. The new trend is a shadow gap stretch ceiling with a EuroKraab profile. And if you want to display any photo or image on the ceilings, a photo-printed ceiling will do it perfectly. Multi-level stretch ceilings look especially prestigious, emphasizing the volume of your room. Modern trends include light lines on stretch ceilings and luminous ceilings, acting as a single huge, uniform lamp for the entire room. Dust does not settle on such ceilings, and if they get dirty, you can easily clean them with a damp sponge and soapy water.
              <br /><br />
              Our studio 'Ceiling PRO Interior' has been working with stretch ceilings of any level of complexity responsibly for a long time. We will design a free stretch ceiling layout for you, suggest correct lighting options, and quickly install stretch ceilings in Moscow and Moscow region at an affordable price. And do not forget that our discounts and promotions will definitely please you. French stretch ceilings will bring freshness and certainly decorate your rooms, and we, 'Ceiling PRO Interior' studio, will be happy to help you!
            </p>
            <div className="studio_images">
              <img 
                className="studio_image" 
                src="/img/1-натяжной-потолок-в-квартиру.jpg" 
                alt="Stretch ceiling in apartment" 
              />
              <img 
                className="studio_image" 
                src="/img/3-спальня.jpg" 
                alt="Stretch ceiling in bedroom" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Block 05 - Testimonials */}
      <section className="block_05">
        <div className="container">
          <div className="number_header">
            <span className="number">04</span>
            <h3>what our clients say</h3>
          </div>
        </div>
        <Reviews />
      </section>
    </main>
  );
}
