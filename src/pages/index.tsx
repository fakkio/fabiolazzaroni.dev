import * as React from "react";
import {Bio} from "../components/index/Bio";
import {title} from "../components/index/index.module.scss";
import {Labs} from "../components/index/Labs";
import Layout from "../components/Layout";
import {ProfilePicture} from "../components/ProfilePicture";
import SEO from "../components/SEO";

const IndexPage = () => (
  <Layout>
    <SEO />
    <ProfilePicture />
    <h1 className={title}>
      Ciao! Sono Fabio{" "}
      <span role="img" aria-label="mano che saluta">
        👋
      </span>
    </h1>
    <Bio />
    <h2>.labs()</h2>
    <Labs />
  </Layout>
);

export default IndexPage;
