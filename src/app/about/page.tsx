import { Metadata } from "next";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "About Us | Ceiling Pro_interier Studio",
  description: "Learn more about Ceiling Pro_interier Studio. Over 15 years of experience in turnkey stretch ceiling installation in Moscow and Moscow Region.",
};

export default function AboutPage() {
  return (
    <main>
      <div className="block_07">
        <img
          src="/img/e0b0a3f5291c6d76f2e48e99bb5d0495.webp"
          alt="About Ceiling PRO Interior Studio"
          width={1920}
          height={270}
          loading="eager"
          decoding="async"
        />
      </div>

      <section className="block_01">
        <div className="container">
          <div className="bradcrumbs">
            Home » About Us
          </div>

          <div className="bottom_30">
            <h3 className="inner_header">About Ceiling Pro_interier Studio</h3>
          </div>

          <div className="inner_content">
            <Sidebar />

            <div className="page_content">
              <img
                className="right_30 left bottom_15"
                src="/img/1-натяжной-потолок-в-квартиру.webp"
                alt="About us"
                width={320}
                height={220}
                loading="lazy"
                decoding="async"
                style={{ maxWidth: "320px", width: "100%", height: "auto", float: "left", borderRadius: "4px" }}
              />
              <p style={{ textAlign: "justify" }}>
                Studio &apos;Ceiling PRO Interior&apos; has been working on the market of stretch ceilings in Moscow and the Moscow Region since 2007. Over the years, we have successfully completed more than 10,000 projects of varying complexity: from compact bathrooms to huge cottages and commercial spaces.
                <br /><br />
                Our team consists of experienced, certified installers and designers who love their job. We use only explosion-proof composite gas cylinders and high-grade European canvases (Descor, Clipso, MSD Premium, Bauf, Pongs).
                <br /><br />
                We provide a comprehensive warranty of 15 years on fabrics and 3 years on installation works. Our goal is to make modern, high-quality ceilings accessible, neat, and long-lasting for every customer.
              </p>
              <div style={{ clear: "both" }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
