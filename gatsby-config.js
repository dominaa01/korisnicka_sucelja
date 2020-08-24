module.exports = {
  siteMetadata: {
    title: `Nail Studio Flex`,
    description: `Web stranica Nail Studija Flex`,
    author: `@gatsbyjs`,
    menuItems: [
      {
        text: "Naslovna",
        link: "/",
        id: "18uhehdbsb",
      },
      {
        text: "Usluge",
        link: "/usluge",
        id: "18uhehdbaw",
      },
      {
        text: "Rezervacija",
        link: "/rezervacija",
        id: "18uhehksao",
      },
      {
        text: "Info",
        link: "/info",
        id: "20uhehdbsb",
      },
      {
        text: "Blog",
        link: "/blog",
        id: "18uhehkola",
      },
      {
        text: "Prijava",
        link: "/prijava",
        id: "18uhehkolb",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-identity",
      options: {
        url: "https://app.netlify.com/sites/dreamy-lamarr-c07c65",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-theme-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
