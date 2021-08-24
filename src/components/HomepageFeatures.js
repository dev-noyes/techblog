import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Mobile</Translate>,
    Svg: require('../../static/img/reactnative.svg').default,
    description: (
      <Translate>
        I make the mobile application with react-native with expo. 
        I love react hooks and react-navigation. 
      </Translate>
    ),
  },
  {
    title: <Translate>Unity</Translate>,
    Svg: require('../../static/img/unity.svg').default,
    description: (
      <Translate>
        I have an interests on the AR with unity AR foundation. 
        Currently interted in apps walking with AR animals.
      </Translate>
    ),
  },
  {
    title: <Translate>Machine Learning</Translate>,
    Svg: require('../../static/img/tensorflowjs.svg').default,
    description: (
      <Translate>
        I used the ML for forecasting the stock price or bitcoion price.
        And intereted in object detection and sign language detection.
      </Translate>
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
