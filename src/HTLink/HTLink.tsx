import React, { useState } from "react";
import styles from "./HTLink.module.css";

const HTLink = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const changeURL = (e: any) => {
    let src = e.currentTarget.getAttribute("src");
    if (isMouseOver) {
      src = src.replace("png", "gif");
      e.currentTarget.setAttribute("src", src);
    } else {
      src = src.replace("gif", "png");
      e.currentTarget.setAttribute("src", src);
    }
  };

  return (
    <div className={styles.HTLink}>
      <h2 className={styles.caption}>HAITAI LINK</h2>
      <div className={styles.items}>
        <a href="#">
          <img
            onMouseOver={(e) => {
              setIsMouseOver(false);
              changeURL(e);
            }}
            onMouseOut={(e) => {
              setIsMouseOver(true);
              changeURL(e);
            }}
            src={`images/link/img-main4-6.png`}
            alt="인스타그램"
          />

          <span>인스타그램</span>
        </a>
        <a href="#">
          <img
            onMouseOver={(e) => {
              setIsMouseOver(false);
              changeURL(e);
            }}
            onMouseOut={(e) => {
              setIsMouseOver(true);
              changeURL(e);
            }}
            src={`images/link/img-main4-7.png`}
            alt="네이버 블로그"
          />
          <span>네이버 블로그</span>
        </a>
        <a href="#">
          <img
            onMouseOver={(e) => {
              setIsMouseOver(false);
              changeURL(e);
            }}
            onMouseOut={(e) => {
              setIsMouseOver(true);
              changeURL(e);
            }}
            src="images/link/img-main4-8.png"
            alt="네이버 포스트"
          />
          <span>네이버 포스트</span>
        </a>
        <a href="#">
          <img
            onMouseOver={(e) => {
              setIsMouseOver(false);
              changeURL(e);
            }}
            onMouseOut={(e) => {
              setIsMouseOver(true);
              changeURL(e);
            }}
            src="images/link/img-main4-0.png"
            alt="고객센터"
          />
          <span>고객센터</span>
        </a>
        <a href="#">
          <img
            onMouseOver={(e) => {
              setIsMouseOver(false);
              changeURL(e);
            }}
            onMouseOut={(e) => {
              setIsMouseOver(true);
              changeURL(e);
            }}
            src="images/link/img-main4-1.png"
            alt="오시는 길"
          />
          <span>오시는 길</span>
        </a>
        <a href="#">
          <img
            onMouseOver={(e) => {
              setIsMouseOver(false);
              changeURL(e);
            }}
            onMouseOut={(e) => {
              setIsMouseOver(true);
              changeURL(e);
            }}
            src="images/link/img-main4-2.png"
            alt="동반성장"
          />
          <span>동반성장</span>
        </a>
        <a href="#">
          <img
            onMouseOver={(e) => {
              setIsMouseOver(false);
              changeURL(e);
            }}
            onMouseOut={(e) => {
              setIsMouseOver(true);
              changeURL(e);
            }}
            src="images/link/img-main4-3.png"
            alt="채용"
          />
          <span>채용</span>
        </a>
        <a href="#">
          <img
            onMouseOver={(e) => {
              setIsMouseOver(false);
              changeURL(e);
            }}
            onMouseOut={(e) => {
              setIsMouseOver(true);
              changeURL(e);
            }}
            src="images/link/img-main4-4.png"
            alt="해태몰"
          />
          <span>해태몰</span>
        </a>
        <a href="#">
          <img
            onMouseOver={(e) => {
              setIsMouseOver(false);
              changeURL(e);
            }}
            onMouseOut={(e) => {
              setIsMouseOver(true);
              changeURL(e);
            }}
            src="images/link/img-main4-5.png"
            alt="아이부라보"
          />
          <span>아이부라보</span>
        </a>
      </div>
    </div>
  );
};

export default HTLink;
