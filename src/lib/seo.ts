export const seo = ({
    title,
    description,
    keywords,
    image,
    url,
    twitterHandle,
}: {
    title: string
    description?: string
    image?: string
    keywords?: string
    url?: string
    twitterHandle?: `@${string}`
}) => {
    const tags = [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },

        /* Open Graph */
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },

        /* Twitter */
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:url", content: url },

        /* Conditional Twitter Handle */
        ...(twitterHandle
            ? [
                  { name: "twitter:creator", content: twitterHandle },
                  { name: "twitter:site", content: twitterHandle },
              ]
            : []),

        /* image */
        ...(image
            ? [
                  { name: "twitter:image", content: image },
                  { name: "twitter:card", content: "summary_large_image" },
                  { property: "og:image", content: image },
              ]
            : []),
    ]

    return tags
}
