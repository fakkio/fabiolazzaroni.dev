import {StaticImage} from "gatsby-plugin-image";
import React, {VFC} from "react";

export const ProfilePicture: VFC = () => {
  return (
    <StaticImage
      src="../images/fabio.jpg"
      alt="Fabio Lazzaroni profile picture"
      layout="fixed"
      height={200}
      width={200}
      placeholder="tracedSVG"
      tracedSVGOptions={{
        background: "#050505",
        color: "#757575",
        threshold: 87,
        blackOnWhite: false,
      }}
    />
  );
};
