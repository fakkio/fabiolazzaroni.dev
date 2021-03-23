import React, {VFC} from "react";
import factorioLogo from "../../images/factorio-logo.png";
import {noWrap} from "../../styles/text.module.scss";
import {GraphqlLogo} from "../icons/GraphqlLogo";
import {icon} from "../icons/icon.module.scss";
import {JefLogo} from "../icons/JefLogo";
import {NodejsLogo} from "../icons/NodejsLogo";
import {PostgresLogo} from "../icons/PostgresLogo";
import {ReactLogo} from "../icons/ReactLogo";
import {TypescriptLogo} from "../icons/TypescriptLogo";
import {BlinkingAmstrad} from "./Bio/BlinkingAmstrad";
import {amstrad} from "./Bio/Bio.module.scss";

export const Bio: VFC = () => {
  return (
    <>
      <p>
        Sono un ingegnere informatico che ha fatto della sua passione il suo
        lavoro. Parlo ai computer da quando avevo 10 anni (grazie ad un{" "}
        <a
          href="https://it.wikipedia.org/wiki/Amstrad_CPC_464"
          className={amstrad}
        >
          <BlinkingAmstrad />
        </a>
        ), sviluppo per il web dal 2008 (
        <a href="http://jeflab.it/" className={noWrap}>
          <JefLogo aria-label="j&fLab" /> j&fLab.it
        </a>
        ) e mi sono specializzato nella creazione di applicazioni, in
        particolare di front-end, ma mi dedico anche al back-end.
      </p>
      <p>
        Le mie tecnologie preferite in questo momento sono:{" "}
        <span className={noWrap}>
          <ReactLogo aria-label="React" /> React
        </span>
        ,{" "}
        <span className={noWrap}>
          <TypescriptLogo aria-label="TypeScript" /> TypeScript
        </span>
        ,{" "}
        <span className={noWrap}>
          <GraphqlLogo aria-label="GraphQl" /> GraphQl
        </span>
        ,{" "}
        <span className={noWrap}>
          <NodejsLogo aria-label="Node.js" /> Node.js
        </span>{" "}
        and{" "}
        <span className={noWrap}>
          <PostgresLogo aria-label="PostgreSQL" /> PostgreSQL
        </span>
        .
      </p>
      <p>
        Sono nato nel 1984 in Val Camonica ma dal 2016 vivo in provincia di
        Brescia con{" "}
        <span className={noWrap}>
          <span role="img" aria-label="Donna">
            👩🏼‍🦰
          </span>{" "}
          Eva
        </span>
        ,{" "}
        <span className={noWrap}>
          <span role="img" aria-label="Gatto">
            🐱
          </span>{" "}
          Priscilla
        </span>
        ,{" "}
        <span className={noWrap}>
          <span role="img" aria-label="Gatto">
            🐱
          </span>{" "}
          Sheeba
        </span>{" "}
        e{" "}
        <span className={noWrap}>
          <span role="img" aria-label="Gatto">
            🐱
          </span>{" "}
          Vasja
        </span>
        .
      </p>
      <p>
        Adoro cucinare, friggere, impastare, grigliare e ultimamente mi sono
        appassionato alla cottura sous-vide.
        <br />
        Mi piacciono i videogiochi, soprattutto RPG, strategici e gestionali{" "}
        <a
          href="https://store.steampowered.com/app/427520/Factorio/"
          className={noWrap}
        >
          <img src={factorioLogo} alt="factorio logo" className={icon} />{" "}
          factorio
        </a>
      </p>
    </>
  );
};
