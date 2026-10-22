import type { Metadata } from "next";

import { PortfolioPage } from "@/components/portfolio-page";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { homeContent } from "@/lib/home-content";
import { defaultSocialImage, personSchema } from "@/lib/seo-schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sudar Blogger | Web Developer Portfolio",
  description:
    "Explore the portfolio, projects, experiments, and YouTube work of Ujjwal Baunthiyal, a web developer building with React, Next.js, Python, and Django.",
  keywords: [
    "Sudar Blogger",
    "Sudar",
    "Blogger",
    "Kang Sudar",
    "sudar portfolio",
    "Sudar developer portfolio",
    "Sudar web developer",
  ],
  openGraph: {
    title: "Sudar Blogger | Web Developer Portfolio",
    description: "Explore Ujjwal Baunthiyal's projects, experiments, and YouTube work.",
    url: site.domain,
    siteName: site.name,
    locale: "en_US",
    type: "profile",
    images: [{ url: defaultSocialImage, alt: "Sudar Blogger illustrated portrait" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudar Blogger | Web Developer Portfolio",
    description: "Explore Sudar projects, experiments, and YouTube work.",
    images: [defaultSocialImage],
  },
  alternates: { canonical: site.domain },
};

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema(),
    {
      "@type": "WebSite",
      "@id": `${site.domain}/#website`,
      url: site.domain,
      name: "sudar blogger",
      description: site.description,
      publisher: { "@id": `${site.domain}/#ujjwal-baunthiyal` },
    },
    {
      "@type": "ProfilePage",
      url: site.domain,
      name: "Sudar Blogger | Website Personal",
      mainEntity: { "@id": `${site.domain}/#ujjwal-baunthiyal` },
    },
    {
      "@type": "ItemList",
      name: "Projects by Sudar Blogger",
      itemListElement: homeContent.projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.name,
        url: `${site.domain}/project/${project.slug}`,
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <SeoJsonLd data={homepageJsonLd} />
      <PortfolioPage />
    </>
  );
}
