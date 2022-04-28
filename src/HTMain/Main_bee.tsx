import React, { useEffect, useState } from "react";
import styles from "./HTMain.module.css";

const Main_bee = () => {
  const [index, setIndex] = useState(0);
  const [beePosY, setBeePosY] = useState(0);

  useEffect(() => {
    const countUp = setInterval(() => {
      if (index < 29) {
        setIndex(index + 1);
        setBeePosY(beePosY - 187);
      } else {
        clearInterval(countUp);
        setIndex(0);
        setBeePosY(0);
      }
    }, 100);
    return () => clearInterval(countUp);
  }, [index, beePosY]);

  return (
    <div className={styles.bee}>
      <img
        style={{ top: beePosY }}
        src="images/main/bg-main0-3-0.png"
        alt="bee"
      />
    </div>
  );
};

export default Main_bee;
