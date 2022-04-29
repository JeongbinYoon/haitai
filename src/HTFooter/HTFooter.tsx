import React, { useState } from "react";
import styles from "./HTFooter.module.css";

function HTFooter() {
  const [isClicked, setIsClicked] = useState("none");

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h2>
          <img src="images/footer/logo-b.png" alt="logo" />
        </h2>
        <div className={styles.links}>
          <a href="#">개인정보처리방침</a>
          <a href="#">이메일주소 무단 수집 거부</a>
          <a href="#">고객문의</a>
          <br />
          <span>COPRYRIGHT</span>
        </div>
        <div className={styles.familysite}>
          <div
            onClick={(e) => {
              isClicked == "none"
                ? setIsClicked("block")
                : setIsClicked("none");
              e.currentTarget.parentElement
                ?.getElementsByTagName("UL")[0]
                .setAttribute("display", "none");
            }}
          >
            FAMILY SITE
          </div>
          <ul style={{ display: `${isClicked}` }}>
            <li>
              <a href="#">- 아이부라보</a>
            </li>
            <li>
              <a href="#">- 해태몰</a>
            </li>
            <li>
              <a href="#">- 해제제과 페이스북</a>
            </li>
            <li>
              <a href="#">- 해누리</a>
            </li>
            <li>
              <a href="#">- 구매사이트</a>
            </li>
            <li>
              <a href="#">- 아트블럭</a>
            </li>
            <li>
              <a href="#">- CHITV</a>
            </li>
          </ul>
        </div>
        <img
          className={styles.webaward}
          src="images/footer/webaward.png"
          alt="webaward"
        />
      </div>
    </div>
  );
}

export default HTFooter;
