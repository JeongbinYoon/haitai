import React from "react";
import styles from "./HTHoneyStory.module.css";

function HTHoneyStory() {
  return (
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
      <div className={styles.sub}>
        <div className={styles.subLeft}>
          <div className={styles.imgBox}>
            <img src="images/honeystory/img-main2-0-0-1.png" alt="subImg1" />
          </div>
          <h3>
            <img src="images/honeystory/txt-main2-0-0.png" alt="subImg1" />
          </h3>
          <p>
            새로운 달콤함을 찾아라! 어떻게 새로운
            <br /> 달콤함을 만들어 낼까? 해태제과는 세상에
            <br /> 없던 새로운 달콤한 맛을 찾기로 했어요!
          </p>
        </div>

        <div className={styles.subRight}>
          <div className={styles.imgBox}>
            <img src="images/honeystory/img-main2-0-1-1.png" alt="subImg2" />
          </div>
          <h3>
            <img src="images/honeystory/txt-main2-0-1.png" alt="subImg1" />
          </h3>
          <p>
            일만오천 시간이 넘게! 고민을 하고,
            <br />
            일천오백 봉지가 넘게! 맛을 보고,
            <br />
            드디어 탄생한 해태 오리지널 허니 시리즈!
            <br />
            해태제과의 새로운 달콤함을 만나보세요!
          </p>
        </div>
      </div>
      {/* bees */}
      <div className={styles.honeypot}>
        <div className={styles.bee1}>
          <img src="images/honeystory/img-bg-main2-0-0.png" alt="beeImg1" />
        </div>
        <div className={styles.bee2}>
          <img src="images/honeystory/img-bee0.png" alt="beeImg2" />
        </div>
      </div>

      <div className={styles.honeypot2}>
        <div className={styles.bee3}>
          <img src="images/honeystory/img-honeybee0.png" alt="beeImg3" />
        </div>
        <img
          className={styles.pot}
          src="images/honeystory/img-bg-main2-0-1.png"
          alt="beeImg3"
        />
      </div>
    </div>
  );
}

export default HTHoneyStory;
