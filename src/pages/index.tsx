import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

import HomepageFeatures from "../components/HomepageFeatures";
import styles from "./index.module.scss";

function HomepageHeader(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">
                    <span style={{ color: "#1B6BF9", fontWeight: 900 }}>F</span>
                    <span style={{ color: "#1B6BF9" }}>ast</span>
                    <span style={{ color: "#ee8200", fontWeight: 900 }}>J</span>
                </h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/wiki/fastj-basics/fastj-quick-start">
                        Get Started &#187;
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="button button--secondary button--lg" to="/wiki/intro">
                        About FastJ &#187;
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    return (
        <Layout title="Home" description="The open-source, 2D Java game engine.">
            <HomepageHeader />

            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
