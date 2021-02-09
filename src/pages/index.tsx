import * as React from "react";
import Layout from "../components/Layout";
import {ProfilePicture} from "../components/ProfilePicture";
import SEO from "../components/SEO";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfilePicture />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
);

export default IndexPage;
