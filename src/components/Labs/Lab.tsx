import React, {VFC} from "react";
import {GitHubLogo} from "../icons/GitHubLogo";
import {description, lab, technologiesList, title} from "./Lab.module.scss";

interface LabProps {
  desc: string;
  name: string;
  repo: string;
  technologies: JSX.Element[];
  url: string;
}

export const Lab: VFC<LabProps> = ({desc, name, repo, technologies, url}) => {
  return (
    <div key={name} className={lab}>
      <h3 className={title}>
        <a href={url} className="stretchedLink">
          <span>{name}</span>
        </a>
        <a href={repo} className="onlyIcon">
          <GitHubLogo aria-label="repository github" />
        </a>
      </h3>
      <p className={description}>{desc}</p>
      <p className={technologiesList}>{technologies}</p>
    </div>
  );
};
