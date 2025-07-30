import Portfolio from "@/components/Pages/Portfolio";
import JsonLd from "@/lib/JsonLd";
import { icons } from "@/lib/meta";
import React from "react";

async function generateLdJsonPortfolio() {
  const siteUrl = process.env.SITE_URL || "https://alelizainteriors.com";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/portfolio`,
        url: `${siteUrl}/portfolio`,
        name: "Interior Design Portfolio | Al Eliza Interior",
        isPartOf: { "@id": `${siteUrl}/#website` },
        description:
          "Explore the portfolio of Al Eliza Interior featuring our latest residential and commercial interior design projects in Dubai, UAE. View design concepts, before-after transformations, and artistic interiors.",
        breadcrumb: {
          "@id": `${siteUrl}/portfolio/#breadcrumb`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/portfolio/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio",
            item: `${siteUrl}/portfolio`,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Al Eliza Interior",
        description:
          "Al Eliza Interior is a leading interior design studio in Dubai specializing in elegant and functional interiors for residential and commercial spaces.",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Al Eliza Interior",
        alternateName: "Al Eliza Interior Dubai",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          inLanguage: "en-US",
          "@id": `${siteUrl}/#/schema/logo/image/`,
          url: `${siteUrl}/images/logo.png`,
          contentUrl: `${siteUrl}/images/logo.png`,
          width: 250,
          height: 60,
          caption: "Al Eliza Interior",
        },
        image: { "@id": `${siteUrl}/#/schema/logo/image/` },
        sameAs: [
          "https://www.facebook.com/p/Al-eliza-design-Studio-100086651834406/?_rdr",
          "https://www.instagram.com/alelizainteriors?igsh=NHgxYzUyc3dzMmVu",
          "https://www.linkedin.com/company/al-eliza/",
        ],
      },
    ],
  };
}

const data = await generateLdJsonPortfolio();

export async function generateMetadata() {
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  return {
    title: "Al Eliza Interior - Portfolio",
    description:
      "Explore the portfolio of Al Eliza Interior, a premier interior design firm in Dubai, UAE. Discover our latest residential and commercial design projects that blend elegance, innovation, and functionality.",
    author: authorName,
    icons,
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${siteURL}/portfolio`,
    },
    openGraph: {
      title: `Al Eliza Interior - Portfolio`,
      description:
        "Explore the portfolio of Al Eliza Interior, a premier interior design firm in Dubai, UAE. Discover our latest residential and commercial design projects that blend elegance, innovation, and functionality.",
      url: `${siteURL}/portfolio`,
      siteName: siteName,
      locale: "en_US",
      type: "article",
      images: [],
    },

    twitter: {
      card: "summary_large_image",
      title: `Al Eliza Interior - Portfolio`,
      description:
        "Explore the portfolio of Al Eliza Interior, a premier interior design firm in Dubai, UAE. Discover our latest residential and commercial design projects that blend elegance, innovation, and functionality.",
      creator: `@${authorName}`,
      site: `@${siteName}`,
      url: `${siteURL}/portfolio`,
    },
  };
}

export default function page() {
  return (
    <>
      <JsonLd data={JSON.stringify(data)} />
      <Portfolio />;
    </>
  );
}
