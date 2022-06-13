import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const MobileList = [
  {
    title: "한글립 Hangul Lip",
    Svg: require("../../static/img/hangul.svg").default,
    description: "한국어 발음 교정 서비스. 한국어 발음을 녹음하고 점수를 알려줍니다.",
    link: "docs/mobile/3",
  },
  {
    title: "태그스캔 TagScan",
    Svg: require("../../static/img/tagscan.svg").default,
    description: "사진에 있는 복잡한 글자들을 AI를 활용해서 쉽게 얻어보세요.",
    link: "docs/mobile/4",
  },
  {
    title: "글로벌 환율 Global Currency",
    Svg: require("../../static/img/global.svg").default,
    description: "실시간 글로벌 환율 정보를 얻어보세요.",
    link: "docs/mobile/5",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <a href={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
      </a>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function MobilepageFeactures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center padding-horiz--md">
          <h1 className="hero__title">개발한 모바일앱</h1>
        </div>
        <div className="row">
          {MobileList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
