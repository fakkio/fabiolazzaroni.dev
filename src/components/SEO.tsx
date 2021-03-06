import {graphql, useStaticQuery} from "gatsby";
import React, {FC} from "react";
import {Helmet} from "react-helmet";
import packageInfo from "../../package.json";

type MetaItem = {
  name: string;
  content: string;
};

type SEOProps = {
  description?: string;
  lang?: string;
  meta?: MetaItem[];
  title?: string;
};

const SEO: FC<SEOProps> = ({description, lang = "it", meta = [], title}) => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "version",
          content: packageInfo.version,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
