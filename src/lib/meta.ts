export const title = "Al Eliza Interior";
const siteName = process.env.SITE_NAME || "Al Eliza Interior | Dubai";
const siteUrl = process.env.SITE_URL || "https://alelizainteriors.com";

export const icons = {
    icon: [
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon-32x32.png",
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon-dark-32x32.png",
            media: "(prefers-color-scheme: dark)",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "96x96",
            url: "/favicon-96x96.png",

        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon-16x16.png",
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon-dark-16x16.png",
            media: "(prefers-color-scheme: dark)",
        },
    ],
    apple: [
        { rel: "apple-touch-icon", sizes: "57x57", url: "/apple-icon-57x57.png" },
        { rel: "apple-touch-icon", sizes: "60x60", url: "/apple-icon-60x60.png" },
        { rel: "apple-touch-icon", sizes: "72x72", url: "/apple-icon-72x72.png" },
        { rel: "apple-touch-icon", sizes: "76x76", url: "/apple-icon-76x76.png" },
        {
            rel: "apple-touch-icon",
            sizes: "114x114",
            url: "/apple-icon-114x114.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "120x120",
            url: "/apple-icon-120x120.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "144x144",
            url: "/apple-icon-144x144.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "152x152",
            url: "/apple-icon-152x152.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/apple-icon-180x180.png",
        },
    ],
}

interface OpenGraphDataParams {
    title: string;
    description?: string;
}

export const getOpenGraphData = ({ title, description }: OpenGraphDataParams) => ({
    title: `${title} | ${siteName}`,
    description:
        description ||
        "IP Technics provides IaaS, PaaS, and SaaS solutions in Dubai, UAE, offering secure cloud migration, management, and performance optimization for businesses.",
    images: [
        {
            url: `${siteUrl}/images/opengraph/2800x1600.png`,
            width: 2800,
            height: 1600,
            alt: `${title} | ${siteName}`,
        }
    ],
});
