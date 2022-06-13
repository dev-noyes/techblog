import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "모바일앱 개발",
    Svg: require("../../static/img/reactnative.svg").default,
    description: "ReactNative + Expo 로 안드로이드 iOS 앱을 만들어요. EAS로 배포를 하고 code push를 사용합니다.",
  },
  {
    title: "Unity",
    Svg: require("../../static/img/unity.svg").default,
    description: "AR foundation을 활용한 AR 서비스를 기획하고 개발하고 있습니다. 간단한 2d 게임을 만드는데 관심있어요.",
  },
  {
    title: "Machine Learning",
    Svg: require("../../static/img/tensorflowjs.svg").default,
    description: "Tensorflow JS를 활용한 서비스에 관심이 많아요. Nocode AI 나 super resolution, pose detection 에 관심있어요.",
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
