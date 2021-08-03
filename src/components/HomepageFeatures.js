import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/svg/fastj_icon_wired.svg').default,
    description: (
      <>
        FastJ was designed with ease of use in mind. With <b>expressive syntax</b>, a plethora of <b>documentation</b>, and lots of <b>helpful examples</b>, you'll never be left in the dark.
      </>
    ),
  },
  {
    title: 'Lightweight Where it Counts',
    Svg: require('../../static/svg/lightweight.svg').default,
    description: (
      <>
        FastJ is <b>under 10MB in total size</b>, and uses as few dependencies as possible. You can focus on your content -- we won't get in your way with bloat.
      </>
    ),
  },
  {
    title: 'Cross-Platform',
    Svg: require('../../static/svg/win-mac-lin-combo-interesting.svg').default,
    description: (
      <>
        FastJ fully supports <b>Windows, macOS, and Linux</b>. Targeting multiple platforms is a breeze with <b>Github Actions</b> and <b>jpackage</b>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureMedia} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
