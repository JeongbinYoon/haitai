import React from "react";
import styles from "./HTHeader.module.css";

function HTHeader() {
  return (
    <div className={styles.HTHeader}>
      <h1>
        <a href="#">
          <img src="images/logo.png" alt="logo" />
        </a>
      </h1>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">제품소개</a>
          </li>
          <li>
            <a href="#">달콤한 세상</a>
          </li>
          <li>
            <a href="#">이벤트</a>
          </li>
          <li>
            <a href="#">고객센터</a>
          </li>
          <li>
            <a href="#">회사소개</a>
          </li>
        </ul>

        <div className={styles.navRight}>
          <ul>
            <li>
              <a href="#">
                <span>SITE MAP</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>English</span>
              </a>
            </li>
          </ul>

          <div className={styles.searchBox}>
            <input className={styles.search} type="text" placeholder="SEARCH" />
            <button className={styles.searchBtn}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HTHeader;
