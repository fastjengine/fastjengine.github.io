import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./HomepageFeatures.module.scss";

interface Feature {
  title: string;
  icon: React.ComponentType<React.HTMLProps<HTMLDivElement>>;
  description: React.ReactNode;
}

const FeatureList: Feature[] = [
  {
    title: "Easy to Use",
    icon: require("../../static/svg/lightweight.svg").default,
    description: (
      <>
        FastJ was designed with ease of use in mind. With <b>simple syntax</b>,
        a plethora of
        <Link to="wiki/intro">
          <b> documentation</b>
        </Link>
        , and lots of
        <Link to="wiki/tutorials/hello-fastj">
          <b> helpful tutorials</b>
        </Link>
        , you'll never be left in the dark.
      </>
    ),
  },
  {
    title: "Lightweight Where it Counts",
    icon: require("../../static/svg/lightweight.svg").default,
    description: (
      <>
        FastJ is <b>under 10MB in total size</b>, and uses as few dependencies
        as possible. You can focus on your content -- we won't get in your way
        with bloat.
      </>
    ),
  },
  {
    title: "Cross-Platform",
    icon: require("../../static/svg/win-mac-lin-combo-interesting.svg").default,
    description: (
      <>
        FastJ fully supports <b>Windows, macOS, and Linux</b>. Targeting
        multiple platforms is a breeze with <b>Github Actions</b> and{" "}
        <b>jpackage</b>.
      </>
    ),
  },
];

function Feature({ icon: Icon, title, description }: Feature): JSX.Element {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Icon className={styles.featureMedia} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
