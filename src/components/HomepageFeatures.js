import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Mobile',
    Svg: require('../../static/img/reactnative.svg').default,
    description: (
      <>
        I make the mobile application with react-native with expo. 
        I love react hooks and react-navigation. 
      </>
    ),
  },
  {
    title: 'Unity',
    Svg: require('../../static/img/unity.svg').default,
    description: (
      <>
        I have an interests on the AR with unity AR foundation. 
        Currently interted in apps walking with AR animals.
      </>
    ),
  },
  {
    title: 'Machine Learning',
    Svg: require('../../static/img/tensorflowjs.svg').default,
    description: (
      <>
        I used the ML for forecasting the stock price or bitcoion price.
        And intereted in object detection and sign language detection.
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
