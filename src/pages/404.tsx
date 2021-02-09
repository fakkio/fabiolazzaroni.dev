import {Link} from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <Layout centered>
    <SEO title="404: Not found" />
    <h1>404: Pagina non trovata</h1>
    <Link to="/">Torna alla pagina principale</Link>
  </Layout>
);

export default NotFoundPage;
