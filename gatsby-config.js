const theme = "dark-orange"

module.exports = {
  siteMetadata: {
    description: "Personal page of León G. Martínez Ostos",
    locale: "en",
    title: "León G. Martínez Ostos - My Website",
    author: `@leon_webdev`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss")(require("./tailwind.config")(theme)),
          require("postcss-input-range"),
          require("autoprefixer"),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: "content/",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
