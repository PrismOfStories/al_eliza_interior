import React from "react";
import About from "@/components/Pages/About";
import { icons } from "@/lib/meta";
import JsonLd from "@/lib/JsonLd";

async function generateLdJsonAbout() {
  const siteUrl = process.env.SITE_URL || "https://alelizainteriors.com";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${siteUrl}/about`,
        url: `${siteUrl}/about`,
        name: "About Al Eliza Interior",
        isPartOf: { "@id": `${siteUrl}/#website` },
        description:
          "Learn more about Al Eliza Interior, a leading interior design company based in Dubai, UAE. Discover our story, vision, and approach to creating elegant and functional spaces.",
        breadcrumb: {
          "@id": `${siteUrl}/about/#breadcrumb`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/about/#breadcrumb`,
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
            name: "About Us",
            item: `${siteUrl}/about`,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Al Eliza Interior",
        description:
          "Al Eliza Interior is a premier interior design studio in Dubai, UAE, delivering stylish and personalized interior solutions for residential and commercial spaces.",
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

const data = await generateLdJsonAbout();

export async function generateMetadata() {
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  return {
    title: "Al Eliza Interior - About Us",
    description: `Discover Al Eliza Interior, a premier interior design company in Dubai, UAE. We specialize in transforming residential and commercial spaces into stylish, functional environments that reflect elegance and innovation.
`,
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
      canonical: `${siteURL}/about`,
    },
    openGraph: {
      title: `Al Eliza Interior - About Us`,
      description:
        "Discover Al Eliza Interior, a premier interior design company in Dubai, UAE. We specialize in transforming residential and commercial spaces into stylish, functional environments that reflect elegance and innovation.",
      url: `${siteURL}/about`,
      siteName: siteName,
      locale: "en_US",
      type: "article",
      images: [],
    },

    twitter: {
      card: "summary_large_image",
      title: `Al Eliza Interior - About Us `,
      description: `Discover Al Eliza Interior, a premier interior design company in Dubai, UAE. We specialize in transforming residential and commercial spaces into stylish, functional environments that reflect elegance and innovation.`,
      creator: `@${authorName}`,
      site: `@${siteName}`,
      url: `${siteURL}/about`,
    },
  };
}

export default function page() {
  return (
    <>
      <JsonLd data={JSON.stringify(data)} />
      <About />
    </>
  );
}
