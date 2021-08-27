import React from 'react';
import clsx from 'clsx';
import styles from './TechicalSpec.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>This is my technical spec.</Translate>,
    img: require('../../static/img/techspec.png').default,
    description: (
      <Translate>
        I dream of becoming a software engineer who can experience and combine all kinds of software.
      </Translate>
    ),
  },
];
function Feature({ img, title, description }) {
  return (
    <div className="container">
      <div className="text--center padding-horiz--md">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{description}</p>
      </div>
      <div className="text--center">
        <img className={styles.featureImg} src={img} alt="Logo" />
      </div>
    </div>
  );
}

export default function TechnicalSpec() {
  return (
    <header className={clsx('hero hero--primary--darker', styles.spec)}>
      <div className="container">
        <div className="container">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </header>
  );
}