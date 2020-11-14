module.exports = {
  siteMetadata: {
    site: 'Hackeex',
    title: `Hackeex Gatsby Starter`,
    titleTemplate: `%s - Hackeex`,
    description: `Gatsby Typescript Styled Components `,
    siteUrl: `https://hackeex-gatsby-starter.netlify.com/`,
    language: `en`,
    color: `#115d06`,
    twitter: '',
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/src/routes.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hackeex`,
        short_name: `Hackeex`,
        start_url: `/`,
        background_color: `#003580`,
        theme_color: `#003580`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
  ],
}
