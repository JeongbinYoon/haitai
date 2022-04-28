import React from "react";
import HoneyStory_sub from "./HoneyStory_sub";
import HoneyStory_honeypot from "./HoneyStory_honeypot";
import styles from "./HTHoneyStory.module.css";

function HTHoneyStory() {
  return (
    //   background
    <div className={styles.HTHoneyStory}>
      <img
        className={styles.backgroundImg}
        src="images/honeystory/bg-main3.jpg"
        alt="honeystory background"
      />

      <img
        className={styles.backgroundImg2}
        src="images/honeystory/img-bg-main2-0.png"
        alt="honeystory background2"
      />

      <img
        className={styles.titleImg}
        src="images/honeystory/tit-main2-0.png"
        alt="honeystory"
      />
      <p className={styles.caption}>
        제품의 특성을 살린 귀여운 해태제과 캐릭터들의 탄생! <br /> 달콤한
        세상으로 여러분을 이끌어줄 해태제과 캐릭터를 소개합니다.
      </p>

      {/* sub */}
      <HoneyStory_sub />

      {/* bees */}
      <HoneyStory_honeypot />
    </div>
  );
}

export default HTHoneyStory;
