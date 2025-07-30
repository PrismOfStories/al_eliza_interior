import Services from "@/components/Pages/Services";
import JsonLd from "@/lib/JsonLd";
import { icons } from "@/lib/meta";
import React from "react";

async function generateLdJsonServices() {
  const siteUrl = process.env.SITE_URL || "https://alelizainteriors.com";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/services`,
        url: `${siteUrl}/services`,
        name: "Interior Design Services | Al Eliza Interior",
        isPartOf: { "@id": `${siteUrl}/#website` },
        description:
          "Discover the range of services offered by Al Eliza Interior in Dubai, UAE, including residential and commercial interior design, space planning, and project management.",
        breadcrumb: {
          "@id": `${siteUrl}/services/#breadcrumb`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/services/#breadcrumb`,
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
            name: "Services",
            item: `${siteUrl}/services`,
          },
        ],
      },
      {
        "@type": "Service",
        name: "Interior Design",
        serviceType: "Residential and Commercial Interior Design",
        areaServed: {
          "@type": "Place",
          name: "Dubai, UAE",
        },
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        url: `${siteUrl}/services`,
        description:
          "Tailored interior design services for homes, offices, and commercial spaces in Dubai. Our services include space planning, 3D visualization, and turnkey solutions.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Al Eliza Interior",
        description:
          "Al Eliza Interior is a premier interior design company in Dubai, UAE, specializing in elegant and functional spaces for residential and commercial clients.",
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

const data = await generateLdJsonServices();

export async function generateMetadata() {
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  return {
    title: "Al Eliza Interior - Services",
    description:
      "Discover the professional interior design services of Al Eliza Interior in Dubai, UAE. From space planning to turnkey project management, we create stunning, functional spaces tailored to your lifestyle and needs.",
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
      canonical: `${siteURL}/services`,
    },
    openGraph: {
      title: `Al Eliza Interior - Services`,
      description:
        "Discover the professional interior design services of Al Eliza Interior in Dubai, UAE. From space planning to turnkey project management, we create stunning, functional spaces tailored to your lifestyle and needs.",
      url: `${siteURL}/services`,
      siteName: siteName,
      locale: "en_US",
      type: "article",
      images: [],
    },

    twitter: {
      card: "summary_large_image",
      title: `Al Eliza Interior - Services`,
      description:
        "Discover the professional interior design services of Al Eliza Interior in Dubai, UAE. From space planning to turnkey project management, we create stunning, functional spaces tailored to your lifestyle and needs.",
      creator: `@${authorName}`,
      site: `@${siteName}`,
      url: `${siteURL}/services`,
    },
  };
}

export default function page() {
  return (
    <>
      <JsonLd data={JSON.stringify(data)} />
      <Services />
    </>
  );
}
