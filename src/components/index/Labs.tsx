import React, {VFC} from "react";
import {CssLogo} from "../icons/CssLogo";
import {DockerLogo} from "../icons/DockerLogo";
import {GatsbyLogo} from "../icons/GatsbyLogo";
import {GraphqlLogo} from "../icons/GraphqlLogo";
import {HTMLLogo} from "../icons/HTMLLogo";
import {JavaScriptLogo} from "../icons/JavaScriptLogo";
import {NodejsLogo} from "../icons/NodejsLogo";
import {PostgresLogo} from "../icons/PostgresLogo";
import {ReactLogo} from "../icons/ReactLogo";
import {TypescriptLogo} from "../icons/TypescriptLogo";
import {Lab} from "../Labs/Lab";

const labs = [
  {
    url: "https://lireddit.lazzaroni.io/",
    repo: "https://github.com/Fakkio/lireddit",
    name: "Lireddit",
    desc: "un limitato clone di un form tipo reddit",
    technologies: [
      <ReactLogo key="ReactJs" aria-label="ReactJs" />,
      <TypescriptLogo key="TypeScript" aria-label="TypeScript" />,
      <GraphqlLogo key="GraphQl" aria-label="GraphQl" />,
      <NodejsLogo key="Node.js" aria-label="Node.js" />,
      <PostgresLogo key="PostgreSQL" aria-label="PostgreSQL" />,
      <DockerLogo key="Docker" aria-label="Docker" />,
    ],
  },
  {
    url: "https://fakkio.github.io/3d-business-card/",
    repo: "https://github.com/Fakkio/3d-business-card",
    name: "3d Business Card",
    desc: "Un biglietto da visita visto in 3d",
    technologies: [
      <JavaScriptLogo key="JavaScript" aria-label="JavaScript" />,
      <CssLogo key="CSS" aria-label="CSS" />,
      <HTMLLogo key="HTML" aria-label="HTML" />,
    ],
  },
  {
    url: "https://fabiolazzaroni.dev/",
    repo: "https://github.com/Fakkio/fabiolazzaroni.dev",
    name: "fabiolazzaroni.dev",
    desc: "questo sito!",
    technologies: [
      <ReactLogo key="ReactJs" aria-label="ReactJs" />,
      <GatsbyLogo key="Gatsby" aria-label="Gatsby" />,
      <NodejsLogo key="Node.js" aria-label="Node.js" />,
    ],
  },
];

export const Labs: VFC = () => {
  return (
    <>
      {labs.map((labProps) => (
        <Lab key={labProps.name} {...labProps} />
      ))}
    </>
  );
};
