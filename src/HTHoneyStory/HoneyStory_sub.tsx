import React, { useState, useEffect } from "react";
import styles from "./HTHoneyStory.module.css";

const HoneyStory_sub = () => {
  const [index, setIndex] = useState(0);
  const [leftPosY, setLeftPosY] = useState(0);
  const [rightPosY, setRightPosY] = useState(0);

  useEffect(() => {
    const countUp = setInterval(() => {
      if (index < 25) {
        setIndex(index + 1);
        setLeftPosY(leftPosY - 107);
        setRightPosY(rightPosY - 107);
      } else {
        clearInterval(countUp);
        setIndex(0);
        setLeftPosY(0);
        setRightPosY(0);
      }
    }, 100);
    return () => clearInterval(countUp);
  }, [index, leftPosY, rightPosY]);
  return (
    <div className={styles.sub}>
      <div className={styles.subLeft}>
        <div className={styles.imgBox}>
          <img
            style={{ top: leftPosY }}
            src="images/honeystory/img-main2-0-0-1.png"
            alt="subImg1"
          />
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
          <img
            style={{ top: rightPosY }}
            src="images/honeystory/img-main2-0-1-1.png"
            alt="subImg2"
          />
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
  );
};
export default HoneyStory_sub;
