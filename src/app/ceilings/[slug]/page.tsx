import { Metadata } from "next";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ceilingsData } from "@/data/ceilings";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for prerendering all pages at build time
export async function generateStaticParams() {
  return Object.keys(ceilingsData).map((slug) => ({
    slug,
  }));
}

// Dynamic SEO metadata for each ceiling category
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = ceilingsData[slug];

  if (!data) {
    return {
      title: "Page Not Found | Ceiling Pro_interier",
    };
  }

  return {
    title: `${data.title} Turnkey in Moscow and Moscow Region | Pro_interier Studio`,
    description: `Order professional installation for: ${data.title}. Free visit of the measurement engineer, official warranty, we work in Moscow and Moscow region.`,
    keywords: `${data.breadcrumb.toLowerCase()}, stretch ceilings, Pro-interier, ceiling design, ceiling installation`,
  };
}

export default async function CeilingPage({ params }: PageProps) {
  const { slug } = await params;
  const data = ceilingsData[slug];

  // If slug is not found in database
  if (!data) {
    notFound();
  }

  return (
    <main>
      {/* Page Banner */}
      <div className="block_07">
        <img 
          src="/img/e0b0a3f5291c6d76f2e48e99bb5d0495.jpg" 
          alt="Banner Ceiling PRO Interior Studio" 
        />
      </div>

      {/* Main Content */}
      <section className="block_01">
        <div className="container">
          {/* Breadcrumbs */}
          <div className="bradcrumbs">
            Stretch Ceilings » {data.breadcrumb}
          </div>

          <div className="bottom_30">
            <h3 className="inner_header">{data.title}</h3>
          </div>

          {/* Grid: Sidebar + Content */}
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
                Stretch Ceiling Studio 'Ceiling PRO Interior' guarantees high-quality execution of all stages of work: from free professional measurement to installation of ceilings of any complexity. In our work we use only certified canvases from proven European and domestic manufacturers, modern profile systems, and explosion-safe composite equipment.
                <br /><br />
                Installation of stretch ceilings is fast, clean, and within the agreed timeline. We value our reputation, which is why we provide an official warranty on all types of materials and installation work. Contact us right now to get an exact calculation of your ceiling cost and order a free visit from our measurement engineer.
              </p>
              <div style={{ clear: "both" }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
