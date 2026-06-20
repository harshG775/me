// https://realfavicongenerator.net/
export const seo = ({
    title,
    description,
    image,
    type = "website",
    url,
    keywords,
    twitterHandle,
    appName, // iOS / PWA app title
}: {
    title: string
    description?: string
    image?: string
    type?: string
    url?: string
    keywords?: string
    twitterHandle?: `@${string}`
    appName?: string
}) => {
    const tags = [
        // Document title
        { title },

        // Basic SEO
        ...(description ? [{ name: "description", content: description }] : []),
        ...(keywords ? [{ name: "keywords", content: keywords }] : []),

        // iOS / PWA
        ...(appName
            ? [
                  { name: "apple-mobile-web-app-title", content: appName },
                  { name: "application-name", content: appName },
              ]
            : []),

        // Open Graph
        { property: "og:title", content: title },
        ...(description ? [{ property: "og:description", content: description }] : []),
        ...(url ? [{ property: "og:url", content: url }] : []),
        { property: "og:type", content: type },

        // Twitter
        { name: "twitter:title", content: title },
        ...(description ? [{ name: "twitter:description", content: description }] : []),
        ...(url ? [{ name: "twitter:url", content: url }] : []),

        // Twitter handle
        ...(twitterHandle
            ? [
                  { name: "twitter:creator", content: twitterHandle },
                  { name: "twitter:site", content: twitterHandle },
              ]
            : []),

        // Images
        ...(image
            ? [
                  { name: "twitter:card", content: "summary_large_image" },
                  { name: "twitter:image", content: image },
                  { property: "og:image", content: image },
              ]
            : []),
    ]

    return tags
}
