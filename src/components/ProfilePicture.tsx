import {graphql, useStaticQuery} from "gatsby";
import GatsbyImage from "gatsby-image";
import React, {VFC} from "react";

export const ProfilePicture: VFC = () => {
  const {
    file: {
      childImageSharp: {fixed},
    },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "fabio.jpg"}) {
        childImageSharp {
          fixed(
            width: 200
            height: 200
            traceSVG: {
              background: "#050505"
              color: "#757575"
              threshold: 87
              blackOnWhite: false
            }
          ) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  console.log("imageBG");

  return <GatsbyImage fixed={fixed} alt="Fabio Lazzaroni profile picture" />;
};
