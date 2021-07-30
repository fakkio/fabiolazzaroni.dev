module.exports = {
  siteMetadata: {
    title: "Fabio Lazzaroni ingegnere informatico",
    description: "Informazioni personali e professionali su Fabio Lazzaroni",
    author: `Fabio Lazzaroni <lazzaroni@jeflab.it> (http://fabiolazzaroni.dev/)`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Fabio Lazzaroni ingegnere informatico",
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
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
        ErrorDocument: "ErrorDocument 404 /404.html",
      },
    },
  ],
};
