import {Link} from "gatsby";
import * as React from "react";
import {image} from "../components/404/404.module.scss";
import {LeftArrow} from "../components/icons/LeftArrow";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import confusedJohn from "../images/confused-john.gif";

const NotFoundPage = () => {
  return (
    <Layout centered vCentered>
      <SEO title="404: Pagina non trovata" />
      <h1>404: Pagina non trovata</h1>
      <img
        src={confusedJohn}
        alt="John Travolta confuso"
        className={image}
        height={(490 / 10) * 4}
        width={(476 / 10) * 4}
      />
      <Link to="/">
        <LeftArrow /> Torna alla pagina principale
      </Link>
    </Layout>
  );
};

export default NotFoundPage;
