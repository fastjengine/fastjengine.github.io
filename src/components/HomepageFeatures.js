import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        FastJ was designed with ease of use in mind. With a plethora of <b>documentation</b>, 
        easily-read syntax, and lots of <b>helpful examples</b>, you'll never be left in the dark.
      </>
    ),
  },
  {
    title: 'Lightweight where it Counts',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        FastJ uses no external dependencies and is <b>under 1MB in total size</b>. You can focus 
        on your content -- we won't get in the way with bloat.
      </>
    ),
  },
  {
    title: 'Cross-Platform',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        FastJ fully supports <b>Windows, macOS, and Linux</b>. Targeting multiple platforms is 
        a breeze with <b>Github Actions</b> and <b>jpackage</b>.
      </>
    ),
  },
  {
    title: 'Cross-Platform',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        FastJ fully supports Windows, macOS, and Linux. Building executables for multiple 
        platforms is a snap with Github Actions and jpackage.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
