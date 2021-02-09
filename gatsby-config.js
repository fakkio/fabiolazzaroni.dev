module.exports = {
  siteMetadata: {
    title: `Fabio Lazzaroni personal website`,
    description: `Personal and professional information about Fabio Lazzaroni`,
    author: `Fabio Lazzaroni <lazzaroni@jeflab.it> (http://fabiolazzaroni.dev/)`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-scss-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Fabio Lazzaroni personal website",
        short_name: "Fabio Lazzaroni",
        start_url: "/",
        background_color: "#2c3e50",
        theme_color: "#34495e",
        display: "minimal-ui",
        icon: "src/images/icon.jpg", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-react-axe",
    // "gatsby-plugin-offline",
    "gatsby-plugin-eslint",
  ],
};
