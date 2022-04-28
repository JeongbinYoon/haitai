import React, { useState, useEffect } from "react";
import styles from "./HTHoneyStory.module.css";

const HoneyStory_honeypot = () => {
  const [index, setIndex] = useState(0);
  const [bee1PosY, setBee1posY] = useState(0);
  const [bee2PosY, setBee2posY] = useState(0);
  const [bee3PosY, setBee3posY] = useState(0);

  useEffect(() => {
    const countUp = setInterval(() => {
      if (index < 49) {
        setIndex(index + 1);
        setBee1posY(bee1PosY - 380);
        setBee2posY(bee2PosY - 150);
        setBee3posY(bee3PosY - 148);
      } else {
        clearInterval(countUp);
        setIndex(0);
        setBee1posY(0);
        setBee2posY(0);
        setBee3posY(0);
      }
    }, 100);
    return () => clearInterval(countUp);
  }, [index, bee1PosY, bee2PosY, bee3PosY]);

  return (
    <>
      <div className={styles.honeypot}>
        <div className={styles.bee1}>
          <img
            style={{ top: bee1PosY }}
            src="images/honeystory/img-bg-main2-0-0.png"
            alt="beeImg1"
          />
        </div>
        <div className={styles.bee2}>
          <img
            style={{ top: bee2PosY }}
            src="images/honeystory/img-bee0.png"
            alt="beeImg2"
          />
        </div>
      </div>

      <div className={styles.honeypot2}>
        <div className={styles.bee3}>
          <img
            style={{ top: bee3PosY }}
            src="images/honeystory/img-honeybee0.png"
            alt="beeImg3"
          />
        </div>
        <img
          className={styles.pot}
          src="images/honeystory/img-bg-main2-0-1.png"
          alt="beeImg3"
        />
      </div>
    </>
  );
};
export default HoneyStory_honeypot;
