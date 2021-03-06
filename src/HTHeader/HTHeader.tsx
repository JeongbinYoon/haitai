import React, { useState } from "react";
import styles from "./HTHeader.module.css";
import HTHeader_sub from "./HTHeader_sub";

const HTHeader = () => {
  const [isListHover, setIsListHover] = useState(false);
  const [isULMouseOver, setIsULMouseOver] = useState(false);
  const [hoverTargetClass, setHoverTargetClass] = useState("");

  let handleSubNavOver = (isULMouseOver: boolean) => {
    setIsULMouseOver(isULMouseOver);
  };

  return (
    <>
      <div className={styles.HTHeader}>
        <h1>
          <a href="#">
            <img src="images/header/logo.png" alt="logo" />
          </a>
        </h1>

        <nav className={styles.nav}>
          <ul
            onMouseEnter={() => {
              setIsULMouseOver(true);
            }}
          >
            <li>
              <a
                className="menu1"
                onMouseOver={(e) => {
                  setHoverTargetClass(e.currentTarget.className);
                  setIsListHover(true);
                }}
                onMouseOut={() => {
                  setIsListHover(false);
                }}
                href="#"
              >
                제품소개
              </a>
            </li>
            <li>
              <a
                className="menu2"
                onMouseOver={(e) => {
                  setHoverTargetClass(e.currentTarget.className);
                  setIsListHover(true);
                }}
                onMouseOut={() => setIsListHover(false)}
                href="#"
              >
                달콤한 세상
              </a>
            </li>
            <li>
              <a
                className="menu3"
                onMouseOver={(e) => {
                  setHoverTargetClass(e.currentTarget.className);
                  setIsListHover(true);
                }}
                onMouseOut={() => setIsListHover(false)}
                href="#"
              >
                이벤트
              </a>
            </li>
            <li>
              <a
                className="menu4"
                onMouseOver={(e) => {
                  setHoverTargetClass(e.currentTarget.className);
                  setIsListHover(true);
                }}
                onMouseOut={() => setIsListHover(false)}
                href="#"
              >
                고객센터
              </a>
            </li>
            <li>
              <a
                className="menu5"
                onMouseOver={(e) => {
                  setHoverTargetClass(e.currentTarget.className);
                  setIsListHover(true);
                }}
                onMouseOut={() => setIsListHover(false)}
                href="#"
              >
                회사소개
              </a>
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
              <input
                className={styles.search}
                type="text"
                placeholder="SEARCH"
              />
              <button className={styles.searchBtn}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </nav>
      </div>
      {isULMouseOver && (
        <HTHeader_sub
          isListHover={isListHover}
          setIsListHover={setIsListHover}
          hoverTargetClass={hoverTargetClass}
          setHoverTarget={setHoverTargetClass}
          onSubNavOver={handleSubNavOver}
        />
      )}
    </>
  );
};

export default HTHeader;
