import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import styles from "./HTHeader_sub.module.css";

interface HeaderHoverProps {
  setIsListHover: Dispatch<SetStateAction<boolean>>;
  isListHover: boolean;

  setHoverTarget: Dispatch<SetStateAction<string>>;
  hoverTargetClass: string;

  onSubNavOver: (isULMouseOver: boolean) => void;
}

const HTHeader_sub: React.FunctionComponent<HeaderHoverProps> = ({
  isListHover,
  setIsListHover,
  hoverTargetClass,
  setHoverTarget,
  onSubNavOver,
}) => {
  const [navImg, setNavImg] = useState("00");
  const [index, setIndex] = useState(0);
  const [imgPosY, setImgPosY] = useState(0);

  const handleSubLIMouseOver = (e: any) => {
    if (e.indexOf("item1") === 0) {
      setNavImg("00");
    } else if (e.indexOf("item2") === 0) {
      setNavImg("10");
    } else if (e.indexOf("item3") === 0) {
      setNavImg("20");
    } else if (e.indexOf("item4") === 0) {
      setNavImg("30");
    } else if (e.indexOf("item5") === 0) {
      setNavImg("40");
    }
  };

  useEffect(() => {
    if (hoverTargetClass === "menu1") {
      setNavImg("00");
    } else if (hoverTargetClass === "menu2") {
      setNavImg("10");
    } else if (hoverTargetClass === "menu3") {
      setNavImg("20");
    } else if (hoverTargetClass === "menu4") {
      setNavImg("30");
    } else if (hoverTargetClass === "menu5") {
      setNavImg("40");
    }
  }, [hoverTargetClass]);

  useEffect(() => {
    const countUp = setInterval(() => {
      if (index < 9) {
        setIndex(index + 1);
        setImgPosY(imgPosY - 258);
      } else {
        clearInterval(countUp);
        setIndex(0);
        setImgPosY(0);
      }
    }, 100);
    return () => clearInterval(countUp);
  }, [index]);

  let handleSubNavOver = (isULMouseOver: boolean) => {
    onSubNavOver(isULMouseOver);
  };

  return (
    <>
      <div
        className={styles.subNav}
        onMouseLeave={() => {
          handleSubNavOver(false);
        }}
      >
        <div className={styles.container}>
          <div className={styles.navImgBox}>
            <img
              style={{ top: imgPosY }}
              src={`./images/header/img_subNav${navImg}.png`}
              alt="navImg"
            />
          </div>
          <ul className={styles.items}>
            <li
              className={`item1 ${styles.item}`}
              onMouseEnter={(e: any) => {
                handleSubLIMouseOver(e.currentTarget.className);
              }}
            >
              <ul>
                <li>
                  <a href="#">????????????</a>
                </li>
                <li>
                  <a href="#">?????????</a>
                </li>
                <li>
                  <a href="#">??????</a>
                </li>
                <li>
                  <a href="#">???</a>
                </li>
                <li>
                  <a href="#">??????</a>
                </li>
                <li>
                  <a href="#">??????</a>
                </li>
                <li>
                  <a href="#">??????</a>
                </li>
                <li>
                  <a href="#">????????????</a>
                </li>
              </ul>
            </li>
            <li
              className={`item2 ${styles.item}`}
              onMouseEnter={(e: any) => {
                handleSubLIMouseOver(e.currentTarget.className);
              }}
            >
              <ul>
                <li>
                  <a href="#">CF</a>
                </li>
                <li>
                  <a href="#">???????????????</a>
                </li>
                <li>
                  <a href="#">????????????</a>
                </li>
                <li>
                  <a href="#">????????????</a>
                </li>
              </ul>
            </li>
            <li
              className={`item3 ${styles.item}`}
              onMouseEnter={(e: any) => {
                handleSubLIMouseOver(e.currentTarget.className);
              }}
            >
              <ul>
                <li>
                  <a href="#">?????? ??? ?????????</a>
                </li>
                <li>
                  <a href="#">?????? ?????????</a>
                </li>
                <li>
                  <a href="#">????????? ??????</a>
                </li>
              </ul>
            </li>
            <li
              className={`item4 ${styles.item}`}
              onMouseEnter={(e: any) => {
                handleSubLIMouseOver(e.currentTarget.className);
              }}
            >
              <ul>
                <li>
                  <a href="#">????????? ??????</a>
                </li>
                <li>
                  <a href="#">???????????? ??????</a>
                </li>
                <li>
                  <a href="#">Q&A</a>
                </li>
              </ul>
            </li>
            <li
              className={`item5 ${styles.item}`}
              onMouseEnter={(e: any) => {
                handleSubLIMouseOver(e.currentTarget.className);
              }}
            >
              <ul>
                <li>
                  <a href="#">?????? ?????????</a>
                </li>
                <li>
                  <a href="#">?????? ??????</a>
                </li>
                <li>
                  <a href="#">?????? ??????</a>
                </li>
                <li>
                  <a href="#">?????? ????????????</a>
                </li>
                <li>
                  <a href="#">????????? ???</a>
                </li>
                <li>
                  <a href="#">??????</a>
                </li>
                <li>
                  <a href="#">IR ??????</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HTHeader_sub;
