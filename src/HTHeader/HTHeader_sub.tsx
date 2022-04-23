import React from "react";
import styles from "./HTHeader_sub.module.css";

const HTHeader_sub = () => (
  <div className={styles.subNav}>
    <div className={styles.container}>
      <div className={styles.navImg}>
        <img src="./images/img_subNav00.png" alt="navImg" />
      </div>
      <ul className={styles.items}>
        <li className={styles.item}>
          <ul>
            <li>
              <a href="#">해태제과</a>
            </li>
            <li>
              <a href="#">비스켓</a>
            </li>
            <li>
              <a href="#">스낵</a>
            </li>
            <li>
              <a href="#">껌</a>
            </li>
            <li>
              <a href="#">초코</a>
            </li>
            <li>
              <a href="#">캔디</a>
            </li>
            <li>
              <a href="#">식품</a>
            </li>
            <li>
              <a href="#">전자제품</a>
            </li>
          </ul>
        </li>
        <li className={styles.item}>
          <ul>
            <li>
              <a href="#">CF</a>
            </li>
            <li>
              <a href="#">아이부라보</a>
            </li>
            <li>
              <a href="#">공지사항</a>
            </li>
            <li>
              <a href="#">해태뉴스</a>
            </li>
          </ul>
        </li>
        <li className={styles.item}>
          <ul>
            <li>
              <a href="#">진행 중 이벤트</a>
            </li>
            <li>
              <a href="#">지난 이벤트</a>
            </li>
            <li>
              <a href="#">당첨자 발표</a>
            </li>
          </ul>
        </li>
        <li className={styles.item}>
          <ul>
            <li>
              <a href="#">고객의 소리</a>
            </li>
            <li>
              <a href="#">아이디어 제안</a>
            </li>
            <li>
              <a href="#">Q&A</a>
            </li>
          </ul>
        </li>
        <li className={styles.item}>
          <ul>
            <li>
              <a href="#">회장 인사말</a>
            </li>
            <li>
              <a href="#">해태 소개</a>
            </li>
            <li>
              <a href="#">윤리 경영</a>
            </li>
            <li>
              <a href="#">해태 네트워크</a>
            </li>
            <li>
              <a href="#">오시는 길</a>
            </li>
            <li>
              <a href="#">채용</a>
            </li>
            <li>
              <a href="#">IR 정보</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

export default HTHeader_sub;
