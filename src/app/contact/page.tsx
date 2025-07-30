import React from "react";
import Contact from "@/components/Pages/Contact";
import { icons } from "@/lib/meta";
import JsonLd from "@/lib/JsonLd";

async function generateLdJsonContact() {
  const siteUrl = process.env.SITE_URL || "https://alelizainteriors.com";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${siteUrl}/contact`,
        url: `${siteUrl}/contact`,
        name: "Contact Al Eliza Interior",
        isPartOf: { "@id": `${siteUrl}/#website` },
        description:
          "Get in touch with Al Eliza Interior, a leading interior design company in Dubai, UAE. Reach out for consultations, project inquiries, or support.",
        breadcrumb: {
          "@id": `${siteUrl}/contact/#breadcrumb`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/contact/#breadcrumb`,
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
            name: "Contact",
            item: `${siteUrl}/contact`,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Al Eliza Interior",
        description:
          "Al Eliza Interior is a premier interior design company in Dubai, UAE, offering high-end design solutions for residential and commercial spaces.",
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
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+971 522 889 300",
          contactType: "Customer Support",
          areaServed: "AE",
          availableLanguage: ["English", "Arabic", "Malayalam", "Hindi"],
        },
      },
    ],
  };
}
const data = await generateLdJsonContact();

export async function generateMetadata() {
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  return {
    title: "Al Eliza Interior - Contact Us",
    description:
      "Contact Al Eliza Interior, a leading interior design company in Dubai, UAE. Let's bring your vision to life with elegant, functional spaces tailored to your lifestyle.",
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
      canonical: `${siteURL}/contact`,
    },
    openGraph: {
      title: `Al Eliza Interior - Contact Us`,
      description:
        "Contact Al Eliza Interior, a leading interior design company in Dubai, UAE. Let's bring your vision to life with elegant, functional spaces tailored to your lifestyle.",
      url: `${siteURL}/contact`,
      siteName: siteName,
      locale: "en_US",
      type: "article",
      images: [],
    },

    twitter: {
      card: "summary_large_image",
      title: `Al Eliza Interior - Contact Us `,
      description:
        "Contact Al Eliza Interior, a leading interior design company in Dubai, UAE. Let's bring your vision to life with elegant, functional spaces tailored to your lifestyle.",
      creator: `@${authorName}`,
      site: `@${siteName}`,
      url: `${siteURL}/contact`,
    },
  };
}

export default function page() {
  return (
    <>
      <JsonLd data={JSON.stringify(data)} />
      <Contact />
    </>
  );
}
