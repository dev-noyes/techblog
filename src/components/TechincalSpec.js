import React from 'react';
import clsx from 'clsx';
import styles from './TechicalSpec.module.css';

const FeatureList = [
  {
    title: "사용가능한 테크 지식",
    img: require('../../static/img/techspec.png').default,
    description:"완성품을 만들기위해 다양한 지식들을 습득하는 개발자입니다.",
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